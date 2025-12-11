import { images } from "../constants/index";

const PhotoAlbum = () => {
  return (
    <div className="min-h-screen bg-center bg-gray-100 flex flex-col items-center justify-center p-6 text-gray-100">
      {/* Header Section */}
      <div className="text-center mb-20 animate-fade-in">
        <h1
          style={{ fontFamily: "'Allura', cursive" }}
          className="text-8xl font-extrabold text-[#B59410] mb-8 drop-shadow-2xl"
        >
          Style Ideas
        </h1>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed text-gray-600 bg-white bg-opacity-85 p-6 rounded-xl shadow-xl">
          Need outfit inspiration? The key is sophistication, glamour, classic
          formality, Timeless, refined, distinguished blend of elegance,
          cultural identity, and artistic symbolism
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl w-full bg-white bg-opacity-90 p-6 rounded-xl shadow-2xl mb-20 animate-fade-in-up border-4 border-white">
        <h2 className="text-2xl font-semibold mb-10 text-gray-600">
          Traditional Attire
        </h2>
        <p className="list-disc list-inside text-lg mb-6 space-y-5 text-gray-600">
          Ladies: Fitted blouse paired wrapped George, chic peplum tops, or
          mermaid cuts, finished with a bold gele, Coral beads/statement
          earrings, and bracelets.
        </p>
        <p className="list-disc list-inside text-lg mb-10 space-y-5 text-gray-600">
          Gents: Come sharp in Isi Agu/agbada or a tailored trousers, a red or
          black cap (Okpu Agu or Okpu Ndi Igbo) tailored kaftan with fila,
          cufflinks, Coral beads and polished shoes.
        </p>
        <h2 className="text-2xl font-semibold mb-10 text-gray-600">Dinner</h2>
        <p className="list-disc list-inside text-lg mb-6 space-y-5 text-gray-600">
          Ladies, think elegant long gowns, sleek cuts, and a hint of sparkle,
          paired with standout heels, bold jewellery, and a clutch to match.
          Gents, keep it sharp in a tux or tailored suit with polished shoes, a
          pocket square, and a watch that shows class.
        </p>
        <p className="text-lg text-gray-700">
          Remember to be more elegant. Don't hold back the semi-formal attire to
          show out.
        </p>
      </div>

      {/* ✨ Elegant Masonry Gallery */}
      <div className="relative bg-[#fffdfc] py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-700 tracking-tight mb-3">
            Timeless Elegance
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A curated showcase of graceful designs
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 max-w-7xl mx-auto px-4 space-y-4">
          {images.map((item, i) => (
            <div
              key={i}
              className="group relative break-inside-avoid overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-out"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 backdrop-blur-[1px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoAlbum;
