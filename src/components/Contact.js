import '../styles/Contact.css';
import Email from '../images/email.png';
import Linkedin from '../images/linkedin.png';
import Github from '../images/github.png';

function Contact() {
    return(
        <div className="Contact">
            <a href="mailto:kli17@terpmail.umd.edu"><img src={Email}/></a>
            <a href="https:/linkedin.com/in/kli17"><img src={Linkedin}/></a>
            <a href="https://github.com/kath3rine"><img src={Github}/></a>
        </div>
    );
}

export default Contact;