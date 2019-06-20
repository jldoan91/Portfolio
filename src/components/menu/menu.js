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
                        <li><a onClick={() => this.props.setActive('Intro')} className={(this.props.current === 'Intro') ? `${styles.navLink} ${styles.active}` : styles.navLink}>Home</a></li>
                        <li><a onClick={() => this.props.setActive('About')} className={(this.props.current === 'About') ? `${styles.navLink} ${styles.active}` : styles.navLink}>About</a></li>
                        <li><a onClick={() => this.props.setActive('Portfolio')} className={(this.props.current === 'Portfolio') ? `${styles.navLink} ${styles.active}` : styles.navLink}>Work</a></li>
                        <li><a onClick={() => this.props.setActive('Contact')} className={(this.props.current === 'Contact') ? `${styles.navLink} ${styles.active}` : styles.navLink}>Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;