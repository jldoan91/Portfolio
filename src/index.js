import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu/menu';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import styles from './index.css';

function App(){
    const [mobileMenu, setMobileMenu] = useState(false);
    const [Active, setActive] = useState(() => About);
    const [previous, setPrevious] = useState('');

    const sections = {
        'about': About,
        'portfolio': Portfolio,
        'contact': Contact,
    }

    function menuClick(){
        setMobileMenu(!mobileMenu);
    }

    function updateActive(section){
        switch (this.state.previous) {
                    case 'Portfolio':
                        setActive(() => Portfolio);
                        // prevSec = <Portfolio active={this.state.active} shrink={this.state.mobileMenu} />;
                        break;
                    // case 'Contact':
                    //     prevSec = <Contact active={this.state.active} shrink={this.state.mobileMenu} />;
                    //     break;
                    // default:
                    //     prevSec = <About active={this.state.active} shrink={this.state.mobileMenu} />;
                }
                let section;
                switch (this.state.active) {
                    case 'Portfolio':
                        section = <Portfolio active={this.state.active} shrink={this.state.mobileMenu} />;
                        break;
                    // case 'Contact':
                    //     section = <Contact active={this.state.active} shrink={this.state.mobileMenu} />;
                    //     break;
                    // default:
                    //     section = <About active={this.state.active} shrink={this.state.mobileMenu} />;
            }

        setPrevious(Active);
        setActive(section);
    }



    // let prevSec;
    //     switch (this.state.previous) {
    //         case 'Portfolio':
    //             prevSec = <Portfolio active={this.state.active} shrink={this.state.mobileMenu} />;
    //             break;
    //         case 'Contact':
    //             prevSec = <Contact active={this.state.active} shrink={this.state.mobileMenu} />;
    //             break;
    //         default:
    //             prevSec = <About active={this.state.active} shrink={this.state.mobileMenu} />;
    //     }
    //     let section;
    //     switch (this.state.active) {
    //         case 'Portfolio':
    //             section = <Portfolio active={this.state.active} shrink={this.state.mobileMenu} />;
    //             break;
    //         case 'Contact':
    //             section = <Contact active={this.state.active} shrink={this.state.mobileMenu} />;
    //             break;
    //         default:
    //             section = <About active={this.state.active} shrink={this.state.mobileMenu} />;
    //     }

    return (
        <div className={styles.wrapper}>
                <i onClick={menuClick} className={!mobileMenu ? `fas fa-bars fa-2x ${styles.mobileMenu} ` : `fas fa-times fa-2x ${styles.mobileMenu} `} />
                <div className={styles.main}>
                    <Menu current={Active} show={mobileMenu} updateActive={updateActive} />
                    <div className={mobileMenu ? `${styles.prevSec} ${styles.shrunk}` : styles.prevSec}>
                        {/* {this.state.previous ? prevSec : null} */}
                    </div>
                    <div className={mobileMenu ? `${styles.section} ${styles.shrunk}` : styles.section}>
                        <Active/>
                    </div>
                </div>
            </div>
    )
}

// const App2 = class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             previous: '',
//             active: 'About',
//             mobileMenu: false
//         }
//     }

//     menuClick = () => {
//         this.state.mobileMenu ? this.setState({ mobileMenu: false }) : this.setState({ mobileMenu: true })
//     }

//     setActive = (section) => {
//         this.setState((prevState) => ({ previous: prevState.active, active: section }))
//     }
//     render() {
//         // let prevSec;
//         // switch (this.state.previous) {
//         //     case 'Portfolio':
//         //         prevSec = <Portfolio active={this.state.active} shrink={this.state.mobileMenu} />;
//         //         break;
//         //     case 'Contact':
//         //         prevSec = <Contact active={this.state.active} shrink={this.state.mobileMenu} />;
//         //         break;
//         //     default:
//         //         prevSec = <About active={this.state.active} shrink={this.state.mobileMenu} />;
//         // }
//         // let section;
//         // switch (this.state.active) {
//         //     case 'Portfolio':
//         //         section = <Portfolio active={this.state.active} shrink={this.state.mobileMenu} />;
//         //         break;
//         //     case 'Contact':
//         //         section = <Contact active={this.state.active} shrink={this.state.mobileMenu} />;
//         //         break;
//         //     default:
//         //         section = <About active={this.state.active} shrink={this.state.mobileMenu} />;
//         // }
//         return (
//             <div className={styles.wrapper}>
//                 <i onClick={this.menuClick} className={!this.state.mobileMenu ? `fas fa-bars fa-2x ${styles.mobileMenu} ` : `fas fa-times fa-2x ${styles.mobileMenu} `} />
//                 <div className={styles.main}>
//                     <Menu current={this.state.active} show={this.state.mobileMenu} setActive={this.setActive} />
//                     <div className={this.state.mobileMenu ? `${styles.prevSec} ${styles.shrunk}` : styles.prevSec}>
//                         {this.state.previous ? prevSec : null}
//                     </div>
//                     <div className={this.state.mobileMenu ? `${styles.section} ${styles.shrunk}` : styles.section}>
//                         {section}
//                     </div>
//                 </div >
//             </div>
//         );
//     }
// };

// export default App;
ReactDOM.render(<App />, document.getElementById("app"));