import React from 'react';
import useGetData from '../hooks/useGetData';
import Main from '../Components/Main';
import Sidebar from '../Components/Sidebar';
import Info from '../Components/Info';
import About from '../Components/About';
import Education from '../Components/Education';
import Experience from '../Components/Experience';
import Certificates from '../Components/Certificates';
import Skills from '../Components/Skills';

const data = useGetData();
console.log(data);

const App = ()=>{
    return(
        <Main>
            <Sidebar>
                <About />
            </Sidebar>
            <Info>
                <Education />
                <Experience />
                <Certificates />
                <Skills />

            </Info>
        </Main>
    )
}

export default App;