import { RevealOnScroll } from "../RevealOnScroll";
import samuelePic from "../../assets/me_myself.jpg";

export const Gallery = () => {
  return (
    <section
      id="gallery"
      className="min-h-screen py-20 bg-black flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 emoji-title bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            📸 Gallery
          </h2>

          <div className="flex flex-col items-center justify-center">
            <img
              src={samuelePic}
              alt="Samuele Pecci"
              className="w-64 h-64 rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
            />
            <p className="mt-4 text-gray-400 text-sm">
              📷 My Degree – 2024
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
