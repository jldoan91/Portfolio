import React from 'react';
import styles from './about.css';

const About = class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.about}>
                <h1 className={styles.header}>About Me</h1>
                <hr className={styles.titlehr} />
                <p>Hello, My name is Josh Doan. I am a web developer based out of Phoenix, Arizona.</p>
            </div>
        )
    }
}

export default About;