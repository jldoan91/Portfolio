import React from 'react';
import styles from './menu.css';

const Menu = class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.menu}>
                <div className={styles.profileImg}></div>
                <h1>Josh Doan</h1>
                <span><a href="#">Web Developer</a> based in Phoenix</span>
                <div className={styles.navBar}>
                    <ul>
                        <li><a href="" className={styles.navLink}>Home</a></li>
                        <li><a href="" className={styles.navLink}>About</a></li>
                        <li><a href="" className={styles.navLink}>Work</a></li>
                        <li><a href="" className={styles.navLink}>Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;