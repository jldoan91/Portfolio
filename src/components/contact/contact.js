import React from 'react';
import styles from './contact.css';
import Axios from 'axios';

const Contact = class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        this.baseState = {...this.state}
    }

    handleSubmit = e => {
        e.preventDefault();
        axios({
            method: "POST",
            url: "https://localhost:3002/send",
            data: {
                name: this.state.name,
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message
            }
        }).then((response) => {
            if(response.data.msg === 'success'){
                alert("Message Sent!");
                this.resetForm();
            }else if(response.data.msg === 'fail'){
                alert("Message Failed to Send!");
            }
        })
    }

    resetForm = () => {
        this.setState(this.baseState);
    }

    render() {
        return (
            <div className={styles.contact}>
                <h1>Contact Me</h1>
                <hr />
                <div className={styles.container}>
                    <form>
                            <input type="text" placeholder="First and Last Name"></input>
                            <input type="email" placeholder="Email Address"></input>
                            <input type="text" placeholder="Subject"></input>
                            <textarea placeholder="Enter your message here"></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default Contact;