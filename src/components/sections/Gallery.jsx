import { RevealOnScroll } from "../RevealOnScroll";
import samuelePortrait from "../../assets/me_myself.jpg";
import handstandOutdoor from "../../assets/handstand_outdoor.png";
import plancheOnParallettes from "../../assets/planche_on_parallettes.png";
import deadliftTraining from "../../assets/deadlift_training.png";
import cableRowsGym from "../../assets/cable_rows_gym.png";


export const Gallery = () => {
  return (
    <section
      id="gallery"
      className="min-h-screen py-20 bg-black flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 emoji-title bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            📸 Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Portrait */}
            <div className="flex flex-col items-center">
              <img
                src={samuelePortrait}
                alt="Studio portrait"
                className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
              />
              <p className="mt-3 text-gray-400 text-sm">🎓 Master's Degree – 2024</p>
            </div>

            {/* Outdoor handstand */}
            <div className="flex flex-col items-center">
              <img
                src={handstandOutdoor}
                alt="Outdoor handstand"
                className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
              />
              <p className="mt-3 text-gray-400 text-sm">🏖️ Handstand at Lake Garda</p>
            </div>

            {/* Planche */}
            <div className="flex flex-col items-center">
              <img
                src={plancheOnParallettes}
                alt="Planche on parallettes"
                className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
              />
              <p className="mt-3 text-gray-400 text-sm">🤸 Planche on parallettes – indoor</p>
            </div>

            {/* Deadlift */}
            <div className="flex flex-col items-center">
              <img
                src={deadliftTraining}
                alt="Deadlift training"
                className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
              />
              <p className="mt-3 text-gray-400 text-sm">🏋️ Deadlift session – strength & form</p>
            </div>

            {/* Cable rows */}
            <div className="flex flex-col items-center">
              <img
                src={cableRowsGym}
                alt="Cable row machine"
                className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
              />
              <p className="mt-3 text-gray-400 text-sm">💪 Lat pulldown / cable rows</p>
            </div>
            {/* TRX back row outdoor */}
                <div className="flex flex-col items-center">
                <img
                    src={trxBackRowOutdoor}
                    alt="TRX back row outdoor"
                    className="rounded-xl shadow-lg object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                />
                <p className="mt-3 text-gray-400 text-sm">🏞️ TRX back rows – natural training</p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
