import React from 'react';

const Home = ({ onShowSection }) => {
  const features = [
    {
      icon: "🗺️",
      title: "Interactive Roadmaps",
      description: "Visual learning paths with step-by-step guidance"
    },
    {
      icon: "✅",
      title: "Progress Tracking",
      description: "Monitor your learning journey and achievements"
    },
    {
      icon: "📚",
      title: "Rich Resources",
      description: "Curated tutorials, courses, and practice materials"
    },
    {
      icon: "🎯",
      title: "Career Focus",
      description: "Industry-aligned skills and real-world projects"
    }
  ];

  return (
    <section id="home" className="section active">
      <div className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Master Your Future</h1>
            <p>
              Your complete career guidance platform with interactive roadmaps, 
              step-by-step learning paths, and comprehensive resources. Everything 
              you need to build your dream career in one place.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => onShowSection('skills')}>
                🚀 Explore Skills
              </button>
              <button className="btn btn-outline" onClick={() => onShowSection('dashboard')}>
                📊 View Dashboard
              </button>
            </div>
          </div>

          <div className="hero-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;