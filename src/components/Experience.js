import '../styles/Section.scss';
import ExpCard from '../components/ExpCard.js';
import Geico from '../images/geico.png';
import ARL from '../images/arl.png';
import Tamid from '../images/tamid.png';
import UMD from '../images/umd.png';
import UMDCS from '../images/umdcs.png';

function Experience() {

    const cards = [
        {
            id: 1,
            img: Geico,
            role: "Software Engineer Intern",
            company: "@ GEICO",
            date: "Jun 2024 - Present",
            desc: [
                "◇ Site Reliability Engineering: Availability & Incident Management Team",
                "◇ Develop the API for an internal incident reporting application using C# and Azure"
            ]
        },
        {
            id: 2,
            img: ARL,
            role: "Neuromorphic Computing Intern",
            company: "@ U.S. Army Research Lab",
            date: "May 2023 - Present",
            desc: [
                "◇ Optically perturb and computationally model living neural network dynamics to develop a hybrid computing I/O platform", 
                "◇ Optogenetically modulate living neural networks, and use fluorescence microscopy, calcium imaging, and image segmentation to analyze neuronal communication",
                "◇ Write Python scripts to enable time-dependent stimulation on a digital micromirror device and conduct real-time analysis with web sockets and HPC"
            ]
        },
        {
            id: 3,
            img: UMDCS,
            role: "Computer Science Teaching Assistant",
            company: "@ University of Maryland",
            date: "Jan 2024 - Present",
            desc: [
                "◇ Hold discussion sections and office hours for Discrete Structures to guide students and enhance content comprehension",
                "◇ Grade and write assignments for 200 students covering logic, proofs, sets, probability, etc"
            ]
        },
        {
            id: 4,
            img: Tamid,
            role: "Tech Consultant",
            company: "@ TAMID Group at Maryland",
            date: "Mar 2023 - May 2024",
            desc: [
                "◇ Selected as a member of a competitive business club to apply software development skills to advise tech startups",
                "◇ Collaboratively built a full-stack app, utilizing React Native for the user interface, and allowing users to schedule appointments, search through a database, chat, and video conference"
            ]
        },
        {
            id: 5,
            img: UMD,
            role: "Research Assistant",
            company: "@ University of Maryland",
            date: "Aug 2022 - Dec 2022",
            desc: [
                "◇ @ Computational Cognitive Neuroscience & Psychiatry Lab",
                "◇ Computationally modeled information processing in learning, decision making, and episodic memory", 
                "◇ Processed EEG data from recognition memory tasks and developed machine learning classifiers in Python to extract relevant features, achieving an ~80% accuracy rate in predicting subjects’ responses"
            ]
        }
    ]

    return (
        <div className="Experience" id="experience">
            <div className="section">
                <span className="section-title"> experience.py </span>
                <p> print("click on each card for more info")</p>
                <div className="container">
                {cards.map((card) => (
                    <ExpCard key={card.id} card={card} />
                ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;