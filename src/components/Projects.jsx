import React from 'react'
import ProjectCard from './ProjectCard';
import '../styles/skillsAndProjects.css'

export default function Projects() {

    const projectsData = [
        {
            img: "./images/minimalist.png",
            alt: "The Minimalist Website",
            title: "The Minimalist",
            type: "Website",
            description: "A single page static website with beautiful css animations",
            linkAvailable: true,
            link: "https://the-minimalist-uday.web.app",
            linkText: "Visit",
            github: "https://github.com/ImaginedTime/The-Minimalist",
        },
        {
            img: "./images/particlejs.png",
            alt: "ParticleJS library",
            title: "Particle JS",
            type: "Library / FrameWork",
            description: "A library made in JS that can be used to simulate particles on the background of Websites",
            linkAvailable: true,
            link: "https://particlejs-uday.web.app/",
            linkText: "Sample",
            github: "https://github.com/ImaginedTime/ParticlesJS.js",
        },
        {
            img: "./images/tourism.png",
            alt: "Tourism Website",
            title: "Tourism Website",
            type: "Website",
            description: "A website made for a tourism company, with a beautiful UI and a backend to manage the data",
            linkAvailable: true,
            link: "https://imaginedtime.github.io/Tourism-Website",
            linkText: "Visit",
            github: "https://github.com/ImaginedTime/Tourism-Website",
        },
        {
            img: "./images/tetris.png",
            alt: "Tetris game",
            title: "Tetris Game",
            type: "Game",
            description: "A 2 player Tetris game made using JS",
            linkAvailable: true,
            link: "https://tetris-uday.web.app",
            linkText: "Visit",
            github: "https://github.com/ImaginedTime/Tetris",
        },
        {
            img: "./images/minesweeper.png",
            alt: "Minesweeper game",
            title: "Minesweeper",
            type: "Game",
            description: "A Minesweeper Game made using JS",
            linkAvailable: true,
            link: "https://imaginedtime.github.io/Minesweeper",
            linkText: "Visit",
            github: "https://github.com/ImaginedTime/Minesweeper",
        },
        {
            img: "./images/sudoku.png",
            alt: "Sudoku generator and solver",
            title: "Sudoku GenSolve",
            type: "Game",
            description: "A Sudoku Generator and solver made using Java",
            linkAvailable: false,
            link: "",
            linkText: "",
            github: "https://github.com/ImaginedTime/Sudoku",
        },
        {
            img: "./images/mask.png",
            alt: "Manga and Anime Society, Kharagpur - Website",
            title: "Mask Website",
            type: "Website",
            description: "A multiple page website made for the MASK Selection",
            linkAvailable: true,
            link: "https://imaginedtime.github.io/MASK-Website",
            linkText: "Visit",
            github: "https://github.com/ImaginedTime/MASK-Website",
        },
        {
            img: "./images/projects.png",
            alt: "More Projects",
            title: "And Many more",
            type: ".......",
            description: "Visit my Github Profile for more",
            linkAvailable: false,
            link: "",
            linkText: "",
            github: "https://github.com/ImaginedTime/",
        },
    ];

    return (
        <div>
            <br id="projects1" />
            <section id="projects" className="projects">
                <h2 className="section-header">My Projects</h2>
                <div className="project-cards">

                    {projectsData.map((project, index) => {
                        return <ProjectCard data={project} key={index} />
                    })}

                </div>
            </section>
        </div>
    )
}
