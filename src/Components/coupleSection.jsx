import { services } from "../constants/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion as Motion } from "framer-motion";

const Service = () => {
  return (
    <div>
      <section className="bg-gray-200 text-white text-center py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-2xl font-semibold">
            Forever and <span className="text-[#B59410]">Always</span>
            <div className="flex justify-center mt-2">
              <div className="relative w-20 h-1 bg-[#B59410] rounded-full">
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#B59410] rounded-full"></div>
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#B59410] rounded-full"></div>
              </div>
            </div>
          </h2>
          <p className="mt-4 text-gray-800 max-w-2xl mx-auto">
            Welcome to our wedding hub! You'II find everything you need to join
            the celebration here.
          </p>
          <h3 className="text-3xl md:text-5xl font-serif mb-6">
            We hope you can make it!
          </h3>

          {/* Swiper */}
          <div className="couple mt-12">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              <div className="custom-next text-[#9CAF88] absolute right-2 top-1/2 z-10 cursor-pointer">
                ▶
              </div>
              <div className="custom-prev text-[#9CAF88] absolute left-2 top-1/2 z-10 cursor-pointer">
                ◀
              </div>
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <Motion.div
                    className="h-full flex"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center h-full w-full">
                      {/* Text Section */}
                      <div className="w-full md:w-2/3 md:pr-4 flex flex-col justify-between h-full">
                        <div>
                          <h3 className="text-sm font-semibold mb-2 text-center md:text-left">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600 text-left">
                            {service.description}
                          </p>
                        </div>
                        <svg
                          className="mt-4"
                          width="80"
                          height="12"
                          viewBox="0 0 80 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 6C15 2 30 10 45 8C60 6 75 2 78 2"
                            stroke="#B59410"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>

                      {/* Image Section */}
                      <Motion.div
                        className="w-full md:w-1/3 mt-4 md:mt-0 flex justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="object-cover h-full w-full rounded-lg"
                        />
                      </Motion.div>
                    </div>
                  </Motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
