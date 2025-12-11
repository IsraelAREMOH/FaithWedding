import { moments } from "../constants/index";

function MomentCouple() {
  return (
    <div className="bg-gray-100 min-h-screen bg-center flex flex-col items-center justify-center p-6 text-gray-100">
      {/*  Elegant Masonry Gallery */}
      <div className="relative bg-[#fffdfc] py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-700 tracking-tight mb-3">
            Timeless & Priceless
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            To the Moon and beyond is our Love
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-7xl mx-auto px-4 space-y-5">
          {moments.map((item, i) => (
            <div
              key={i}
              className="group relative break-inside-avoid overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-out"
            >
              {/* Image */}
              <img
                src={item.image}
                alt="couples images"
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Glass layer for subtle luxury effect */}
              <div className="absolute inset-0 backdrop-blur-[1px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MomentCouple;
