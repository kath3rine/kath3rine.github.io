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
            role: "Neuromorphic Computing  Intern",
            company: "@ US Army Research Lab",
            date: "May 2023 - Present",
            desc: [
                "Research living vs artificial neural network dynamics for bio-inspired tech at UMD Nonlinear Dynamics of Complex Systems Lab",
                "Perturb living neural networks through optogenetic activation/inhibition, and study cellular activity via calcium imaging and image segmentation",
                "Model neural network dynamics and optimize performance by implementing parallel reservoir computing architecture"

            ]
        },
        {
            id: 2,
            img: Tamid,
            role: "Tech Consultant",
            company: "@ TAMID Group at Maryland",
            date: "Mar 2023 - Present",
            desc: [
                "Software development/data analysis for tech startups."
            ]
        },
        {
            id: 3,
            img: UMD,
            role: "Research Assistant",
            company: "@ UMD Computational Cognitive Neuroscience & Psychiatry Lab",
            date: "Aug 2022 - Dec 2022",
            desc: [
                "Analyzed EEG data from recognition memory tasks and computationally modelled information processing in learning, decision making, and episodic memory.",
                "Used Python to preprocess data and implement various machine learning classifiers, achieving ~80% accuracy in predicting subjects’ response"
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