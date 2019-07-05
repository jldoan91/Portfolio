import React from 'react';
import styles from './contact.css';

const Contact = class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.contact}>
                <p>You reach me through the form below or through one of the social media platforms in the menu on the left.</p>
                <form>
                    <label>Name</label>
                    <input type="text" placeholder="First and Last Name"></input>
                    <label>Email</label>
                    <input type="email" placeholder="Email Address"></input>
                    <label>Message</label>
                    <textarea></textarea>
                </form>
            </div>
        )
    }
}

export default Contact;
https://blog.bitsrc.io/how-to-build-a-contact-form-with-react-js-and-php-d5977c17fec0