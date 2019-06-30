import React from 'react';
import styles from './resume.css';

const Resume = class Resume extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.resume}>
                <div className={styles.pageOne}>
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
                            <li>Receive inbound customer service/technical support calls, chats, and/or emails.</li>
                            <li>Assist clinicians and schools with technical problems they’re having including but not limited to: troubleshooting Windows, MacOS, and ChromeOS audio and video device issues, analysis of internet connection speeds, analysis of console log errors when receiving error messages in the platform, help determine the cause of network issues preventing therapy from continuing.</li>
                            <li>Contribute to training materials and processes as company and department grows.</li>
                            <li>Took lead on multiple projects including: data cleanup in the platform, analysis of incoming cases and trends, clean up of data stored in google sheets.</li>
                            <li>Escalate cases that require extensive follow up to tier 2 representatives.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.pageTwo}>
                    <div>
                        <span className={styles.left}>8/2019 - 6/2017</span> <span className={styles.center}>Bluehost</span> <span className={styles.right}>Orem, UT</span>
                    </div>
                    <div>
                        <h5>Tier 1 Technical Support Engineer/Wordpress Expert</h5>
                        <ul>
                            <li>Receive inbound customer service/technical support calls, chats, and/or tickets</li>
                            <li> Assist the customer with any technical problems they’re having including but not limited to; assist end user in setting up 3rd party email clients (mac mail, outlook, thunderbird, etc.), restoring backups, making backups, troubleshooting through command line interface, analysis of file structure & corrupt/hacked files, analysis of network traffic flow & mail flow MySQL database management, import/export/backup/restore/create, etc., troubleshooting CMS errors ranging from database problems to php fatal errors, all hundred web browser errors, error/mail exchange log analysis, expedite pending tasks, check bug tickets, process billing information/take payments.</li>
                            <li>Report trending issues & submit bug reports</li>
                        </ul>
                    </div>
                    <div>
                        <span className={styles.left}>6/2011 - 8/2016</span> <span className={styles.center}>ACE Hardware</span> <span className={styles.right}>Salt Lake City, UT</span>
                    </div>
                    <div>
                        <h5>Manager/Desktop Support</h5>
                        <ul>
                            <li>Troubleshoot basic network and desktop issues including: POS software not receiving input from hardware, analyze internet connection via speed tests, configure windows and POS software to work with new hardware.</li>
                            <li>Assist customers in finding products and answer any questions they have</li>
                            <li>Clean/close/lock up the store</li>
                            <li>Count the tills/safe and reconcile them for the next day</li>
                            <li>Supervise/train team members</li>
                            <li>Operate forklift to load and unload freight trucks as merchandise is delivered</li>
                        </ul>
                    </div>
                    <div><h3>Education</h3></div>
                    <div>
                        <span className={styles.left}>1/2018 - 5/2018</span> <span className={styles.center}>Salt Lake Community College</span> <span className={styles.right}>Salt Lake City, UT</span>
                    </div>
                    <div>
                        <h5>A.A.S. Computer Science and Information Systems</h5>
                        <ul>
                            <li>Completed 3 classes including 1 english class and 2 beginner level computer science classes.</li>
                        </ul>
                    </div>
                    <div>
                        <span className={styles.left}>8/2006 - 6/2009</span> <span className={styles.center}>Olympus High School</span> <span className={styles.right}>Holladay, UT</span>
                    </div>
                    <div>
                        <h5>High School Diploma</h5>
                        <ul>
                            <li>I received the cord for graduating in AOIT (Academy Of Information Technology)</li>
                            <li>1st place in Utah Multimedia Arts Festival 2009 3D animation category</li>
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}

export default Resume;