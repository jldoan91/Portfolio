import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu/menu';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Resume from './components/resume/resume';
import styles from './index.css';

const App = class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'Intro'
        }
    }

    setActive = (section) => {
        this.setState({ active: section })
    }

    render() {
        let section;
        if (this.state.active === 'Intro') {
            section = <Intro />
        } else if (this.state.active === 'About') {
            section = <About />
        } else if (this.state.active === 'Portfolio') {
            section = <Portfolio />
        } else if (this.state.active === 'Contact') {
            section = <Contact />
        } else if (this.state.active === 'Resume') {
            section = <Resume />
        }
        return (
            <div className={styles.main}>
                <Menu current={this.state.active} setActive={this.setActive} />
                {section}
            </div >
        );
    }
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));