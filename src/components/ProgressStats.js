import React from 'react';

const ProgressStats = ({ userProgress, calculateSkillProgress, onShowRoadmap, streak = 0 }) => {
  const skillsStarted = Object.keys(userProgress).length;
  
  const skillsCompleted = Object.keys(userProgress).filter(skillKey => {
    const progress = calculateSkillProgress(skillKey);
    return progress === 100;
  }).length;

  let totalProgress = 0;
  let totalPossible = 0;

  Object.keys(userProgress).forEach(skillKey => {
    const progress = calculateSkillProgress(skillKey);
    totalProgress += progress;
    totalPossible += 100;
  });

  const overallProgress = totalPossible > 0 ? Math.round(totalProgress / (totalPossible / 100)) : 0;

  return (
    <div className="progress-overview">
      <div className="progress-stats">
        <div className="stat-card">
          <div className="stat-number">{skillsStarted}</div>
          <div className="stat-label">Skills Started</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{skillsCompleted}</div>
          <div className="stat-label">Skills Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{overallProgress}%</div>
          <div className="stat-label">Overall Progress</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{streak}</div>
          <div className="stat-label">Day Streak</div>
        </div>
      </div>

      <div className="progress-bar-container">
        <div className="progress-label">
          <span>Overall Learning Progress</span>
          <span>{overallProgress}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${overallProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressStats;
