import React from 'react'
import '../styles/home.css'

export default function Home() {
    return (
        <section id="home">
            <div className="part1">
                <div className="home-container">
                    <h1>Welcome to My Portfolio Website</h1>
                    <p>Here I showcase my skillsets and facilities</p>
                    <a href="#skills" className="btn">See My Skills</a>
                </div>
            </div>

            <div className="part2">
                <div className="home-left">
                    <img src="./images/photo.jpg" alt="Portfolio Website" />
                </div>
                <div className="home-right">
                    <h1>Hello there...</h1>
                    <p>I am Uday Srivastava, an Undergrad Student at IIT KGP, who is highly curious about science and technology, and am willing to grow
                        further into it.
                        I am motivated to learn new skills, and make them a part of my daily life. I have many projects, the
                        inspiration of
                        which was my curiousity. To learn more about me, scroll down to view more.
                    </p>
                </div>
            </div>
        </section>
    )
}
