import '../styles/Experience.css';
import '../styles/Global.css';
import React, { useState } from 'react';

function Experience() {
    const [item, setItem] = useState(0);

    const handleChange = (newIndex) => {
        setItem(newIndex);
    }  

    const experiences = [
        [
            {
                company: "GEICO",
                role: "Software Engineer",
                date: "Jul 2025 - Present",
                desc: [
                    "Incoming summer 2025"
                ]
            },
            {
                company: "GEICO",
                role: "Software Engineer Intern",
                date: "Jun 2024 - Aug 2024",
                desc: [
                    "◇ Created a tool for managing and manipulating documents to streamline availability and incident management",
                    "◇ Implemented HTTP requests for a custom API using C# in the .NET framework for efficient interactions with CosmosDB",
                    "◇ Developed the user interface with React TypeScript, customizable for any user’s specific needs",
                    "◇ Incorporated error-handling mechanisms to reduce human error and environmental misconfiguration"
                ]
            }
        ],
        [
            {
                company: "University of Maryland",
                role: "Teaching Assistant",
                date: "Jan 2024 - Dec 2024",
                desc: [
                    "◇ CMSC351: Algorithms and CMSC250: Discrete Structures",
                    "◇ Teach discussion sections and hold office hours to guide students and enhance content comprehension",
                    "◇ Grade and write assignments for 200-600 students covering logic, proofs, probability, graphs, complexity, etc."
                ]
            }, 
            {
                company: "University of Maryland",
                role: "Research Assistant",
                date: "Aug 2022- Dec 2022",
                desc: [
                    "◇ @ Computational Computational Cognitive Neuroscience & Psychiatry Lab",
                    "◇ Conducted computational modeling of information processing in learning, decision-making, and episodic memory",
                    "◇ Processed EEG data from recognition memory tasks and developed machine learning classifiers in Python with scikit-learn and TensorFlow to extract relevant features, achieving an ~80% accuracy rate in predicting subjects’ responses"
                ]
            }
        ],
        [
            {
                company: "U.S. Army Research Lab",
                role: "Neuromorphic Computing Researcher",
                date: "May 2023 - May 2024",
                desc: [
                    "◇ Optically perturb and computationally model living neural network dynamics for a hybrid computing I/O platform", 
                    "◇ Culture cells and use optogenetic inhibition and activation via SLM to form and modulate living neural networks, and monitor neuronal activity with fluorescence microscopy, calcium imaging, and image segmentation",
                    "◇ Leverage Python, TypeScript, Docker, web sockets, and high-performance computing to create an app enabling custom photostimulation and real-time image and signal analysis on a digital micromirror device"
                ]
            }
        ],
        [
            {
                company: "TAMID at Maryland",
                role: "Tech Consultant",
                date: "Mar 2023 - May 2024",
                desc: [
                    "◇ Applied software development skills to advise tech startups as a member of a competitive business club",
                    "◇ Collaboratively built a full-stack app for an edutech startup, utilizing React Native for the user interface and allowing users to schedule appointments, search through a database, chat, and video conference"
                ]
            }
        ]
    ]

    return (
        <div className="section" id="experience-section">
            <h1 className="section-title"> ~/experience </h1>
                <div className="section-content" id="job-content">

                    <div className="job-component" id="job-sidebar">
                        {experiences.map((group, index) => (
                            <div id="sidebar-company"
                            key={index}
                            onClick={() => handleChange(index)}>
                                <a>{group[0].company}</a>
                            </div>
                        ))}
                    </div>

                    <div className="job-component" id="job-info">
                        {experiences[item].map((x) => (
                            <div id="sub-item"> 
                                <div id='title'>
                                    <span id="role">{x.role} </span> <span id="company"> @ {x.company}</span>
                                    <p id="job-date">{x.date}</p>
                                </div>

                                <div id="job-desc">
                                    {x.desc.map((d) => (
                                        <p id="job-desc-item">{d}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    
                    </div>
                </div>
        </div>
    );
}

export default Experience;