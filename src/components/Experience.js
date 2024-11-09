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
            date: "Jun 2024 - Aug 2024",
            desc: [
                "◇ Created a tool for managing and manipulating documents to streamline availability and incident management",
                "◇ Implemented HTTP requests for a custom API using C# in the .NET framework for efficient interactions with CosmosDB",
                "◇ Developed the user interface with React TypeScript, customizable for any user’s specific needs",
                "◇ Incorporated error-handling mechanisms to reduce human error and environmental misconfiguration"
            ]
        },
        {
            id: 2,
            img: ARL,
            role: "Neuromorphic Computing Researcher",
            company: "@ U.S. Army Research Lab",
            date: "May 2023 - May 2024",
            desc: [
                "◇ Optically perturb and computationally model living neural network dynamics for a hybrid computing I/O platform", 
                "◇ Culture cells and use optogenetic inhibition and activation via SLM to form and modulate living neural networks, and monitor neuronal activity with fluorescence microscopy, calcium imaging, and image segmentation",
                "◇ Leverage Python, TypeScript, Docker, web sockets, and high-performance computing to create an app enabling custom photostimulation and real-time image and signal analysis on a digital micromirror device"
            ]
        },
        {
            id: 3,
            img: UMDCS,
            role: "Computer Science Teaching Assistant",
            company: "@ University of Maryland",
            date: "Jan 2024 - Present",
            desc: [
                "◇ CMSC351: Algorithms and CMSC250: Discrete Structures",
                "◇ Teach discussion sections and hold office hours to guide students and enhance content comprehension",
                "◇ Grade and write assignments for 200-600 students covering logic, proofs, probability, graphs, complexity, etc."
            ]
        },
        {
            id: 4,
            img: Tamid,
            role: "Tech Consultant",
            company: "@ TAMID Group at Maryland",
            date: "Mar 2023 - May 2024",
            desc: [
                "◇ Applied software development skills to advise tech startups as a member of a competitive business club",
                "◇ Collaboratively built a full-stack app for an edutech startup, utilizing React Native for the user interface and allowing users to schedule appointments, search through a database, chat, and video conference"
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
                <p>print("click on each card for more info")</p>
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