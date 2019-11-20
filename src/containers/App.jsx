import React from 'react';
import {createGlobalStyle} from 'styled-components';
import useGetData from '../hooks/useGetData';
import Main from '../Components/Main';
import Sidebar from '../Components/Sidebar';
import Info from '../Components/Info';
import About from '../Components/About';
import Education from '../Components/Education';
import Experience from '../Components/Experience';
import Certificates from '../Components/Certificates';
import Skills from '../Components/Skills';
const api='https://us-central1-cv-api-nueva.cloudfunctions.net/api'

const GlobalStyle = createGlobalStyle`
body{
    font-family:'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
}
`;

const App = ()=>{
    const data = useGetData(api);
console.log(data);
return data.length ===0 ? <h1>...Cargando</h1> : 
    (
        <Main>
            <GlobalStyle />
            <Sidebar>
                <About
                avatar ={data.avatar}
                name = {data.name}
                profession = {data.profession}
                bio={data.bio}
                address= {data.address}
                social={data.social}
                 />
                 
            </Sidebar>
            <Info>
                <Education data={data.education}/>
                <Experience data={data.experience} />
                <Certificates data={data.certificate} />
                <Skills data={data.skills}/>

            </Info>
        </Main>
    )
}

export default App;