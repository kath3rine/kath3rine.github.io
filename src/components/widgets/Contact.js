import '../../styles/Contact.css';
import Email from '../../images/email.png';
import Linkedin from '../../images/linkedin.png';
import Github from '../../images/github.png';
import Resume from '../../images/resume.png';

function Contact() {
    const icons = [
        {
            link: "https://linkedin.com/in/kli17",
            image: Linkedin
        },
        {
            link: "https://github.com/kath3rine",
            image: Github
        },
        {
            link: "https://docs.google.com/document/d/1TuWZ4J4QxJq75TsXh6pFEGCPtvYuIqK6waOykGUWQtI/edit?usp=sharing",
            image: Resume
        },
        {
            link: "mailto:kli17@terpmail.umd.edu",
            image: Email
        },
    ]
    return(
        <div id="contact">
            {icons.map((icon) => (
                <a href={icon.link}>
                    <img src={icon.image}></img>
                </a>
            ))}
        </div>
    );
}

export default Contact;