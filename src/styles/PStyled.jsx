import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
font-weight:350;
margin: 0.5em 0 1.2em 0;
color: #2012121;
font-size: 1.2em;
`;

const PStyled = ({children }) => <StyledP>{children}</StyledP>

export default PStyled;