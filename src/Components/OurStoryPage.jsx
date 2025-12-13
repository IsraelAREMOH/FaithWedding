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
          <blockquote className="text-sm md:text-2xl italic font-light">
          I first met Faith when she accompanied someone on a visit to my mum, and I thought to myself, what a priceless gem we have here. Fast forward to years later, I looked her up on Facebook and messaged her. The rest, as they say, is history.
            <footer className="mt-4 text-sm text-[#6F4E37]">— Chukwudi</footer>
          </blockquote>
        </div>

        <div className="justify-self-end text-right max-w-xl mt-4 md:mt-24">
          <blockquote className="text-sm md:text-2xl italic font-light">
          Yes, it was true that I visited; he was really polite, respectful, and charmingly cute. We vibed really well when he contacted me on Facebook, and I'm happy to be sharing the rest of my life with him.
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
            <p className="mb-4 text-sm leading-relaxed">I first noticed Faith a few years ago when she accompanied a friend to visit my mom. It wasn’t a formal introduction, but her beauty left a lasting impression on me.
</p>
            <p className="text-sm mb-4 leading-relaxed">Years later, I found her on Facebook and reached out. To my surprise, she was living in Lagos (VI), even though I had first seen her in Umuahia. We began chatting, and despite her being rarely active online, I felt drawn to her.
            </p>
            <p className="text-sm mb-4">Eventually, I asked her out, and we met at The Junction restaurant. I arrived early, and when she walked in, I was completely taken, she was even more beautiful than I remembered. We shared a simple meal of plantain and catfish, a small moment that marked the beginning of everything.

            Three years later, that moment has led us here. Today, I am marrying the most beautiful woman in the world.
            </p>

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
