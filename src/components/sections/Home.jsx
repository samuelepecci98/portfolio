import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Samuele Pecci
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm an Italian personal trainer and kinesiologist with a Master’s in Preventive and
            Adaptive Motor Activity. I specialize in functional training, female body recomposition,
            and performance optimization. I believe in building physical and mental strength
            through tailored, client-focused coaching.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#home"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Home
            </a>
            <a
              href="#about"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              About
            </a>
            <a
              href="#skills"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Contact
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
