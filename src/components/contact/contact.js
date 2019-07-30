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

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            sent: true,
            btnTxt: 'Message Sent'
        })
    }

    formSubmit = (e) => {
        e.preventDefault()

        this.setState({
            btnTxt: '...sending'
        })

        axios({
            method: "POST",
            url: "/contact",
            data: {
                name: this.state.name,
                email: this.state.email,
                subject: this.state.subject,
                message: this.state.message
            }
        }).then((response => {
            if (response.data.msg === 'success') {
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                this.setState({
                    btnTxt: 'Message Failed to Send'
                })
            }
        }))
    }

    render() {
        return (
            <div className={this.props.shrink ? `${styles.shrunk} ${styles.contact}` : styles.contact}>
                <h1 className={styles.header}>Contact Me</h1>
                <hr className={styles.titlehr} />
                <div className={styles.container}>
                    <form>
                        <input className={styles.input} type="text" placeholder="First and Last Name" name="name" value={this.state.name} required onChange={e => this.setState({ name: e.target.value })}></input>
                        <input className={styles.input} type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}></input>
                        <input className={styles.input} type="text" placeholder="Subject" name="subject" value={this.state.subject} onChange={e => this.setState({ subject: e.target.value })}></input>
                        <textarea className={styles.textarea} placeholder="Enter your message here" name="message" value={this.state.message} required onChange={e => this.setState({ message: e.target.value })}></textarea>
                        <button className={styles.button} onClick={e => this.formSubmit(e)} disabled={this.state.sent} type="submit">{this.state.btnTxt}</button>
                    </form>
                </div>
                <div className={styles.socialmedia}>
                    <a className={styles.socialIcon} href="https://www.linkedin.com/in/josh-doan-328995138" target="_blank"><i className={`fab fa-linkedin fa-5x ${styles.icon}`}></i></a>
                    <a className={styles.socialIcon} href="https://github.com/jldoan91" target="_blank"><i className={`fab fa-github-square fa-5x ${styles.icon}`}></i></a>
                    <a className={styles.socialIcon} href="https://www.facebook.com/josh.doan.54" target="_blank"><i className={`fab fa-facebook-square fa-5x ${styles.icon}`}></i></a>
                    <a className={styles.socialIcon} href="https://twitter.com/jldoan91" target="_blank"><i className={`fab fa-twitter-square fa-5x ${styles.icon}`}></i></a>
                </div>
            </div >
        )
    }
}

export default Contact;