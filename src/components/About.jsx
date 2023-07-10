import React from 'react'
import '../styles/about.css'

export default function About() {
    return (
        <div>
            <br id="about-me1" />
            <section id="about-me">
                <h1 className="section-header">About Me</h1>
                <div className="about-container">
                    <div className="about-stats">
                        <h2>My Stats</h2>
                        <p><b><span className="animate">5</span>+</b> Years of Experience</p>
                        <p><b><span className="animate">20</span>+</b> Projects</p>
                        <p><b><span className="animate">100</span>+</b> Smaller Projects</p>
                        <p><b><span className="animate">2</span> star</b> coder on CodeChef</p>
                        <p><b><span className="animate">200</span>+</b> Questions on LeetCode</p>
                    </div>
                    <div className="about-achievements">
                        <h2>My Education</h2>
                        <ul>
                            <li>St. Mary's School ICSE and ISC Board</li>
                            <li>Student at IIT Kharagpur</li>
                            <li>Many Online Courses, and many courses on Youtube</li>
                        </ul>
                    </div>
                    <div className="about-achievements">
                        <h2>My Achievements</h2>
                        <ul>
                            <li>Many successfully deployed Projects</li>
                            <li>JEE Advanced 2022 <br /> AIR-4176</li>
                            <li>JEE Mains 2022 <br /> AIR-9111</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
