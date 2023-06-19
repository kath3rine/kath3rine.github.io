import '../styles/Section.scss';
import ExpCard from '../components/ExpCard.js';
import ARL from '../images/arl.png';
import Tamid from '../images/tamid.png';
import UMD from '../images/umd.png';

function Experience() {

    const cards = [
        {
            id: "e1",
            img: ARL,
            role: "Neuromorphic Computing Research Intern",
            company: "@ US Army Research Lab",
            date: "May 2023 - Present",
            desc: "Advancing synthetic biological intelligence/biomimetic technology by understanding and controlling excitable networks of living systems",
            desc2: "Using photostimulation, fluorescence microscopy/calcium imaging, reservoir computing, and more to perturb and model relationships between biological and artificial neural networks"
        },
        {
            id: "e2",
            img: Tamid,
            role: "Tech Consultant",
            company: "@ TAMID at Maryland",
            date: "Mar 2023 - Present",
            desc: "Selected as a member of a competitive business club to apply data analytics and software development skills to advise tech startups."
        },
        {
            id: "e3",
            img: UMD,
            role: "Research Assistant",
            company: "@ UMD Computational Cognitive Neuroscience & Psychiatry Lab",
            date: "Aug 2022 - Dec 2022",
            desc: "Analyzed EEG data from recognition memory tasks and computationally model information processing in learning, decision making, and episodic memory.",
            desc2: "Used Python to preprocess data and implement various machine learning classifiers, achieving ~80% accuracy in predicting subjects’ response"
        }
    ]

    return (
        <div className="Experience" id="experience">
            <div className="section">
                <span> experience.py </span>
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