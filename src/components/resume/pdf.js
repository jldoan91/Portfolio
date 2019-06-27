import React from 'react';
import { Document, Page } from 'react-pdf';
import styles from './pdf.css';

const PDF = class PDF extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberPages: 2,
            pageNum: 1
        }
    }

    prevPage = () => {
        if (this.state.pageNum === 2) {
            this.setState(prevState => ({
                pageNum: (prevState.pageNum - 1)
            }))
        }
    }

    nextPage = () => {
        if (this.state.pageNum === 1) {
            this.setState(prevState => ({
                pageNum: (prevState.pageNum + 1)
            }))
        }
    }

    render() {
        return (
            <div className={styles.pdf}>
                < Document file="./src/components/resume/Josh Doan's Resume.pdf" onLoadSuccess={this.onDocumentLoadSuccess} >
                    <Page pageNumber={this.state.pageNum} />
                    <p><a href="#" onClick={this.prevPage}>Prev...</a> Page <strong>{this.state.pageNum}</strong> of <strong>{this.state.numberPages}</strong> <a href="#" onClick={this.nextPage}>...Next</a></p>
                </Document >
            </div>
        )
    }
}

export default PDF;