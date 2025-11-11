import React, { useState } from 'react';
import { skillsData } from '../data/skillsData';
import Flowchart from '../components/Flowchart';
import RoadmapStep from '../components/RoadmapStep';
import ResourceList from '../components/ResourceList';

const Roadmap = ({ 
  skillKey, 
  onShowSection, 
  userProgress, 
  onUpdateProgress, 
  currentUser,
  onShowSuccess,
  calculateSkillProgress 
}) => {
  const [activeTab, setActiveTab] = useState('flowchart');
  
  const skill = skillsData[skillKey];
  if (!skill) return null;

  const calculateStepProgress = (skillKey, stepIndex) => {
    const stepData = userProgress[skillKey]?.steps?.[stepIndex]?.checklist || {};
    const totalItems = skill.roadmap.steps[stepIndex].checklist.length;
    const completedItems = Object.values(stepData).filter(Boolean).length;
    return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  };

  const getAllResources = () => {
    const resourceTypes = {};
    skill.roadmap.steps.forEach(step => {
      step.resources.forEach(resource => {
        const type = resource.type.split(' ')[1] || 'Other';
        if (!resourceTypes[type]) {
          resourceTypes[type] = [];
        }
        resourceTypes[type].push(resource);
      });
    });
    return resourceTypes;
  };

  const resourceTypes = getAllResources();

  return (
    <section id="roadmap" className="section active">
      <div className="container">
        <button className="btn back-btn" onClick={() => onShowSection('skills')}>
          ← Back to Skills
        </button>

        <div className="roadmap-header">
          <h2>{skill.title} Roadmap</h2>
          <p>Follow this structured path to master {skill.title}</p>
        </div>

        <div className="roadmap-tabs">
          <button 
            className={`tab-btn ${activeTab === 'flowchart' ? 'active' : ''}`}
            onClick={() => setActiveTab('flowchart')}
          >
            🗺️ Flowchart
          </button>
          <button 
            className={`tab-btn ${activeTab === 'steps' ? 'active' : ''}`}
            onClick={() => setActiveTab('steps')}
          >
            📋 Step-by-Step
          </button>
          <button 
            className={`tab-btn ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            📚 All Resources
          </button>
        </div>

        <div className="roadmap-content">
          {activeTab === 'flowchart' && (
            <Flowchart
              flowchartData={skill.roadmap.flowchart}
              skillKey={skillKey}
              userProgress={userProgress}
              calculateStepProgress={calculateStepProgress}
            />
          )}

          {activeTab === 'steps' && (
            <div className="roadmap-steps active">
              {skill.roadmap.steps.map((step, stepIndex) => (
                <RoadmapStep
                  key={stepIndex}
                  step={step}
                  stepIndex={stepIndex}
                  skillKey={skillKey}
                  userProgress={userProgress}
                  onUpdateProgress={onUpdateProgress}
                  currentUser={currentUser}
                  onShowSuccess={onShowSuccess}
                />
              ))}
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="resources-tab">
              {Object.entries(resourceTypes).map(([type, resources]) => (
                <div key={type} className="resource-category">
                  <h3>{type} Resources</h3>
                  <ResourceList resources={resources} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;