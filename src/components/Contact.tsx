import '../styles/Contact.css';
import icons from '../data/ContactData.json'

interface IconType {
    link: string;
    image: string;
}

function Contact() {
    return (
        <div id="contact">
            {icons.map((icon : IconType) => (
                <a href={icon.link}>
                    <img src={icon.image}></img>
                </a>
            ))}
        </div>
    );
}

export default Contact;