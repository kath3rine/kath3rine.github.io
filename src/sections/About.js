import '../styles/About.css';

function AboutMe() {
    const favorites = {
        language: "Python",
        frameworks: "React, Flask",
        course: "Discrete Math",
        interests: "Algorithms, Machine Learning, Computational Media"
    }

    return (
        <div id="about-me">
            <p> I am a software engineer at GEICO and a recent graduate of the University of Maryland, where I earned dual-degrees in Computer Science and Immersive Media Design: Computing. In my free time, I enjoy playing word games and curating playlists.</p>
            <pre>favorites = {JSON.stringify(favorites, null, 2)}</pre>
        </div>
    );
}

function Favorites() {
    return(
        <div id="favorites">
            <h3>{'>>'} ls recent_favorites</h3>
            <div id='favorites-content'>
                <div className='embedded' id="embed-playlist">
                    <iframe 
                    height='152' width='300'
                    src="https://open.spotify.com/embed/playlist/1wKAnCXEikwulrqRq5HCJa?utm_source=generator" 
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"></iframe>
                </div>

                <div className='embedded' id="embed-movie">
                    <iframe 
                    height='152' width='300'
                    src="https://www.youtube.com/embed/jbZJ487oJlY?si=hlYRUA0c5BO7xbar" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}

function About() {
    return (
        <div className='section' id="about">
            <h1 className='section-title'> ~/about</h1>
            <div id='about-content'>
                <div id="about-left"><AboutMe/></div>
                <div id="about-right"><Favorites/></div>
            </div>
            
        </div>
    );
}
export default About