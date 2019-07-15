import React from 'react';
import styles from './contact.css';
import axios from 'axios';

const Contact = class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            sent: false,
            btnTxt: 'Send Message'
        }
    }

    formSubmit = (e) => {
        e.preventDefault();

        this.setState({
            btnTxt: '...sending'
        })

        let data = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }


    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            btnTxt: 'Message Sent'
        })
    }

    render() {
        return (
            <div className={styles.contact}>
                <h1>Contact Me</h1>
                <hr />
                <div className={styles.container}>
                    <form onSubmit={e => this.formSubmit(e)}>
                        <input type="text" placeholder="First and Last Name" required onChange={e => this.setState({ name: e.target.value })}></input>
                        <input type="email" placeholder="Email Address" onChange={e => this.setState({ email: e.target.value })}></input>
                        <input type="text" placeholder="Subject" onChange={e => this.setState({ subject: e.target.value })}></input>
                        <textarea placeholder="Enter your message here" required onChange={e => this.setState({ message: e.target.value })}></textarea>
                        <button disabled={this.state.sent} type="submit">{this.state.btnTxt}</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default Contact;