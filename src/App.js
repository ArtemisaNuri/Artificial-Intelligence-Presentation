import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center" data-aos="fade-in">
        <h1 className="text-4xl font-bold mb-4">AI in Cybersecurity: The Future of Threat Detection</h1>
        <p className="text-lg">Harnessing the power of artificial intelligence to safeguard the digital world.</p>
      </section>

      {/* Introduction Section */}
      <section className="p-8 bg-white text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6">Why AI in Cybersecurity?</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          AI is revolutionizing the field of cybersecurity by identifying threats faster, automating responses, and adapting to new attack patterns in real-time.
        </p>
      </section>

      {/* Key Features/Benefits Section with Delayed Animations */}
      <section className="bg-gray-100 p-8" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-6">How AI Enhances Cybersecurity</h2>
        <div className="flex flex-col md:flex-row justify-between items-stretch space-y-6 md:space-y-0 md:space-x-6 max-w-4xl mx-auto">
          {/* Each card with a delay */}
          <FeatureCard
            title="AI-Driven Threat Detection"
            description="Identify and respond to potential threats faster than traditional methods."
            delay="0"
          />
          <FeatureCard
            title="Automation of Security Processes"
            description="Automate repetitive tasks like log analysis, reducing human error."
            delay="200"
          />
          <FeatureCard
            title="Predictive Analytics"
            description="Predict and prevent potential vulnerabilities based on historical data."
            delay="400"
          />
          <FeatureCard
            title="Reduced Response Time"
            description="React to cyber attacks in real-time, minimizing the damage."
            delay="600"
          />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="p-8 bg-white text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold mb-6">Real-world Applications of AI in Cybersecurity</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <UseCaseItem title="Anomaly Detection" description="Detects irregular network behavior using machine learning models." />
          <UseCaseItem title="Phishing Detection" description="AI helps analyze emails and identify phishing attacks." />
          <UseCaseItem title="Fraud Prevention" description="Models detect and prevent fraudulent activities in banking and e-commerce." />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white p-8 text-center" data-aos="fade-right">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">Want to know more about how AI can secure your systems? Reach out to us!</p>
        <a href="mailto:info@cyberai.com" className="bg-blue-600 px-6 py-2 rounded-full text-white">Contact Us</a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center p-4 text-gray-400">
        &copy; 2024 AI in Cybersecurity. All rights reserved.
      </footer>
    </div>
  );
}

// Component for feature cards with a delay
const FeatureCard = ({ title, description, delay }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg flex-1" data-aos="fade-up" data-aos-delay={delay}>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Component for use cases
const UseCaseItem = ({ title, description }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg" data-aos="flip-right">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default App;
