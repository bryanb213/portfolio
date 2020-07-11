import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';



class Contact extends Component {
    render() {
        return (
            <div className="container-fluid my-container contact" id="contact">
                <div className="row my-row">
                    <div className="col-md-12 my-col">
                        <Fade left><h1 className="heading">Contact</h1></Fade>
                    </div>

                </div>
                <div className="row my-row justify-content-center">
                    <div className="col-md-5  my-col">
                        <div>
                        <Bounce top>
                            <h2 className="contact__heading">Got any questions or wish to get in touch?</h2>
                        
                                <a className="email" href="mailto:blancasbryan@gmail.com">Shoot me a message</a>
                            
                            </Bounce>
                            <div>
                            <ul className="links">
                            <Bounce left>
                                <li className="links__icon">
                                    <a className="links__icon--1" href="https://www.linkedin.com/in/bryanblancas/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                </li>
                            </Bounce>
                            <Bounce right>
                                <li className="links__icon">
                                    <a className="links__icon--2" href="https://github.com/bryanb213" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
                                </li>
                                </Bounce>
                            </ul>

                            </div>
                            <p>BryanBlancas&copy;2020</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;