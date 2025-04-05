import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Skills */}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>BSc in Electronic Engineering</strong> – University of Ferrara (2018–2022)
                </li>
                <li>
                  <strong>MSc in Automation Engineering</strong> – University of Bologna (2022–2025)
                </li>
                <li>
                  <strong>ITIS Electronics and Telecommunications</strong> – Bologna (IT) (2012–2017)
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Master's Thesis at Leonardo Labs (03/2025 – 09/2025) – Rome
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>
                      Developed a real-time LogAnalyzer for anomaly detection in autonomous drones,
                      utilizing a hybrid rule-based and ML approach.
                    </li>
                    <li>
                      Engineered a modular pipeline for PX4 telemetry analysis and autonomous
                      decision-making.
                    </li>
                    <li>Acquired expertise in PX4, ROS2, Docker, Git, and real-time data analysis.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Embedded Systems Engineer (08/2024 – 03/2025)</h4>
                  <ul className="list-disc list-inside">
                    <li>Developed an Arduino-based Escape Room with sensor-driven gameplay.</li>
                    <li>Designed custom PCBs for robust embedded game electronics.</li>
                    <li>Integrated sensors and actuators for interactive game elements.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Mathematics Lecturer (08/2023 – 09/2023)</h4>
                  <ul className="list-disc list-inside">
                    <li>Delivered a 60-hour math course for first-year high school students.</li>
                    <li>Encouraged student participation and collaboration.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Bachelor's Thesis at ETLab (01/2021 – 03/2022)</h4>
                  <ul className="list-disc list-inside">
                    <li>
                      Developed remote-control software in LabVIEW for a Tektronix microwave oscilloscope.
                    </li>
                    <li>
                      Implemented innovative data-saving and full-feature remote control.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="p-6 mt-8 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">📜 Certifications</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Machine Learning Specialization</strong> – DeepLearning.AI & Stanford (2024)
              </li>
              <li>
                <strong>AWS Cloud Practitioner Certified</strong> – Amazon Web Services (2023)
              </li>
              <li>
                <strong>ROS for Beginners</strong> – The Construct Academy (2022)
              </li>
              <li>
                <strong>Docker & Kubernetes: The Complete Guide</strong> – Udemy (2023)
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
