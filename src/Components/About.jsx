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
heigth: 210px;
border: 2px sold #020249;
margin: 0 auto;
display: block;
box-shadow: 00 10px rgba(0,0,0,0.6);
`;

const AboutName = styled.div`
text-align:center;
`;

const AboutH2 = styled.h2`
font-family: 'Roboto', sans-serif;
font-weight:500;
letter-spacing: 1.5 px;
margin: 5em 0 0 0;
color: #055082;
`;

const AboutProfession = styled.p`
margin: .2em 0 1 em 0;
letter.spacing: 1.6px;
font-weight: 450;
color: #055082;
`;

const AboutBio = styled.p`
color: #131211;
font-size: 1.1em;
font-weigth: 300;
`;

const AboutLocation = styled.p`
color: #131211;
font-size: 1.1em;
font-weigth: 400;
`;

const About = ({avatar, name, profession, bio, address, social}) => (
    <AboutStyle>
        <AboutAvatar className="About-avatar">
            <figure>
                <AboutAvatarImg src={avatar} alt={name} />

            </figure>

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