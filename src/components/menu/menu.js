import React from 'react';
import styles from './menu.css';

const Menu = class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.menu}>
                <img className={styles.profileImg} src="https://media.licdn.com/dms/image/C5603AQHBEZ-p92Fv9g/profile-displayphoto-shrink_200_200/0?e=1566432000&v=beta&t=4OhYIIyAFjALUVVEK4oeSi6c47MP-1GVtfWVYpj4SUI" />
                <div className={styles.nameTitle}>
                    <h1>Josh Doan</h1>
                    <span><a href="#">Web Developer</a> based in Phoenix</span>
                </div>
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