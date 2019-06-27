import React from 'react';
import PDF from './pdf';
import styles from './resume.css';

const Resume = class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.resume}>
                <PDF />
            </div>
        )
    }
}

export default Resume;