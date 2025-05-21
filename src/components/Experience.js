import '../styles/Section.scss';
import React, { useState } from 'react';
import Geico from '../images/geico.png';
import ARL from '../images/arl.png';
import Tamid from '../images/tamid.png';
import UMD from '../images/umd.png';
import UMDCS from '../images/umdcs.png';

function Item({children}) {
    return (
        <div>{children}</div>
    )
}

function Experience() {
    const [item, setItem] = useState(0);

    const handleChange = (newIndex) => {
        setItem(newIndex);
    }  

    const experiences = [
        {
            company: "GEICO",
            img: Geico,
            role: "Software Engineer @",
            date: "Jul 2025 - Present",
            desc: [
                "Incoming summer 2025"
            ]
        },
        {
            company: "GEICO",
            img: Geico,
            role: "Software Engineer Intern @",
            date: "Jun 2024 - Aug 2024",
            desc: [
                "◇ Created a tool for managing and manipulating documents to streamline availability and incident management",
                "◇ Implemented HTTP requests for a custom API using C# in the .NET framework for efficient interactions with CosmosDB",
                "◇ Developed the user interface with React TypeScript, customizable for any user’s specific needs",
                "◇ Incorporated error-handling mechanisms to reduce human error and environmental misconfiguration"
            ]
        },
        {
            company: "U.S. Army Research Lab",
            img: ARL,
            role: "Neuromorphic Computing Researcher @",
            date: "May 2023 - May 2024",
            desc: [
                "◇ Optically perturb and computationally model living neural network dynamics for a hybrid computing I/O platform", 
                "◇ Culture cells and use optogenetic inhibition and activation via SLM to form and modulate living neural networks, and monitor neuronal activity with fluorescence microscopy, calcium imaging, and image segmentation",
                "◇ Leverage Python, TypeScript, Docker, web sockets, and high-performance computing to create an app enabling custom photostimulation and real-time image and signal analysis on a digital micromirror device"
            ]
        },
        {
            company: "University of Maryland",
            img: UMDCS,
            role: "Computer Science Teaching Assistant @",
            date: "Jan 2024 - Dec 2024",
            desc: [
                "◇ CMSC351: Algorithms and CMSC250: Discrete Structures",
                "◇ Teach discussion sections and hold office hours to guide students and enhance content comprehension",
                "◇ Grade and write assignments for 200-600 students covering logic, proofs, probability, graphs, complexity, etc."
            ]
        },
        {
            company: "TAMID at Maryland",
            img: Tamid,
            role: "Tech Consultant @",
            date: "Mar 2023 - May 2024",
            desc: [
                "◇ Applied software development skills to advise tech startups as a member of a competitive business club",
                "◇ Collaboratively built a full-stack app for an edutech startup, utilizing React Native for the user interface and allowing users to schedule appointments, search through a database, chat, and video conference"
            ]
        }
    ]

    return (
        <div className="Experience" id="experience">
            <div className="section">
                <span className="section-title"> experience.py </span>
                <p>print("click on each card for more info")</p>
                <div className="container">
                    <div className="sidebar">
                        {experiences.map((item, index) => (
                            <div
                            key={index}
                            onClick={() => handleChange(index)}>
                                {item.company}
                            </div>
                        ))}
                    </div>

                    <div className="job">
                        <h3 className='jobTitle'>
                            {experiences[item].role}{experiences[item].company}
                        </h3>
                        <p className='jobDescription'>
                            {experiences[item].desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;