import React from 'react';
import styles from './about.css';

const About = class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.about}></div>
        )
    }
}

export default About;