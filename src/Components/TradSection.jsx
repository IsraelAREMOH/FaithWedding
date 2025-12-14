export default function TradSection() {
  return (
    <section className="w-full bg-white text-gray-700 px-4 md:px-12 lg:px-20 py-16">
      <div className="grid md:grid-cols-2 gap-2 items-center">
        {/* IMAGE BLOCK */}
        <div className="relative w-full">
          {/* MOBILE — centered overlap */}
          <div className="relative w-full h-80 sm:h-96 md:hidden flex justify-center">
            {/* Back image */}
            <img
              src="https://res.cloudinary.com/dtjwzjgx6/image/upload/v1764881724/FaithEngagement7_aqzerb.jpg"
              className="absolute w-2/3 h-64 sm:h-72 object-cover rounded-xl"
              style={{ left: "50%", transform: "translateX(-60%)" }}
              alt=""
            />

            {/* Front image */}
            <img
              src="https://res.cloudinary.com/dtjwzjgx6/image/upload/v1764881699/FaithEngagement3_eaqxlu.jpg"
              className="absolute w-2/3 h-64 sm:h-72 object-cover rounded-xl shadow-xl"
              style={{
                left: "50%",
                top: "40px",
                transform: "translateX(-40%)",
              }}
              alt=""
            />
          </div>

          {/* DESKTOP/TABLET — original overlap */}
          <div className="hidden md:block relative w-full h-112">
            <img
              src="https://res.cloudinary.com/dtjwzjgx6/image/upload/v1764881724/FaithEngagement7_aqzerb.jpg"
              className="absolute left-0 top-0 w-1/2 h-full object-cover rounded-xl"
              alt=""
            />

            <img
              src="https://res.cloudinary.com/dtjwzjgx6/image/upload/v1764881699/FaithEngagement3_eaqxlu.jpg"
              className="absolute left-1/3 top-10 w-1/2 h-[85%] object-cover rounded-xl shadow-lg z-10"
              alt=""
            />
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-2">
            Traditional Wedding
          </h2>

          <p className="text-lg font-medium">WED 24TH DECEMBER 2025</p>
          <p>Ifegwu's Landing,</p>
          <p>Oba Ogbu, Amaogudu Abiriba,</p>
          <p>in Ohafia LGA, Abia State</p>
          <p>Time 1 : 00pm</p>
          <a
            href="https://www.google.com/maps/dir/Lagos/Obi+Ngwa+L+G+A+Headquarters+Mgboko,+59MQ%2BC5H,+Mgboko+453106,+Abia/@6.0352645,4.0517475,8z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x103b8b2ae68280c1:0xdc9e87a367c3d9cb!2m2!1d3.3552568!2d6.6137395!1m5!1m1!1s0x1042977d97c927f7:0x84714a894aeebb59!2m2!1d7.3879505!2d5.1835702?authuser=0&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <button className="px-6 py-2 mt-2 bg-[#9CAF88] text-white rounded-md hover:bg-[#B59410] transition">
              Map
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
