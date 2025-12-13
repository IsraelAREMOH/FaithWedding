import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { HotelImage } from "../constants/index";

const HotelCards = () => {
  const hotels = [
    {
      id: 2,
      name: "Cozy & Serene Sanctuary-The Paletinos Homes",
      address: "Behind Upstair Line New Timber Industrial Market Umuahia",
      distance: "2.6 mi",
      time: "9 min",
      rating: "★★★",
      bookBefore: "Dec 20, 2025",
      rate: 50,
      link: "https://thepaletinos.com.ng/",
      images: HotelImage.slice(19, 21).map((img) => img.src),
    },
    {
      id: 3,
      name: "Luxury short-let apartments",
      address:
        "Hon.Ejike Obike Rd. By Asonye Close off Divinity Rd Old Umuahia Abia State",
      distance: "2.6 mi",
      time: "13 min",
      rating: "★★★★",
      bookBefore: "Dec 23, 2025",
      rate: 40,
      link: "https://luxuryshortlet.com",
      images: HotelImage.slice(14, 16).map((img) => img.src),
    },
    {
      id: 4,
      name: "Divine Villa and Resort Guest House",
      address:
        "PLOT 35 UMUEZEUKWU ROAD BEHIND IKWUEKE CENTRAL SCHOOL, OBORO, IKWUANO LGA, ABIA STATE",
      distance: "2.3 mi",
      time: "10 min",
      rating: "★★",
      bookBefore: "Dec 20, 2025",
      rate: 35,
      link: "https://divinehotel.com.ng",
      images: HotelImage.slice(4, 6).map((img) => img.src),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 bg-linear-to-br from-gray-50 to-white min-h-screen">
      {/* Responsive grid: 1 col on mobile, 2 on tablets, 3 on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div
            key={`${hotel.id}-${hotel.name}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-gray-300"
          >
            {/* Image Carousel Section */}
            <div className="relative group">
              <Swiper
                modules={[Navigation]}
                navigation
                loop
                className="w-full h-48 sm:h-56 md:h-64 rounded-t-xl"
              >
                {hotel.images.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={src}
                      alt={`${hotel.name} image ${idx + 1}`}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Overlay Hotel ID (top-left) */}
              <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                {hotel.id}
              </span>
            </div>

            {/* Details Section */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 wrap-words">
                {hotel.name}
              </h3>

              <div className="flex flex-wrap items-center text-sm text-gray-600 mt-1 gap-1">
                <span className="text-gray-700">{hotel.rating}</span>
                <span>
                  {hotel.distance} ⏱ {hotel.time}
                </span>
              </div>

              <div className="mt-2 flex flex-wrap justify-between items-center gap-2">
                <p className="text-xs text-gray-500">
                  Book before {hotel.bookBefore}
                </p>
                <p className="text-sm text-teal-600">
                  Group Rate ⓒ ${hotel.rate}/night
                </p>
              </div>
            </div>

            {/* Button Section */}
            <div className="p-4 pt-0">
              <a
                href={hotel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button disabled={!hotel.link}
  className={`w-full py-2 rounded-full text-sm font-medium transition-all
  ${hotel.link
    ? "bg-gray-900 text-white hover:bg-gray-800 hover:scale-105"
    : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}>
                  Check it out online
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelCards;
