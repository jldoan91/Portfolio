import React from 'react';
import styles from './resume.css';

const Resume = class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.resume}>
                <div><h1>Josh Doan</h1></div>
                <div>
                    https://www.linkedin.com/in/josh-doan-328995138
                <br />
                    https://github.com/jldoan91
                <br />
                    <span className={styles.left}>(801)671-7353</span> <span>5222 N 41st Dr Phoenix, AZ 85019</span> <span className={styles.right}>jldoan91@gmail.com</span>
                </div>
                <div><h3>Skills & Other Accomplishments</h3></div>
                <div>
                    <ul>
                        <li>Established the case category mix and drafted workflow to help establish the case quality review at PresenceLearning. </li>
                        <li>Developed the process for scheduling appointments to train  Paraprofessionals on the school side to use the PresenceLearning platform.</li>
                        <li>Consistently completed an average of 600+ tickets per month while retaining an average score of 8.5/10 on resolutions to tickets for a year and 3 months while working at PresenceLearning.</li>
                    </ul>
                </div>
                <div><h3>Professional Experience</h3></div>
                <div>
                    <span className={styles.left}>8/2018 - Current</span> <span className={styles.center}>TAG Employer Services</span> <span className={styles.right}>Phoenix, AZ</span>
                </div>
                <div>
                    <h5>Client Support Specialist</h5>
                    <ul>
                        <li>Engage with clients via phone calls/emails to identify and resolve software/technical issues</li>
                        <li>Manage integration of client payroll submission and TAG software</li>
                        <li>First point of contact for all employer/employee related questions regarding payroll, benefits, 401k, and WC</li>
                        <li>Compile internal management reports from payroll system software via SQL database </li>
                        <li>Test smaller feature updates prior to release</li>
                    </ul>
                </div>
                <div>
                    <span className={styles.left}>6/2017 - 8/2018</span> <span className={styles.center}>PresenceLearning Inc</span> <span className={styles.right}>Salt Lake City, UT</span>
                </div>
                <div>
                    <h5>Tier 1 Technical Support/Services Representative</h5>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <span className={styles.left}>8/2019 - 6/2017</span> <span className={styles.center}>Bluehost</span> <span className={styles.right}>Orem, UT</span>
                </div>
                <div>
                    <h5>Tier 1 Technical Support Engineer/Wordpress Expert</h5>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div >
        )
    }
}

export default Resume;