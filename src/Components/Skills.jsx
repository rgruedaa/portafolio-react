import React from 'react';

const Skills = props => (
    <div className="Skills">
        <div className="Skills-container">
            {
                props.data.map((skill, index) => (
                    <div className="Skills-item" key={`skills-${index}`}>
                        <h5>HTML</h5>
                        <div className="Skills-line">
                            <span>{skill.percentage}</span>
                        </div>
                    </div>
                        ))
                    }
            
         </div>

    </div>
)
        
export default Skills;