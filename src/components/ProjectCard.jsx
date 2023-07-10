import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function ProjectCard({ data }) {

    const { img, alt, title, type, description, linkAvailable, link, linkText, githubLink } = data;

    return (
        <div className="project-card">
            <img src={img} alt={alt} />
            <h3 className="project-card-title">{title}</h3>
            <p className="project-card-type">{type}</p>
            <p className="project-card-description">{description}</p>

            {linkAvailable && <a href={link} target="_blank" className="project-card-link">
                <span>{ linkText } </span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>}

            <a href={githubLink} target="_blank" className="project-card-link">
                <span>Open on </span>
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    )
}
