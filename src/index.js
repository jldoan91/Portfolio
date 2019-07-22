import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu/menu';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import styles from './index.css';

const App = class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'Portfolio'
        }
    }

    setActive = (section) => {
        this.setState({ active: section })
    }
    render() {
        let section;
        switch (this.state.active) {
            case 'Portfolio':
                section = <Portfolio />;
                break;
            case 'Contact':
                section = <Contact />;
                break;
            default:
                section = <About />
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