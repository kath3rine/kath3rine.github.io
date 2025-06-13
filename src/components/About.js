import '../styles/About.css';

function About() {
    const favorites = {
        language: "Python",
        frameworks: "React, Flask",
        course: "Discrete Math",
        interests: "Algorithms, Machine Learning, Computational Media"
    }
    
    return (
        <div className='section' id="about">
            <h1 className='section-title'> ~/about</h1>
            <div id='about-content'>
                <div id="about-left">
                    <p>
                        I am a software engineer at GEICO and a recent graduate of the University of Maryland, where I earned dual-degrees in Computer Science and Immersive Media Design: Computing. In my free time, I enjoy playing word games and curating playlists.
                    </p>
                    <pre>
                        favorites = {JSON.stringify(favorites, null, 2)}
                    </pre>
                </div>

                <div id="about-right">
                    <h3>{'>>'} ls recent_favorites</h3>
                    <div id='about-right-content'>
                        <div className='embedded' id="embed-playlist">
                            <iframe 
                            src="https://open.spotify.com/embed/playlist/039BIF7FaaxAIf7ho4hMOS?utm_source=generator" 
                            width="300" height="152" 
                            allowfullscreen="" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy"></iframe>
                        </div>

                        <div className='embedded' id="embed-movie">
                            <iframe
                            width="300" height="152" 
                            src="https://www.youtube.com/embed/jbZJ487oJlY?si=hlYRUA0c5BO7xbar" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default About