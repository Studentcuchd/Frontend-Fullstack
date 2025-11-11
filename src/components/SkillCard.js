import React from 'react';

const SkillCard = ({ skillKey, skill, progress, onClick }) => {
  const progressColor = progress > 75 ? 'var(--success)' : 
                       progress > 50 ? 'var(--warning)' : 'var(--primary)';

  return (
    <div className="skill-card" onClick={onClick}>
      <div className="skill-header">
        <div className="skill-icon">{skill.icon}</div>
        <div className="skill-info">
          <h3>{skill.title}</h3>
          <div className="skill-level">
            <span className={`level-badge level-${skill.level}`}>
              {skill.level}
            </span>
          </div>
        </div>
      </div>
      <p className="skill-description">{skill.description}</p>
      <div className="skill-stats">
        <span className="skill-duration">⏰ {skill.duration}</span>
        <span className="skill-popularity">{skill.popularity}</span>
      </div>
      {progress > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            marginBottom: '0.5rem', 
            fontSize: '0.8rem' 
          }}>
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ 
                width: `${progress}%`, 
                background: progressColor 
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
