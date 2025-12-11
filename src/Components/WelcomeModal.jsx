import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

export default function WelcomeModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    Promise.resolve().then(() => setShow(true));
  }, []);

  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modal = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const floatingHeart = {
    animate: {
      y: [-10, 10, -10],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <Motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Floating Gold Heart Behind Modal */}
          <Motion.div
            variants={floatingHeart}
            animate="animate"
            className="absolute text-[90px] text-[#B59410] opacity-40 select-none"
          >
            ❤️
          </Motion.div>

          {/* Main Modal */}
          <Motion.div
            variants={modal}
            className="
              bg-white/90 
              p-12
              sm:p-8 
              rounded-2xl 
              shadow-2xl 
              max-w-sm 
              w-[85%] 
              mx-2 
              text-center
              border-[#B59410]
            "
          >
            <h2 className="text-2xl font-semibold tracking-wide mb-2 text-yellow-700">
              Welcome to Our Wedding
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Thank you for celebrating this special moment with us 💕
            </p>

            <button
              onClick={() => setShow(false)}
              className="
                mt-6 
                px-6 
                py-2 
                bg-[#9CAF88]
                text-white 
                rounded-xl 
                shadow-lg 
                hover:bg-yellow-700 
                transition
              "
            >
              Enter Website
            </button>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
