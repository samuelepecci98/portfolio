import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "LogAnalyzer for Anomaly Detection in Autonomous Drones",
      description:
        "Developed a real-time LogAnalyzer using Developed a real-time LogAnalyzer leveraging PX4 telemetry, combining a rule-based layer for structured \
        anomaly detection with machine learning techniques for outlier identification. Enabled in-flight behavioral adaptation in autonomous drones during mission execution. telemetry and hybrid rule-based + machine learning techniques to detect anomalies in drone behavior.",
      tech: ["Python", "PX4", "Git", "Docker", "Pandas", "Scikit-learn", "Outliers Detection"],    },
    {
      title:
        "Distributed Multi-Robot Search and Rescue Operations Using Aggregative Optimization and BDI Agents in a Multi-Room House Environment",
      description:
        "Implemented a coordination strategy for multiple robots using BDI-based agents and aggregative optimization in a Gazebo-simulated house environment.",
      tech: ["Python", "ROS2", "BDI", "Gazebo"],
    },
    {
      title: "Electronic Arduino-Based Escape Room Development",
      description:
        "Designed and built an escape room system powered by Arduino, complete with sensors, actuators, and custom PCB logic for interactive puzzles.",
      tech: ["Arduino", "PCB Design", "C++", "Eagle"],
    },
    {
      title: "Distributed Multi-Robot Corridor Navigation Using ROS2",
      description:
        "Developed a decentralized control strategy for multi-robot navigation in a corridor, with collision avoidance and route optimization using ROS2.",
      tech: ["ROS2", "Python", "Distributed Systems", "Aggregative Optimization"],
    },
    {
      title: "3D Stereo Reconstruction & Depth Estimation in Robot Navigation",
      description:
        "Built a stereo vision system using SGBM to estimate depth for autonomous navigation in cluttered environments.",
      tech: ["OpenCV", "Python", "StereoSGBM", "Camera Calibration"],
    },
    {
      title: "Modeling and Simulation of a UR5 Robot Manipulator",
      description:
        "Created a dynamic model of the UR5 robotic arm for simulation, trajectory generation, and motor torque analysis using 20Sim and SimMechanics.",
      tech: ["20Sim", "URDF", "SimMechanics"],
    },
    {
      title: "Distributed Classification via Logistic Regression",
      description:
        "Implemented a federated learning framework using logistic regression with gradient tracking for distributed classification tasks.",
      tech: ["Python", "Logistic Regression", "Distributed Systems", "Gradient Tracking"],
    },
    {
      title:
        "Autonomous and Mobile Sanitize Robot: SLAM-Based Navigation and Control in a Multi-Room House Environment",
      description:
        "Designed a sanitizing robot equipped with SLAM for localization and autonomous path planning across rooms using ROS2.",
      tech: ["ROS2", "SLAM", "Python", "TurtleBot", "Gazebo", "Rviz"],
    },
    {
      title: "Optimal Control of a Quadrotor, Python",
      description:
        "Formulated and solved an optimal control problem for quadrotor trajectory tracking using CasADi and Newton-based optimization methods.",
      tech: ["Python", "Optimization", "MPC", "CasADi"],
    },
    {
      title: "Business Plan for FitFlow Innovative Startup",
      description:
        "Prepared a comprehensive business model and go-to-market strategy for FitFlow, a digital wellness startup focused on personalized coaching.",
      tech: ["Business Planning", "Market Analysis"],
    },
    {
      title: "Logistic Regression on Multi-Class Classification Problem, MATLAB",
      description:
        "Implemented and compared one-vs-all and softmax logistic classifiers to classify handwritten digits in MATLAB.",
      tech: ["MATLAB", "Logistic Regression", "Classification"],
    },
    {
      title: "System Identification of an Unknown AR Model, MATLAB",
      description:
        "Performed parameter estimation for a black-box AR model using least-squares identification techniques in MATLAB.",
      tech: ["MATLAB", "System Identification", "Least Squares"],
    },
    {
      title: "Remote Control Software for a Digital Microwave Oscilloscope, LabVIEW",
      description:
        "Created LabVIEW software to remotely control a Tektronix oscilloscope via VISA, enabling automated acquisition and measurements.",
      tech: ["LabVIEW", "VISA", "Tektronix", "Oscilloscope"],
    },
    {
      title: "Arduino RC Car Software and Hardware Development, Arduino",
      description:
        "Developed firmware and hardware setup for an Arduino-powered RC car with wireless communication and obstacle detection.",
      tech: ["Arduino", "C++", "Embedded Systems", "Wireless"],
    },
    {
      title: "Arcade Quest: Unity and Blender Game Development Project, Unity",
      description:
        "Built a 3D arcade-style video game using Unity, with fully customized game assets and animations created in Blender.",
      tech: ["Unity", "C#", "Blender", "Game Design"],
    },
  ];
  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-black text-white"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 break-words">
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
