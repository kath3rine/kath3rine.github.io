import '../styles/Section.scss';
import ExpCard from '../components/ExpCard.js';
import ARL from '../images/arl.png';
import Tamid from '../images/tamid.png';
import UMD from '../images/umd.png';
import UMDCS from '../images/umdcs.png';

function Experience() {

    const cards = [
        {
            id: 1,
            img: ARL,
            role: "Neuromorphic Computing Intern",
            company: "@ US Army Research Lab",
            date: "May 2023 - Present",
            desc: [
                "Optically perturb and computationally model living neural network dynamics to develop a hybrid computing I/O platform", 
                "Culture cells and optogenetically modulate networks, use fluorescence microscopy to monitor communication, and implement image segmentation to analyze calcium activity in epifluorescent images",
                "Use Python and Docker with a DMD to enable time-dependent photostimulation and conduct real-time signal/image analysis via web sockets and HPC"
            ]
        },
        {
            id: 2,
            img: UMDCS,
            role: "Teaching Assistant",
            company: "@ UMD Dept. of Computer Science",
            date: "Jan 2024 - Present",
            desc: [
                "Teach two discussions and hold two office hours per week for Discrete Structures to guide students and enhance content comprehension",
                "Grade and write assignments for 200 students covering logic, proofs, sets, probability, etc"
            ]
        },
        {
            id: 3,
            img: Tamid,
            role: "Tech Consultant",
            company: "@ TAMID Group at Maryland",
            date: "Mar 2023 - Present",
            desc: [
                "Selected as a member of a competitive business club to apply software development skills to advise tech startups",
                "Collaboratively create a full-stack app, utilizing React Native for the user interface and allowing users to schedule appointments, search through a database, chat, and video conference"
            ]
        },
        {
            id: 4,
            img: UMD,
            role: "Research Assistant",
            company: "@ UMD Computational Cognitive Neuroscience & Psychiatry Lab",
            date: "Aug 2022 - Dec 2022",
            desc: [
                "Conducted computational modeling of information processing in learning, decision making, and episodic memory", 
                "Processed EEG data from recognition memory tasks and developed machine learning classifiers in Python to extract relevant features, achieving an ~80% accuracy rate in predicting subjects’ responses"
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