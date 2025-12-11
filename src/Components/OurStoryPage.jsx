import { Link } from "react-router-dom";

const OurStoryPage = () => {
  return (
    <section className="bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-light mb-6">
          The Beginning of Our Forever
        </h2>
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[900px] rounded-xl overflow-hidden shadow-md">
          <img
            src="https://res.cloudinary.com/dtjwzjgx6/image/upload/v1764886161/FaithEngagement13_abrmgv.jpg"
            alt="How it all began"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-rows-1 px-6 md:px-16 py-16">
        <div className="justify-self-start text-left max-w-xl">
          <blockquote className="text-xl md:text-2xl italic font-light">
            Coming soon
            <footer className="mt-4 text-sm text-[#6F4E37]">— Chukwudi</footer>
          </blockquote>
        </div>

        <div className="justify-self-end text-right max-w-xl mt-4 md:mt-24">
          <blockquote className="text-xl md:text-2xl italic font-light">
            Coming Soon
            <footer className="mt-4 text-sm text-[#6F4E37]">— Faith</footer>
          </blockquote>
        </div>
      </div>

      <section className="bg-white py-12 px-4 md:px-12 lg:px-24 space-y-16">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-600">
          Share <span className="text-[#9CAF88] font-semibold">Our Story</span>
        </h2>

        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-start">
          <div className="relative w-full lg:w-[40%] min-w-[280px]">
            <img
              src="https://res.cloudinary.com/dtjwzjgx6/image/upload/v1764892053/FaithEngagement12_wzstnn.jpg"
              alt="Camera"
              className="w-full rounded-md shadow-md"
            />
          </div>

          <div className="relative z-10 -mt-10 lg:-ml-16 bg-[#9CAF88] text-white p-6 md:p-8 rounded-md shadow-xl w-full max-w-md">
            <p className="mb-4 text-sm leading-relaxed">Coming Soon</p>
            <p className="text-sm mb-4 leading-relaxed">Coming Soon</p>
            <p className="text-sm mb-4">Coming Soon</p>

            <button className="bg-gray-900 hover:bg-[#B59410] transition px-4 py-2 rounded text-sm">
              <Link to="/moment">Moments</Link>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurStoryPage;
