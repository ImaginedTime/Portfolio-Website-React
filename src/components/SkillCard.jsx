import React from 'react'

export default function SkillCard({ data }) {

    const {img, alt, title, experience, description} = data;

    return (
        <div className="skill-card">
            <img src={img} alt={alt} />
            <h3 className="skill-card-title">{title}</h3>
            <p className="skill-card-experience">Experience: <b>{experience}+</b> Years</p>
            <p className="skill-card-description">{description}</p>
            <a href="#" className="skill-card-link">Learn More</a>
        </div>
    )
}
