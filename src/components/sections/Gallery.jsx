import { RevealOnScroll } from "../RevealOnScroll";
import samuelePortrait from "../../assets/me_myself.jpg";
import handstandOutdoor from "../../assets/handstand_outdoor.png";

export const Gallery = () => {
  return (
    <section
      id="gallery"
      className="min-h-screen py-20 bg-black flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 emoji-title bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            📸 Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Portrait Image */}
            <div className="flex flex-col items-center">
              <img
                src={samuelePortrait}
                alt="Samuele Pecci – Studio Portrait"
                className="w-64 h-64 rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
              />
              <p className="mt-4 text-gray-400 text-sm">
                🎓 Master Degree, 2024
              </p>
            </div>

            {/* Handstand Image */}
            <div className="flex flex-col items-center">
              <img
                src={handstandOutdoor}
                alt="Samuele Pecci – Outdoor Handstand"
                className="w-64 h-96 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
              <p className="mt-4 text-gray-400 text-sm">
                🏖️ Outdoor strength & balance
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
