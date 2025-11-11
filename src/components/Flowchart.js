import React from 'react';

const Flowchart = ({ flowchartData, skillKey, userProgress, calculateStepProgress }) => {
  return (
    <div className="flowchart active">
      <div className="flowchart-container" id="flowchartContainer">
        {flowchartData.map((level, levelIndex) => (
          <div key={levelIndex} className="flow-level">
            {level.map((item, itemIndex) => {
              const progress = calculateStepProgress(skillKey, levelIndex, itemIndex);
              const isCompleted = progress === 100;
              
              return (
                <div
                  key={itemIndex}
                  className={`flow-node ${isCompleted ? 'completed' : ''}`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flowchart;
