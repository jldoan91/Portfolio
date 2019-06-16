import React from 'react';
import styles from './intro.css';

const Intro = class Intro extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.intro}></div>
        )
    }
}

export default Intro;