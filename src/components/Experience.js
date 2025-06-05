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
                date: "JUL 2025 - NOW",
                desc: [
                    "Incoming summer 2025"
                ]
            },
            {
                company: "GEICO",
                role: "Software Engineer Intern",
                date: "JUN 2024 - AUG 2024",
                desc: [
                    "Created a tool for managing and manipulating documents to streamline availability and incident management",
                    "Implemented HTTP requests for a custom API using C# in the .NET framework for efficient interactions with CosmosDB",
                    "Developed the user interface with React TypeScript, customizable for any user’s specific needs",
                    "Incorporated error-handling mechanisms to reduce human error and environmental misconfiguration"
                ]
            }
        ],
        [
            {
                company: "University of Maryland",
                role: "Teaching Assistant",
                date: "JAN 2024 - DEC 2024",
                desc: [
                    "CMSC351: Algorithms and CMSC250: Discrete Structures",
                    "Taught discussion sections and held office hours to guide students and enhance content comprehension",
                    "Graded and wrote assignments for 200-600 students covering logic, proofs, probability, graphs, complexity, and more."
                ]
            }, 
            {
                company: "University of Maryland",
                role: "Research Assistant",
                date: "AUG 2022- DEC 2022",
                desc: [
                    "@ Computational Computational Cognitive Neuroscience & Psychiatry Lab",
                    "Conducted computational modeling of information processing in learning, decision-making, and episodic memory",
                    "Processed EEG data from recognition memory tasks and developed machine learning classifiers in Python with scikit-learn and TensorFlow to extract relevant features, achieving an ~80% accuracy rate in predicting subjects’ responses"
                ]
            }
        ],
        [
            {
                company: "U.S. Army Research Lab",
                role: "Neuromorphic Computing Researcher",
                date: "MAY 2023 - MAY 2024",
                desc: [
                    "Optically perturbed and computationally modeled living neural network dynamics for a hybrid computing I/O platform", 
                    "Cultured cells and used optogenetic inhibition and activation via SLM to form and modulate living neural networks, and monitor neuronal activity with fluorescence microscopy, calcium imaging, and image segmentation",
                    "Created app enabling custom photostimulation and real-time image and signal analysis on a digital micromirror device using Python, TypeScript, Docker, web sockets, and high-performance computing"
                ]
            }
        ],
        [
            {
                company: "TAMID at Maryland",
                role: "Tech Consultant",
                date: "MAR 2023 - MAY 2024",
                desc: [
                    "Applied software development skills to advise tech startups as a member of a competitive business club",
                    "Collaboratively built a full-stack app for an edutech startup, utilizing React Native for the user interface",
                    "Implemented appointment scheduling, database search, chat, and video conference features"
                ]
            }
        ]
    ]

    return (
        <div className="section" id="experience-section">
            <h1 className="section-title" id="experience"> ~/experience </h1>
                <div className="section-content" id="job-content">

                    <div className="job-component" id="job-sidebar">
                        {experiences.map((group, index) => (
                            <div id="sidebar-company"
                            key={index}
                            onClick={() => handleChange(index)}>
                                <p className={`${item==index? 'selected' : 'not-selected'}`}>
                                    {index + 1}. {group[0].company}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="job-component" id="job-info">
                        {experiences[item].map((x, i) => (
                            <div className={`${i === experiences[item].length - 1 ? 'sub-item' : 'sub-item-border'}`} id="sub-item"> 
                                <div id='title'>
                                    <span id="role">{x.role} </span> <span id="company"> @ {x.company}</span>
                                    <p id="job-date">{x.date}</p>
                                </div>

                                <div id="job-desc">
                                    {x.desc.map((d) => (
                                        <li id="job-desc-item">{d}</li>
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