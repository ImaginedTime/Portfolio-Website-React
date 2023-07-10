import React from 'react'
import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div>
            <br />
            <footer>
                <div className="container">
                    <div className="social-links">
                        <a href="https://github.com/ImaginedTime/" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100087429944784" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} />

                        </a>
                        <a href="https://instagram.com/uday_srivastava05/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.linkedin.com/in/uday-om-srivastava-69165a256/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                    <div className="demo-links">
                        <p>Copyright &copy; 2023 | All Rights Reserved</p>
                        <p>
                            <a href="#">Privacy Policy</a> |
                            <a href="#">Terms of Service</a>
                        </p>
                    </div>
                </div>
                <a href="#home" className="back-to-top">
                    <FontAwesomeIcon icon={faAngleUp} />
                </a>
            </footer>
        </div>
    )
}
