import React from 'react';
import styles from './portfolio.css';
import Project from './project/project';

const Portfolio = class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            node: <a href="https://nodejs.org/en/" target="_blank"><i className="fab fa-node-js" /> Node </a>,
            react: <a href="https://reactjs.org/" target="_blank"><i className="fab fa-react" /> React</a>
        }
    }

    render() {
        return (
            <div className={styles.portfolio}>
                <h1 className={styles.title}>Work I've Done</h1>
                <hr className={styles.titlehr} />
                <div className={styles.projects}>
                    <Project title="Unbeatable Tic-Tac-Toe" picture="src/components/portfolio/img/tictactoess.png" description={<p>An unbeatable tic tac toe game built with the minimax algorithm using</p>} technologies={<p>{this.state.node} + {this.state.react}</p>} srcControlLink='https://github.com/jldoan91/tictactoe' srcControl="GitHub" hostLink='https://jldoantictactoe.herokuapp.com/' host="Heroku" />
                    <Project title="Contact List" picture="/src/components/portfolio/img/contactlistss.png" description={<p></p>} technologies={<p></p>} app='https://codepen.io/jldoan91/full/PgprvB' />
                </div>
            </div>
        )
    }
}

export default Portfolio;