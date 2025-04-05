import React from "react";
import RescueBDIPDF from "../../assets/reports/RescueBDI.pdf"; // se lo metti lì

export const RescueBDI = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-white">
      <h1 className="text-3xl font-bold mb-4">LogAnalyzer for Anomaly Detection in Drones</h1>
      <p className="mb-6">
        This project implements a real-time LogAnalyzer system that integrates both rule-based anomaly detection and machine learning-based outlier analysis...
      </p>

      <a
        href="https://github.com/AndreaPerna99/RescueBDI" // se hai codice online
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        View Code on GitHub →
      </a>

      <br />

      <a
        href="/reports/RescueBDI.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 underline"
      >
        Download Report (PDF)
      </a>

    </div>
  );
};

export default RescueBDI;
