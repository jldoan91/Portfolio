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
            active: 'Contact'
        }
    }

    setActive = (section) => {
        this.setState({ active: section })
    }
    render() {
        let section;
        switch (this.state.active) {
            case 'About':
                section = <About />;
                break;
            case 'Portfolio':
                section = <Portfolio />;
                break;
            case 'Contact':
                section = <Contact />;
                break;
            case 'Resume':
                section = <Resume />;
                break;
            default:
                section = <Intro />
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