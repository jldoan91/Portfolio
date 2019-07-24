import React from 'react';
import styles from './portfolio.css';
import Project from './project/project';
import tictactoe from '../../../img/tictactoess.png';
import contactList from '../../../img/contactlistss.png';

const Portfolio = class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            node: <a className={styles.techLink} href="https://nodejs.org/en/" target="_blank">Node</a>,
            react: <a className={styles.techLink} href="https://reactjs.org/" target="_blank">React</a>
        }
    }

    render() {
        return (
            <div className={this.props.shrink ? `${styles.shrunk} ${styles.portfolio}` : styles.portfolio}>
                <h1 className={styles.title}>Work I've Done</h1>
                <hr className={styles.titlehr} />
                <div className={styles.projects}>
                    <Project title="Unbeatable Tic-Tac-Toe" picture={tictactoe} description={<p>An unbeatable tic tac toe game built with the minimax algorithm using</p>} technologies={<p>{this.state.node} + {this.state.react}</p>} srcControlLink='https://github.com/jldoan91/tictactoe' srcControl="GitHub" hostLink='https://jldoantictactoe.herokuapp.com/' host="Heroku" />
                    <Project title="Contact List" picture={contactList} description={<p></p>} technologies={<p></p>} app='https://codepen.io/jldoan91/full/PgprvB' />
                </div>
            </div>
        )
    }
}

export default Portfolio;