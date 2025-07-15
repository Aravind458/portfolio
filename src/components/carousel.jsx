"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <img
              src={slides[currentIndex].src}
              alt={slides[currentIndex].title}
              className="rounded-lg shadow-md border border-cyan-400 max-h-56 w-auto object-contain"
            />
            <div className="space-y-2 text-left max-w-sm">
              <h3 className="text-lg font-semibold text-cyan-300">
                {slides[currentIndex].title}
              </h3>
              <p className="text-sm text-gray-300">
                {slides[currentIndex].issuer}
              </p>
              <div>{slides[currentIndex].button}</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-cyan-700 hover:bg-cyan-600 text-white p-1 rounded-full"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-cyan-700 hover:bg-cyan-600 text-white p-1 rounded-full"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Carousel;
