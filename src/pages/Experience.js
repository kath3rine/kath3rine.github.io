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
            desc: "Investigate relationships between living and artificial neural networks to increase efficacy for bio-inspired technology",
            desc2: "Perturb neurons using optogentics and monitor communication via calcium imaging/fluorescence microscopy",
            desc3: "Model and maximize network performance with reservoir computing and hyperparameter optimization"
        },
        {
            id: "e2",
            img: Tamid,
            role: "Tech Consultant",
            company: "@ TAMID at Maryland",
            date: "Mar 2023 - Present",
            desc: "Software development/data analysis for tech startups."
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