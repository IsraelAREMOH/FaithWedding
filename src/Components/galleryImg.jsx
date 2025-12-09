import { useState, useEffect, useCallback } from "react";
import GalleryModal from "./GalleryModal";
import axios from "axios";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import GalleryImage from "./GalleryImage";

export default function GalleryImg() {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [likes, setLikes] = useState({});
  const [likedImages, setLikedImages] = useState({});
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  // Pagination state
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Restore liked images
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("likedImages") || "{}");
    setLikedImages(stored);
  }, []);

  // Fetch images function
  const fetchImages = useCallback(
    async (reset = false) => {
      try {
        setLoading(true);
        setError("");

        const res = await axios.get(`${import.meta.env.VITE_API_URL}/gallery`, {
          params: { page: reset ? 1 : page, limit: 20 },
        });

        const newImages = res.data.images || [];

        if (reset) {
          setImages(newImages);
        } else {
          setImages((prev) => [...prev, ...newImages]);
        }

        // Update like counts for new images
        const newLikes = newImages.reduce((acc, img) => {
          acc[img.public_id] = img.likes || 0;
          return acc;
        }, {});
        setLikes((prev) => ({ ...prev, ...newLikes }));

        // Update hasMore flag
        setHasMore(newImages.length === 20); // if less than limit, no more pages
      } catch (err) {
        console.error(err);
        setError("Failed to load photos.");
      } finally {
        setLoading(false);
      }
    },
    [page]
  );

  // Initial fetch and on page change
  useEffect(() => {
    fetchImages(page === 1);
  }, [fetchImages, page]);

  // Like button logic
  const handleLike = async (public_id, uploader) => {
    if (likedImages[public_id]) return;

    setLikes((prev) => ({ ...prev, [public_id]: prev[public_id] + 1 }));
    const updatedLiked = { ...likedImages, [public_id]: true };
    setLikedImages(updatedLiked);
    localStorage.setItem("likedImages", JSON.stringify(updatedLiked));

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/gallery/like`, {
        public_id,
        uploader: uploader || "Anonymous",
      });
    } catch (err) {
      console.error("Failed to like image:", err);
      setLikes((prev) => ({ ...prev, [public_id]: prev[public_id] - 1 }));
      const rollback = { ...updatedLiked };
      delete rollback[public_id];
      setLikedImages(rollback);
      localStorage.setItem("likedImages", JSON.stringify(rollback));
    }
  };

  // Upload success handler
  const handleUploadSuccess = (newImage) => {
    if (!newImage?.url) return;
    setImages((prev) => [newImage, ...prev]);
    setLikes((prev) => ({ ...prev, [newImage.public_id]: 0 }));
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 bg-gray-50 z-10 border-b px-4 py-5 flex flex-col sm:flex-row justify-between gap-3">
        <h1 className="text-3xl font-medium text-gray-500">Wedding Moments</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#9CAF88] text-white px-5 py-3 rounded-lg hover:bg-[#B59410] transition"
        >
          Upload Photo
        </button>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6">
        {/* Skeleton loading */}
        {loading && images.length === 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-xl aspect-square animate-pulse"
              />
            ))}
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <p className="text-center text-red-600 mt-10">{error}</p>
        )}

        {/* No images */}
        {!loading && !error && images.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No photos yet. Be the first to upload!
          </p>
        )}

        {/* Masonry Grid */}
        {!loading && images.length > 0 && (
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4">
            {images.map((img, index) => {
              const optimizedUrl = img.url?.includes("/upload/")
                ? img.url.replace(
                    "/upload/",
                    "/upload/q_auto:eco,f_auto,w_900/"
                  )
                : img.url;

              return (
                <GalleryImage
                  key={img.public_id}
                  img={img}
                  index={index}
                  optimizedUrl={optimizedUrl}
                  onClick={() => setLightboxIndex(index)}
                  onLike={() => handleLike(img.public_id, img.uploader)}
                  liked={likedImages[img.public_id]}
                  likes={likes[img.public_id] || 0}
                />
              );
            })}
          </div>
        )}

        {/* Load More Button */}
        {hasMore && !loading && (
          <div className="text-center mt-8">
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="bg-[#9CAF88] text-white px-6 py-3 rounded-lg hover:bg-[#B59410] transition"
            >
              Load More Photos
            </button>
          </div>
        )}

        {/* Loading indicator for next page */}
        {loading && images.length > 0 && (
          <p className="text-center text-gray-500 mt-4">
            Loading more photos...
          </p>
        )}
      </main>

      {/* Upload Modal */}
      <GalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUploadSuccess={handleUploadSuccess}
      />

      {/* Lightbox Preview */}
      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={images.map((i) => ({ src: i.url }))}
      />
    </div>
  );
}
