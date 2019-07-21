import React from 'react';
import styles from './portfolio.css';
import Project from './project/project';

const Portfolio = class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.portfolio}>
                <h1>Work I've Done</h1>
                <hr />
                <div className={styles.projects}>
                    <Project />
                </div>
            </div>
        )
    }
}

export default Portfolio;