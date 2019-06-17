import React from 'react';
import styles from './contact.css';

const Contact = class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.contact}></div>
        )
    }
}

export default Contact;