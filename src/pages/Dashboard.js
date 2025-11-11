import React from 'react';
import ProgressStats from '../components/ProgressStats';
import { skillsData } from '../data/skillsData';

const Dashboard = ({ 
  onShowSection, 
  userProgress, 
  currentUser, 
  calculateSkillProgress, 
  onShowRoadmap 
}) => {
  if (!currentUser) {
    return (
      <section id="dashboard" className="section active">
        <div className="container">
          <button className="btn back-btn" onClick={() => onShowSection('home')}>
            ← Back to Home
          </button>
          <div className="login-prompt">
            <h2>Please log in to view your dashboard</h2>
            <p>Track your learning progress and achievements</p>
          </div>
        </div>
      </section>
    );
  }

  const userSkills = Object.keys(userProgress);

  return (
    <section id="dashboard" className="section active">
      <div className="container">
        <button className="btn back-btn" onClick={() => onShowSection('home')}>
          ← Back to Home
        </button>

        <div className="skills-header">
          <h2>Your Learning Dashboard</h2>
          <p>Track your progress and see how far you've come</p>
        </div>

        <ProgressStats 
          userProgress={userProgress} 
          calculateSkillProgress={calculateSkillProgress}
          onShowRoadmap={onShowRoadmap}
          streak={currentUser?.currentStreak || 0}
        />

        <div className="user-skills-progress">
          {userSkills.length > 0 ? (
            <div>
              <h3>Your Skills Progress</h3>
              {userSkills.map(skillKey => {
                const skill = skillsData[skillKey];
                const progress = calculateSkillProgress(skillKey);
                
                if (!skill) return null;
                
                return (
                  <div 
                    key={skillKey} 
                    className="progress-overview clickable"
                    onClick={() => onShowRoadmap(skillKey)}
                  >
                    <div className="progress-bar-container">
                      <div className="progress-label">
                        <span>{skill.icon} {skill.title}</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="empty-state">
              <h3>Start Your Learning Journey</h3>
              <p>Choose a skill to begin tracking your progress</p>
              <button className="btn btn-primary" onClick={() => onShowSection('skills')}>
                Browse Skills
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
