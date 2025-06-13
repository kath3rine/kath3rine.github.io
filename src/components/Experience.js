import '../styles/Experience.css';
import React, { useState } from 'react';
import experiences from './ExperienceData.json'
function Experience() {
    const [item, setItem] = useState(0);

    const handleChange = (newIndex) => {
        setItem(newIndex);
    }  

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