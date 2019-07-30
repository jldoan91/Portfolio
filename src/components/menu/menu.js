import React from 'react';
import styles from './menu.css';
import Resume from "../../../Josh Doan's Resume.pdf";

const Menu = class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.show ? `${styles.showMenu} ${styles.menu}` : styles.menu}>
                <img className={styles.profileImg} src="https://media.licdn.com/dms/image/C5603AQHBEZ-p92Fv9g/profile-displayphoto-shrink_200_200/0?e=1566432000&v=beta&t=4OhYIIyAFjALUVVEK4oeSi6c47MP-1GVtfWVYpj4SUI" />
                <div className={styles.nameTitle}>
                    <h1 className={styles.name}>Josh Doan</h1>
                    <span><a className={styles.title}>Web Developer</a> based in Phoenix</span>
                </div>
                <div className={styles.navBar}>
                    <ul>
                        <li className={styles.navList}><a onClick={() => this.props.setActive('About')} className={(this.props.current === 'About') ? `${styles.navLink} ${styles.active}` : styles.navLink}>About</a></li>
                        <li className={styles.navList}><a onClick={() => this.props.setActive('Portfolio')} className={(this.props.current === 'Portfolio') ? `${styles.navLink} ${styles.active}` : styles.navLink}>Work</a></li>
                        <li className={styles.navList}><a onClick={() => this.props.setActive('Contact')} className={(this.props.current === 'Contact') ? `${styles.navLink} ${styles.active}` : styles.navLink}>Contact</a></li>
                        <li className={styles.navList}><a href={Resume} target="_blank" className={styles.navLink}>Resume</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;