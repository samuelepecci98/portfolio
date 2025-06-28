import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
  const TrainingSkills = [
    "Personal Training",
    "Functional Training",
    "Strength & Conditioning",
    "Female Body Recomposition",
    "Athletic Preparation",
    "Postural Education",
    "Resistance Training",
    "Motor Skill Development"
  ];

  const AssessmentSkills = [
    "Body Composition Analysis",
    "Progress Tracking",
    "Client Evaluation",
    "Anthropometric Measurements",
    "Nutritional Guidance (Basic)",
    "Custom Program Design"
  ];

  const SoftSkills = [
    "Client Communication",
    "Empathy & Motivation",
    "Team Collaboration",
    "Adaptability",
    "Goal-Oriented Planning",
    "Studio Management"
  ];

  const ToolsAndPlatforms = [
    "Digital Coaching Platforms",
    "Google Workspace",
    "Excel & Sheets",
    "InBody / Tanita (Bioimpedance)",
    "Online Scheduling Tools"
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            🛠️ Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Training Skills */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Training & Coaching</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {TrainingSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Assessment Skills */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Assessment & Monitoring</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {AssessmentSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {SoftSkills.map((skill, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {ToolsAndPlatforms.map((tool, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
