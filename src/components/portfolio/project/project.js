import React from 'react';
import styles from './project.css';

const Project = class Project extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={styles.project}>
                <img src={this.props.picture}></img>
                <hr/>
                <h3>{this.props.title}</h3>
                <ul>
                    {this.props.description}
                </ul>
            </div>
        )
    }
}

export default Project;