import React from 'react';
import ResourceList from './ResourceList';

const RoadmapStep = ({ 
  step, 
  stepIndex, 
  skillKey, 
  userProgress, 
  onUpdateProgress, 
  currentUser,
  onShowSuccess 
}) => {
  const isChecklistItemCompleted = (itemIndex) => {
    return userProgress[skillKey]?.steps?.[stepIndex]?.checklist?.[itemIndex] || false;
  };

  const handleChecklistToggle = (itemIndex) => {
    if (!currentUser) {
      onShowSuccess('Please log in to track progress!');
      return;
    }

    const currentState = isChecklistItemCompleted(itemIndex);
    onUpdateProgress(skillKey, stepIndex, itemIndex, !currentState);
    onShowSuccess(!currentState ? 'Great progress! ✅' : 'Item unchecked');
  };

  const stepProgress = () => {
    const stepData = userProgress[skillKey]?.steps?.[stepIndex]?.checklist || {};
    const totalItems = step.checklist.length;
    const completedItems = Object.values(stepData).filter(Boolean).length;
    return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  };

  const progress = stepProgress();
  const isStepCompleted = progress === 100;

  return (
    <div className={`roadmap-step ${isStepCompleted ? 'completed' : ''}`}>
      <div className="step-header">
        <div>
          <h3 className="step-title">{step.title}</h3>
          <p className="step-duration">⏰ {step.duration}</p>
        </div>
        <div className="step-progress">{progress}% Complete</div>
      </div>
      
      <p className="step-description">{step.description}</p>
      
      <div className="step-checklist">
        <h4 className="checklist-title">Learning Checklist</h4>
        {step.checklist.map((item, itemIndex) => {
          const completed = isChecklistItemCompleted(itemIndex);
          return (
            <div
              key={itemIndex}
              className={`checklist-item ${completed ? 'completed' : ''}`}
              onClick={() => handleChecklistToggle(itemIndex)}
            >
              <div className={`checkbox ${completed ? 'checked' : ''}`}></div>
              <span className="checklist-text">{item}</span>
            </div>
          );
        })}
      </div>
      
      <ResourceList resources={step.resources} />
    </div>
  );
};

export default RoadmapStep;