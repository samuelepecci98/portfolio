// src/components/sections/Gallery.jsx
import { RevealOnScroll } from "../RevealOnScroll";

export const Gallery = () => {
  return (
    <section
      id="gallery"
      className="min-h-screen py-20 bg-black flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 emoji-title bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            📸 Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src="/me_myself.png"
              alt="My Degree"
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
            {/* Add more images here if needed */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
