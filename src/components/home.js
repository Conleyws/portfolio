import React from 'react';
import Header from './header';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import '../home.css'

class Home extends React.Component {
    render() {
        return(
            <div className="home"> 
                <Header />
                <About />
                <Projects />
                <Contact />
            </div>
        )
    }
}

export default Home;