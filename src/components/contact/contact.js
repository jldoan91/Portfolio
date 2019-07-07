import React from 'react';
import styles from './contact.css';

const Contact = class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className={styles.contact}>
                <h1>Contact Me</h1>
                <p>You can reach me through the form below or through one of the social media platforms in the menu on the left.</p>
                <hr />
                <div className={styles.container}>
                    <form action="#">
                        <div className={styles.formGroup}>
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="First and Last Name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}></input>
                        </div>
                        <div className={styles.formGroup}>
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Email Address" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}></input>
                        </div>
                        <div className={styles.formGroup}>
                            <label for="message">Message</label>
                            <textarea placeholder="Enter your message here" id="message" name="message" value={this.state.message} onChange={e => this.setState({ message: e.target.value })}></textarea>
                        </div>
                        <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
                    </form>
                </div>
            </div >
        )
    }
}

export default Contact;
// https://blog.bitsrc.io/how-to-build-a-contact-form-with-react-js-and-php-d5977c17fec0