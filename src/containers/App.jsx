import React from 'react';
import Main from '../Components/Main';
import Sidebar from '../Components/Sidebar';
import Info from '../Components/Info';
import About from '../Components/About';
import Education from '../Components/Education';
import Experience from '../Components/Experience';
import Certificates from '../Components/Certificates';
import Skills from '../Components/Skills';

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