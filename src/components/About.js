import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide';

import me from '../img/me.jpg';



class About extends Component {
    render() {
        return (
            <div className="container-fluid my-container About" id="about">
                <div className="row  my-row">
                    <div className="col-md-12  my-col">
                        <Fade left><h1 className="heading">About</h1></Fade>
                    </div>

                </div>

                <div className="row my-row last-row">
                    <LightSpeed left>

                        <div className="col-sm-3 my-col">


                            <i class="far fa-laugh-beam About__icon"></i>

                            <h3 className="About__card-heading">Intuitive</h3>
                            <p className="About__card-text">I love laughing at myself on how dumb code makes me feel It makes me want to push myself more</p>
                        </div>
                        <div className="col-sm-3 my-col">

                            <i class="fas fa-laptop-code About__icon"></i>

                            <h3 className="About__card-heading">Hungry</h3>
                            <p className="About__card-text">After finishing college and joining a 3-month coding bootcamp I was left wanting more knowledge about all the cool things code can do</p>
                        </div>
                    </LightSpeed>

                    <LightSpeed right>

                        <div className="col-sm-3 my-col">

                            <i className="far fa-check-circle About__icon"></i>

                            <h3 className="About__card-heading">Problem Solver</h3>
                            <p className="About__card-text">I can solve vaugh problems and requirements and break them down step by step to achieve solutions</p>
                        </div>
                        <div className="col-sm-3 my-col">

                            <i className="far fa-folder About__icon"></i>

                            <h3 className="About__card-heading">Organizer</h3>
                            <p className="About__card-text">I can self manage, work to deadlines, organize projects and present well structured and complete deliverables</p>
                        </div>
                    </LightSpeed>
                </div>

                <div className="row my-row last-row">

                    <Slide bottom>
                        <div className="col justify-content-center my-col">


                            <div className="About__pic">
                                <img className="About__pic--me" src={me} alt="Bryan" />
                            </div>


                            <h3 className="About__card-heading">This guy...</h3>
                            <p className="About__card-text">My name is Bryan Blancas, I'm a Full-stack Developer in Chicago IL, I have a serious passion for code and how things work behind the scenes <br /> So let's get to work!</p>
                        </div>
                    </Slide>
                </div>


                <div className="row my-row">
                    <div className="col my-col">
                        <h3 className="About__card-heading">Front-End</h3>
                        <Zoom left>
                            <ul className="list-group list-group-flush my-list">
                                <li className="list-group-item"> Reactjs</li>
                                <li className="list-group-item"> Angular</li>

                            </ul>
                        </Zoom>
                    </div>

                    <div className="col my-col">
                        <h3 className="About__card-heading">Back-End</h3>
                        <Zoom right>
                            <ul className="list-group list-group-flush my-list">
                                <li className="list-group-item">Nodejs</li>
                                <li className="list-group-item">.Net WebAPI MVC</li>
                            </ul>
                        </Zoom>
                    </div>

                </div>

                <div className="row my-row last-row">
                    <div className="col my-col">
                        <h3 className="About__card-heading">Languages</h3>
                        <Zoom left>
                            <ul className="list-group list-group-flush my-list">
                                <li className="list-group-item">JS</li>
                                <li className="list-group-item">C#</li>
                                <li className="list-group-item">SCSS, CSS</li>
                                <li className="list-group-item">Typescript</li>

                            </ul>

                        </Zoom>

                    </div>

                    <div className="col my-col">
                        <h3 className="About__card-heading">Database</h3>
                        <Zoom right>
                            <ul className="list-group list-group-flush my-list">
                                <li className="list-group-item">MongoDB</li>
                                <li className="list-group-item">SQL</li>
                                <li className="list-group-item">Firebase</li>

                            </ul>
                        </Zoom>
                    </div>

                </div>


            </div>
        )
    }
}

export default About