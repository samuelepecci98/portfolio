import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 emoji-title text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            💪 About Me
          </h2>

          {/* Education & Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Master’s Degree in Preventive and Adaptive Motor Activity Sciences and Techniques</strong>
                  <br />
                  <span className="text-sm text-gray-400">University of Ferrara, Italy</span>
                  <br />
                  <span className="text-sm text-gray-400">2021 – 2023</span>
                </li>
                <li>
                  <strong>Bachelor’s Degree in Sport Sciences</strong>
                  <br />
                  <span className="text-sm text-gray-400">University of Ferrara, Italy</span>
                  <br />
                  <span className="text-sm text-gray-400">2018 – 2021</span>
                </li>
                <li>
                  <strong>High School Diploma in Electronics, Design and Programming</strong>
                  <br />
                  <span className="text-sm text-gray-400">Istituto Tecnico Giordano Bruno, Budrio (BO)</span>
                  <br />
                  <span className="text-sm text-gray-400">Graduated: 2018</span>
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏋️ Work Experience</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Personal Trainer – FitActive Bologna</strong>
                  <br />
                  <span className="text-sm text-gray-400">2025 – Present</span>
                  <div className="mt-2 pl-4 border-l-2 border-blue-500">
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                      <li>Autonomous management of training programs and client interactions.</li>
                      <li>One-to-one coaching and progress tracking through digital platforms.</li>
                      <li>Sales and commercial activities under VAT regime.</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <strong>Studio Manager & PT – Fusco Fitness Bologna</strong>
                  <br />
                  <span className="text-sm text-gray-400">2024</span>
                  <div className="mt-2 pl-4 border-l-2 border-blue-500">
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                      <li>Independent management of a personal training studio.</li>
                      <li>Focus on female body recomposition and functional training.</li>
                      <li>Handled body assessments, client scheduling, and product/service sales.</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <strong>Athletic Trainer – SSD Corticella Football</strong>
                  <br />
                  <span className="text-sm text-gray-400">2022 – 2023</span>
                  <div className="mt-2 pl-4 border-l-2 border-blue-500">
                    <p className="text-sm text-gray-400">
                      Designed and led performance-enhancing training for youth football players.
                    </p>
                  </div>
                </li>

                <li>
                  <strong>Coach & Educator – SSD Mezzolara Football</strong>
                  <br />
                  <span className="text-sm text-gray-400">2021 – 2022</span>
                  <div className="mt-2 pl-4 border-l-2 border-blue-500">
                    <p className="text-sm text-gray-400">
                      Coached “first kicks” category, fostering motor development and discipline.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <img
            src="/me_myself.jpg"
            alt="Samuele"
            className="w-64 h-64 border-2 border-red-500 bg-white"
          />

          {/* Certifications */}
          <div className="p-6 mt-8 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">📜 Certifications & Info</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Languages:</strong> Italian (native), English (B1)
              </li>
              <li>
                <strong>Driving Licenses:</strong> AM, B
              </li>
              <li>
                <strong>Technical Skills:</strong> Training planning, functional recovery, progress tracking tools
              </li>
              <li>
                <strong>Personal Traits:</strong> Adaptive, disciplined, empathetic, goal-oriented
              </li>
              <li>
                <strong>Sports Practiced:</strong> Calisthenics, Martial Arts, Gym, Tennis
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
