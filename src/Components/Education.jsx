import React from 'react';
import H2Styled from '../styles/H2Style';
import H3Styled from '../styles/H3Style';
import PStyled from '../styles/PStyled';

const Education = props => (
    <div className="Education">
        <H2Styled name="Education" />
            {props.data.map((edu, index) => (
                <div className="Education-item" key={`Education-${index}`}>
                    <H3Styled>{edu.degree} {edu.institution}
                    <span>{edu.startDate} - {edu.endDate}</span>
                    </H3Styled>
                    <PStyled> content={edu.description}</PStyled>
                </div>
            ))}
        
    </div>
);

export default Education;