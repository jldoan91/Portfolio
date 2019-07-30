import React from 'react';
import styles from './project.css';

const Project = class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.project}>
                <div className={styles.imgContainer}>
                    <img className={styles.thumbNail} src={this.props.picture}></img>
                </div>
                <hr className={styles.titlehr} />
                <h2 className={styles.title}>{this.props.title}</h2>
                <div className={styles.description}>
                    {this.props.description}
                    {this.props.technologies}
                    <p>Stored/Hosted on:</p>
                    <ul>
                        <li><a href={this.props.srcControlLink} target="_blank">{this.props.srcControl}</a></li>
                        <li><a href={this.props.hostLink} target="_blank">{this.props.host}</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Project;