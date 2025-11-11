import React, { useState } from 'react';
import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/skillsData';

const Skills = ({ onShowSection, onShowRoadmap, userProgress, calculateSkillProgress }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming' },
    { id: 'design', label: 'Design' },
    { id: 'business', label: 'Business' },
    { id: 'data', label: 'Data Science' },
    { id: 'cloud', label: 'Cloud & DevOps' }
  ];

  const filteredSkills = Object.entries(skillsData).filter(([key, skill]) => 
    activeFilter === 'all' || skill.category === activeFilter
  );

  return (
    <section id="skills" className="section active">
      <div className="container">
        <button className="btn back-btn" onClick={() => onShowSection('home')}>
          ← Back to Home
        </button>

        <div className="skills-header">
          <h2>Choose Your Learning Path</h2>
          <p>
            Select skills that match your interests and career goals. Each skill 
            comes with a complete roadmap and resources.
          </p>
        </div>

        <div className="skills-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map(([key, skill]) => (
            <SkillCard
              key={key}
              skillKey={key}
              skill={skill}
              progress={calculateSkillProgress(key)}
              onClick={() => onShowRoadmap(key)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
