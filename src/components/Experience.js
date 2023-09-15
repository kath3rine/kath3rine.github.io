import '../styles/Section.scss';
import ExpCard from '../components/ExpCard.js';
import ARL from '../images/arl.png';
import Tamid from '../images/tamid.png';
import UMD from '../images/umd.png';

function Experience() {

    const cards = [
        {
            id: 1,
            img: ARL,
            role: "Neuromorphic Computing Intern",
            company: "@ US Army Research Lab",
            date: "May 2023 - Present",
            desc: [
                "Researching living neural network dynamics for applications in bio-inspired tech", 
                "Culture cells to form living neural networks, perturb them optogenetically, perform fluorescence microscopy to monitor activity, and analyze cellular communication by developing image segmentation algorithms",
                "Write Python script and conduct experiments on a digital micromirror device to allow for time-dependent photostimulation input on a neural culture"
            ]
        },
        {
            id: 2,
            img: Tamid,
            role: "Tech Consultant",
            company: "@ TAMID Group at Maryland",
            date: "Mar 2023 - Present",
            desc: [
                "Selected as a member of a competitive business club to apply software development and data analysis skills to advise tech startups"
            ]
        },
        {
            id: 3,
            img: UMD,
            role: "Academic Peer Mentor",
            company: "University of Maryland",
            date: "Aug 2023 - Present",
            desc: [
                "Assist in teaching General Chemistry for Engineers course by leading office hours, planning and facilitating in-class group activities, and providing feedback to professors"
            ]
        },
        {
            id: 4,
            img: UMD,
            role: "Research Assistant",
            company: "@ UMD Computational Cognitive Neuroscience & Psychiatry Lab",
            date: "Aug 2022 - Dec 2022",
            desc: [
                "Computationally modeled information processing in learning, decision making, and episodic memory",
                "Analyzed EEG’s from recognition memory tasks by preprocessing time-series data and developing machine learning classifiers with scikit-learn and TensorFlow in Python"
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