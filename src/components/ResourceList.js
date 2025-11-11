import React from 'react';

const ResourceList = ({ resources }) => {
  return (
    <div className="resources">
      {resources.map((resource, index) => (
        <a
          key={index}
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="resource-link"
        >
          {resource.type} {resource.title}
        </a>
      ))}
    </div>
  );
};

export default ResourceList;
