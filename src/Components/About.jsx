import React from 'react';
import Social from './Social';
import styled from 'styled-components';

const AboutStyle = styled.div`
text-align: center;
`;

const AboutAvatar = styled.div`
padding: 2em 0 0 0;
`;

const AboutAvatarImg= styled.img`
border-radius: 100%;
width: 210px;
height: 210px;
border: 2px sold #E91E63;
margin: 0 auto;
display: block;
box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;

const AboutName = styled.div`
text-align:center;
`;

const AboutH2 = styled.h2`
font-family: 'Roboto', sans-serif;
font-weight:400;
letter-spacing: 1.5px;
margin: 5em 0 0 0;
color: #C2185B;
`;

const AboutProfession = styled.p`
margin: .2em 0 1em 0;
letter-spacing: 1.6px;
font-weight: 300;
color: #C2185B;
`;

const AboutBio = styled.p`
color: #757575;
font-size: 1.1em;
font-weight: 300;
`;

const AboutLocation = styled.p`
color: #757575;
font-size: 1.1em;
font-weight: 400;
`;

const About = ({avatar, name, profession, bio, address, social}) => (
    <AboutStyle>
        <AboutAvatar className="About-avatar">
                <AboutAvatarImg src={avatar} alt={name} />
        </AboutAvatar>
        <AboutName className="About-name">
            <AboutH2>{name}</AboutH2>
        </AboutName>
        <AboutProfession className="About-profession">
            <p>{profession}</p>
        </AboutProfession>
        <AboutBio className="About-bio">
            <p>{bio}</p>
        </AboutBio>
        <AboutLocation className="About-location">
            <p>{address}</p>
        </AboutLocation>
        <div className="About-social">
            <Social social={social} />
        </div>
    </AboutStyle>
); 

export default About;