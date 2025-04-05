import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <ProjectCard
              title="LogAnalyzer"
              description="Real-time anomaly detection system for PX4 autonomous drones with hybrid ML & rule-based logic."
              tech={["React", "Node.js", "AWS", "Docker"]}
              link="#"
            />

            {/* Project 2 */}
            <ProjectCard
              title="Distributed Search and Rescue (BDI)"
              description="Multi-agent system for BDI-based robot coordination in disaster response scenarios."
              tech={["Python", "ROS2", "MAS", "Webots"]}
              link="#"
            />

            {/* Project 3 */}
            <ProjectCard
              title="Arduino Escape Room"
              description="Puzzle-driven game built with custom PCBs, sensors and actuators for immersive experiences."
              tech={["Arduino", "PCB Design", "C++", "Fusion360"]}
              link="#"
            />

            {/* Project 4 */}
            <ProjectCard
              title="Multi-Robot Corridor Navigation"
              description="Obstacle-aware navigation and decentralized corridor management with VxWorks simulation."
              tech={["ROS", "VxWorks", "Gazebo", "Python"]}
              link="#"
            />

            {/* Project 5 */}
            <ProjectCard
              title="Fruit Inspection (CV Project)"
              description="Computer vision pipeline to detect defects on fruit using RGB+NIR imagery and Harris corner detection."
              tech={["OpenCV", "Python", "NumPy", "Matplotlib"]}
              link="#"
            />

            {/* Project 6 */}
            <ProjectCard
              title="Autonomous Drone Demo"
              description="Mini drone (Crazyflie) with vision-based navigation and deep learning object tracking."
              tech={["Crazyflie", "TensorFlow", "OpenCV", "ROS2"]}
              link="#"
            />

            {/* Project 7 */}
            <ProjectCard
              title="GameBoy Console UI (C++)"
              description="Custom UI menu manager for a GameBoy emulator project built on STM32 & SPI display."
              tech={["STM32", "C++", "SPI", "Embedded"]}
              link="#"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

// Reusable card component
const ProjectCard = ({ title, description, tech, link }) => (
  <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((item, key) => (
        <span
          key={key}
          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
        >
          {item}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center">
      <a
        href={link}
        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
      >
        View Project →
      </a>
    </div>
  </div>
);
