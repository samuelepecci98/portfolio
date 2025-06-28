import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="text-center px-6">
          <h2 className="text-3xl font-bold mb-8 emoji-title text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            📬 Contact
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            📧 Email:{" "}
            <a
              href="mailto:samuelepecci@gmail.com"
              className="text-blue-400 hover:underline"
            >
              samuelepecci@gmail.com
            </a>
          </p>
          <p className="text-gray-300 text-lg mb-4">
            📞 Mobile Phone:{" "}
            <a
              href="tel:+39 3758183570"
              className="text-blue-400 hover:underline"
            >
              +39 375 818 3570
            </a>
          </p>
          <p className="text-gray-300 text-lg mb-4">
            📸 Instagram:{" "}
            <a
              href="https://www.instagram.com/samuele_pecci/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              @samuele_pecci
            </a>
          </p>
          <p className="text-gray-300 text-lg">
            🌍 Location: Budrio (BO), Italy
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
