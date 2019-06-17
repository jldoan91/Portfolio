import React from 'react';
import styles from './portfolio.css';

const Portfolio = class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.portfolio}></div>
        )
    }
}

export default Portfolio;