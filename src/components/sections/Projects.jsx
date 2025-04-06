import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "LogAnalyzer for Anomaly Detection in Autonomous Drones",
      description:
        "Developed a real-time LogAnalyzer leveraging PX4 telemetry, combining a rule-based layer for structured anomaly detection with machine learning techniques for outlier identification. Enabled in-flight behavioral adaptation in autonomous drones during mission execution.",
      tech: ["Python", "PX4", "Git", "Docker", "Pandas", "Scikit-learn", "Outliers Detection"],
    },
    {
      title: "Distributed Multi-Robot Search and Rescue Operations Using Aggregative Optimization and BDI Agents in a Multi-Room House Environment",
      description:
        "Designed a distributed multi-robot SAR system using BDI agents and aggregative optimization. Robots explored a multi-room house, located and escorted survivors, and dispatched an autonomous ambulance, maintaining formation and obstacle avoidance in mission-critical scenarios.",
      tech: ["Python", "ROS2", "BDI", "Gazebo"],
    },
    {
      title: "Electronic Arduino-Based Escape Room Development",
      description:
        "Built a fully interactive Arduino-based escape room with electronic puzzles, custom PCBs, and embedded software. Designed the full experience from storyline to hardware and gameplay logic, using sensors and actuators for immersive automation.",
      tech: ["Arduino", "PCB Design", "C++", "Eagle"],
    },
    {
      title: "Distributed Multi-Robot Corridor Navigation Using ROS2",
      description:
        "Developed a ROS2-based distributed control framework for coordinated robot formation in corridor environments using Aggregative Tracking. Ensured decentralized target pursuit, collision avoidance, and real-time state monitoring through RViz visualization.",
      tech: ["ROS2", "Python", "Distributed Systems", "Aggregative Optimization"],
    },
    {
      title: "3D Stereo Reconstruction & Depth Estimation in Robot Navigation",
      description:
        "Developed a stereo vision system for autonomous navigation using SGBM and chessboard-based sparse matching. Enabled real-time obstacle distance estimation, safety alerts, and accurate dimensioning for reliable collision avoidance.",
      tech: ["OpenCV", "Python", "StereoSGBM", "Camera Calibration"],
    },
    {
      title: "Modeling and Simulation of a UR5 Robot Manipulator",
      description:
        "Modeled the UR5 robotic arm in 20Sim using bond graphs and energy-based dynamics. Simulated joint behavior and torque response with PID control via twists, wrenches, and Euler-based equations.",
      tech: ["20Sim", "URDF", "SimMechanics"],
    },
    {
      title: "Distributed Classification via Logistic Regression",
      description:
        "Designed a fully distributed logistic regression system using Gradient Tracking, where agents collaboratively learned a global decision function without data sharing by exchanging local gradients and reaching consensus over a communication network.",
      tech: ["Python", "Logistic Regression", "Distributed Systems", "Gradient Tracking"],
    },
    {
      title: "Autonomous and Mobile Sanitize Robot: SLAM-Based Navigation and Control in a Multi-Room House Environment",
      description:
        "Developed a fully autonomous sanitizer robot using ROS2 for multi-room environments. The system performs SLAM-based mapping and localization, plans paths to room centers, and executes complete coverage using Boustrophedon decomposition. Simulated in Gazebo with real-time visualization in Rviz.",
      tech: ["ROS2", "SLAM", "Python", "TurtleBot", "Gazebo", "Rviz"],
    },
    {
      title: "Optimal Control of a Quadrotor, Python",
      description:
        "Designed an optimal controller for a quadrotor with suspended load by computing state-input trajectories via Newton's method. Implemented LQR and MPC strategies to track reference profiles (step and poly5), ensuring dynamic feasibility and cost efficiency.",
      tech: ["Python", "Optimization", "MPC"],
    },
    {
      title: "Business Plan for FitFlow Innovative Startup",
      description:
        "Prepared a comprehensive business model and go-to-market strategy for FitFlow, an innovative digital wellness startup offering personalized coaching through a tech-driven platform. Included financial projections, competitive analysis, and growth roadmap.",
      tech: ["Business Planning", "Market Analysis"],
    },
    {
      title: "Logistic Regression on Multi-Class Classification Problem, MATLAB",
      description:
        "Implemented and evaluated one-vs-all and softmax logistic classifiers in MATLAB to solve a multi-class handwritten digit recognition task, analyzing classification accuracy and decision boundaries.",
      tech: ["MATLAB", "Logistic Regression", "Classification"],
    },
    {
      title: "System Identification of an Unknown AR Model, MATLAB",
      description:
        "Performed system identification for a black-box AutoRegressive (AR) model using least-squares estimation in MATLAB, reconstructing model dynamics from time-series data and validating performance through simulation.",
      tech: ["MATLAB", "System Identification", "Least Squares"],
    },
    {
      title: "Remote Control Software for a Digital Microwave Oscilloscope, LabVIEW",
      description:
        "Developed a LabVIEW-based remote control interface for a Tektronix digital oscilloscope using VISA protocol, enabling full-featured automated acquisition, waveform analysis, and measurement logging.",
      tech: ["LabVIEW", "VISA", "Tektronix", "Oscilloscope"],
    },
    {
      title: "Arduino RC Car Software and Hardware Development, Arduino",
      description:
        "Designed and implemented the complete firmware and hardware architecture for an Arduino-powered RC car, featuring wireless control, obstacle detection with sensors, and autonomous navigation logic.",
      tech: ["Arduino", "C++", "Embedded Systems", "Wireless"],
    },
    {
      title: "Arcade Quest: Unity and Blender Game Development Project, Unity",
      description:
        "Built a 3D arcade-style video game using Unity, featuring immersive gameplay mechanics, fully customized assets and animations modeled in Blender, and real-time physics interactions for an engaging user experience.",
      tech: ["Unity", "C#", "Blender", "Game Design"],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 break-words">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <RevealOnScroll key={idx}>
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
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
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
