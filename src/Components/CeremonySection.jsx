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
              href="https://maps.app.goo.gl/fnNDXz7dx7B6NGct7?g_st=iw"
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
              href="https://maps.app.goo.gl/2a4ULm8KdM39JgT77?g_st=iw"
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
