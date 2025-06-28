import samuelePortrait from "../../assets/me_myself.jpg";
import handstandOutdoor from "../../assets/handstand_outdoor.png";
import plancheOnParallettes from "../../assets/planche_on_parallettes.png";
import deadliftTraining from "../../assets/deadlift_training.png";
import cableRowsGym from "../../assets/cable_rows_gym.png";
import trxBackRowOutdoor from "../../assets/trx_back_row_outdoor.png";
import { RevealOnScroll } from "../RevealOnScroll";

export const Gallery = () => {
  const items = [
    {
      img: samuelePortrait,
      alt: "Studio portrait",
      caption: "🎓 Master's Degree – 2024",
    },
    {
      img: handstandOutdoor,
      alt: "Outdoor handstand",
      caption: "🏖️ Handstand at Lake Garda",
    },
    {
      img: plancheOnParallettes,
      alt: "Planche on parallettes",
      caption: "🤸 Planche on parallettes – indoor",
    },
    {
      img: deadliftTraining,
      alt: "Deadlift training",
      caption: "🏋️ Deadlift session – strength & form",
    },
    {
      img: cableRowsGym,
      alt: "Cable row machine",
      caption: "💪 Lat pulldown / cable rows",
    },
    {
      img: trxBackRowOutdoor,
      alt: "TRX back row outdoor",
      caption: "🏞️ TRX back rows – natural training",
    },
  ];

  return (
    <section
      id="gallery"
      className="min-h-screen py-20 bg-black flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 emoji-title bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          📸 Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map(({ img, alt, caption }, index) => (
            <RevealOnScroll key={index}>
              <div className="flex flex-col items-center">
                <img
                  src={img}
                  alt={alt}
                  className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                />
                <p className="mt-3 text-gray-400 text-sm">{caption}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
