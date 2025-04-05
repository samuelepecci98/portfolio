import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "LogAnalyzer for Anomaly Detection in Autonomous Drones, PX4-Python",
      description:
        "Real-time anomaly detection pipeline for autonomous drones using PX4 logs and hybrid rule-based + ML techniques.",
      tech: ["Python", "PX4", "Docker", "Pandas"],
    },
    {
      title:
        "Distributed Multi-Robot Search and Rescue Operations Using Aggregative Optimization and BDI Agents in a Multi-Room House Environment, Python",
      description:
        "Coordination of multiple robots in a simulated house using agent-based behavior and aggregative control logic.",
      tech: ["Python", "ROS2", "BDI", "Gazebo"],
    },
    {
      title:
        "Electronic Arduino-Based Escape Room Development, Arduino-PCB",
      description:
        "Interactive game system using Arduino, sensors, actuators, and custom PCBs for puzzle automation in an escape room.",
      tech: ["Arduino", "PCB Design", "C++", "Eagle"],
    },
    {
      title: "Distributed Multi-Robot Corridor Navigation, ROS2-Python",
      description:
        "Multi-agent robot navigation system with collision avoidance and decentralized path coordination using ROS2.",
      tech: ["ROS2", "Python", "TurtleBot3"],
    },
    {
      title:
        "3D Stereo Reconstruction & Depth Estimation in Robot Navigation, OpenCV",
      description:
        "Stereo vision-based depth estimation pipeline for autonomous mobile robot navigation in cluttered environments.",
      tech: ["OpenCV", "Python", "StereoSGBM", "Camera Calibration"],
    },
    {
      title: "Modeling and Simulation of a UR5 Robot Manipulator, 20Sim",
      description:
        "Complete dynamic modeling and simulation of UR5 robotic arm for trajectory tracking and motor analysis.",
      tech: ["20Sim", "URDF", "SimMechanics"],
    },
    {
      title: "Distributed Classification via Logistic Regression, Python",
      description:
        "Federated logistic regression implemented across distributed nodes using Python and Numpy.",
      tech: ["Python", "Logistic Regression", "Distributed Systems"],
    },
    {
      title:
        "Autonomous and Mobile Sanitize Robot: SLAM-Based Navigation and Control in a Multi-Room House Environment, ROS2-Python",
      description:
        "Designed a sanitizing robot that navigates autonomously with SLAM and performs path planning using ROS2.",
      tech: ["ROS2", "SLAM", "Python", "TurtleBot"],
    },
    {
      title: "Optimal Control of a Quadrotor, Python",
      description:
        "Developed an optimal controller using Python and CasADi for trajectory optimization of a simulated quadrotor.",
      tech: ["Python", "CasADi", "Quadrotor", "Optimization"],
    },
    {
      title: "Business Plan for FitFlow Innovative Startup",
      description:
        "Designed a strategic business plan for FitFlow, a wellness-oriented tech startup with digital coaching platform.",
      tech: ["Canva", "PowerPoint", "Market Analysis"],
    },
    {
      title:
        "Logistic Regression on Multi-Class Classification Problem, MATLAB",
      description:
        "Implemented one-vs-all and softmax classifiers in MATLAB to solve a handwritten digit classification task.",
      tech: ["MATLAB", "Logistic Regression", "Classification"],
    },
    {
      title: "System Identification of an Unknown AR Model, MATLAB",
      description:
        "Applied least-squares estimation to identify parameters of an unknown autoregressive model from data.",
      tech: ["MATLAB", "System ID", "Least Squares"],
    },
    {
      title:
        "Remote Control Software for a Digital Microwave Oscilloscope, LabVIEW",
      description:
        "Created LabVIEW software to remotely control a Tektronix oscilloscope, enabling automated measurements.",
      tech: ["LabVIEW", "GPIB", "Tektronix", "Electronics"],
    },
    {
      title: "Arduino RC Car Software and Hardware Development, Arduino",
      description:
        "Designed and programmed an Arduino-powered RC car with wireless control and obstacle avoidance.",
      tech: ["Arduino", "C++", "RC", "Embedded"],
    },
    {
      title: "Arcade Quest: Unity and Blender Game Development Project, Unity",
      description:
        "Developed a 3D arcade-style game from scratch using Unity engine, with custom assets created in Blender.",
      tech: ["Unity", "C#", "Blender", "GameDev"],
    },
  ];

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
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-2"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
