import React from 'react'
import SkillCard from './SkillCard'
import '../styles/skillsAndProjects.css'

export default function Skills() {

    const skillsData = [
        {
            img: "./images/html.svg",
            alt: "HTML",
            title: "HTML",
            experience: "3",
            description: "For the frontend markup part of Web Development",
        },
        {
            img: "./images/css.svg",
            alt: "CSS",
            title: "CSS",
            experience: "3",
            description: "For the frontend styling part of Web Development",
        },
        {
            img: "./images/js.svg",
            alt: "JS",
            title: "JS",
            experience: "3",
            description: "For the frontend functionality part of Web Development",
        },
        {
            img: "./images/java.svg",
            alt: "Java",
            title: "Java",
            experience: "5",
            description: "Mostly I use Java for Competitive Programming, and have been using it for about 5 year or so",
        },
        {
            img: "./images/python.svg",
            alt: "Python",
            title: "Python",
            experience: "2",
            description: "I use python for Game Development and general purpose programming",
        },
        {
            img: "./images/c-and-cpp.png",
            alt: "C/C++",
            title: "C/C++",
            experience: "2",
            description: "I use C/C++ for Competitive Programming, and have been using it for about 2 year or so",
        },
        {
            img: "images/react-js.png",
            alt: "React JS",
            title: "React JS",
            experience: "1",
            description: "I have been using React JS for about a year now, and have made many projects using it",
        },
        {
            img: "images/git-github.png",
            alt: "Git/Github",
            title: "Git/Github",  
            experience: "1",
            description: "I use git/github for the version control and collaboration for my projects",
        },
    ]

    return (
        <div>
            <br id="skills1" />
            <section id="skills" className="skills">
                <h2 className="section-header">My Skills</h2>
                <div className="skill-cards">

                    {skillsData.map((skill, index) => {
                        return <SkillCard data={skill} key={index} />
                    })}

                </div>
            </section>
        </div>
    )
}
