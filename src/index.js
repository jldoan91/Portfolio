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
            active: 'About',
            mobileMenu: false
        }
    }

    menuClick = () => {
        this.state.mobileMenu ? this.setState({ mobileMenu: false }) : this.setState({ mobileMenu: true })
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
                section = <About />;
        }
        return (
            <div className={styles.wrapper}>
                <span onClick={this.menuClick} className={!this.state.mobileMenu ? `fas fa-bars fa-2x ${styles.mobileMenu}` : `fas fa-times fa-2x ${styles.mobileMenu}`}></span>
                <div className={styles.main}>
                    <Menu current={this.state.active} setActive={this.setActive} />
                    {section}
                </div >
            </div>
        );
    }
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));