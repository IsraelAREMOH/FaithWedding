import { motion as Motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideIn = (direction = "left") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

const Project_MovieSec = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-12 px-4 md:px-10 lg:px-20">
      {/* Header */}
      <Motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl text-gray-500 font-bold">
          Colors of <span className="text-[#9CAF88]">the</span> day
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
          Gold, Sage green, Dusty Rose, Champagne
        </p>
      </Motion.div>

      <div className="bg-[#ffff] text-gray-500 px-4 py-12 md:px-10 lg:px-8">
        <Motion.h3
          className="text-2xl font-semibold text-gray-500 text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          #FL2025
        </Motion.h3>

        {/* Far from Home */}
        <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-50 px-12 mb-12">
          <Motion.div
            className="w-full lg:w-1/2 order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn("left")}
          >
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-2">
              White Wedding
            </h2>

            <p className="text-lg font-medium">MON 29TH DECEMBER 2025</p>
            <p>Assemblies of God Church</p>
            <p>Umuekwule, Umuopara,</p>
            <p>Opposite Goodshade oil Market, Umuahia</p>
            <p>Time 10 : 00am</p>
            <a
              href="https://www.google.com/maps/dir/Lagos/Assemblies+Of+God+Church,+FGXQ%2BGQ7,+Government+College,+Umuahia+440103,+Abia/@6.1928316,4.1275262,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!2m2!1d3.3552568!2d6.6137395!1m5!1m1!1s0x1042c550ce612b4f:0xe7f7ec4739b5b810!2m2!1d7.53943!2d5.4987766?authuser=0&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="px-6 py-2 mt-2 bg-[#9CAF88] text-white rounded-md hover:bg-[#B59410] transition">
                Map
              </button>
            </a>
          </Motion.div>

          <Motion.div
            className="w-full sm:w-72 md:w-80 lg:w-96 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn("right")}
          >
            <div className="bg-[#B59410] rounded-lg p-1">
              <Motion.img
                src="https://res.cloudinary.com/dtjwzjgx6/image/upload/v1764886161/FaithEngagement13_abrmgv.jpg"
                alt="Far from Home poster"
                className="rounded w-full h-auto max-h-[400px] object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </Motion.div>
        </div>

        {/* Dust to Dreams */}
        <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-50 px-12">
          <Motion.div
            className="w-full sm:w-72 md:w-80 lg:w-96"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn("left")}
          >
            <div className="bg-[#B59410] rounded-lg p-1">
              <Motion.img
                src="https://res.cloudinary.com/dtjwzjgx6/image/upload/v1764886569/FaithEngagement4_iyrbuv.jpg"
                alt="Dust to Dreams poster"
                className="rounded w-full h-auto max-h-[400px] object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </Motion.div>

          <Motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn("right")}
          >
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-2">
              Reception @
            </h2>

            <p className="text-lg font-medium">
              International Conference Center
            </p>
            <p>Umuahia, Government Station Layout</p>
            <p>Umuahia</p>
            <p>Time 1 : 00pm</p>
            <a
              href="https://www.google.com/maps/dir/Lagos/International+Conference+Centre+Umuahia,+Govt.+Station,+Umuahia/@6.2026025,4.1161624,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!2m2!1d3.3552568!2d6.6137395!1m5!1m1!1s0x1042dca583b6d94b:0xfc095798ce4473bb!2m2!1d7.5168019!2d5.5250659?authuser=0&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="px-6 py-2 mt-2 bg-[#9CAF88] text-white rounded-md hover:bg-[#B59410] transition">
                Map
              </button>
            </a>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project_MovieSec;
