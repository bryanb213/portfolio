import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide';
import ProgressBar from 'react-bootstrap/ProgressBar';
import me from '../img/me.jpg';


const node = 60;
const net = 50;
const angular = 55;
const react = 45;

const js = 55;
const c = 40;
const es = 40;
const linq = 40;
const html = 70;
const css = 55;

const mongo = 40;
const sql = 40;


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

                                <i class="far fa-check-circle About__icon"></i>

                                <h3 className="About__card-heading">Problem Solver</h3>
                                <p className="About__card-text">I can solve vaugh problems and requirements and break them down step by step to achieve solutions</p>
                            </div>
                            <div className="col-sm-3 my-col">

                                <i class="far fa-folder About__icon"></i>

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
                                <div className="About__my-progress-bar">
                                    <p className="About__card-text">React</p>
                                    <ProgressBar animated now={45} node={react} label={`${react}%`} />
                                </div>


                                <div className="About__my-progress-bar">
                                    <p className="About__card-text">Angular</p>
                                    <ProgressBar animated now={55} node={angular} label={`${angular}%`} />
                                </div>
                            </Zoom>
                        </div>

                        <div className="col my-col">
                            <h3 className="About__card-heading">Back-End</h3>
                            <Zoom right>
                                <div className="About__my-progress-bar">
                                    <p className="About__card-text">Node.Js</p>
                                    <ProgressBar animated now={60} node={node} label={`${node}%`} />
                                </div>
                                <div className="About__my-progress-bar">
                                    <p className="About__card-text">.Net</p>
                                    <ProgressBar animated now={50} net={net} label={`${net}%`} />
                                </div>
                            </Zoom>
                        </div>

                    </div>

                    <div className="row my-row last-row">
                        <div className="col my-col">
                            <h3 className="About__card-heading">Languages</h3>
                            <Zoom left>
                                <div className="About__my-progress-bar">
                                    <p className="About__card-text">Javascript</p>
                                    <ProgressBar animated now={55} node={js} label={`${js}%`} />
                                </div>
                                <div className="About__my-progress-bar">
                                    <p className="About__card-text">ES6</p>
                                    <ProgressBar animated now={40} node={es} label={`${es}%`} />
                                </div>
                                <div className="About__About__my-progress-bar">
                                    <p className="About__card-text">HTML5</p>
                                    <ProgressBar animated now={70} node={html} label={`${html}%`} />
                                </div>
                                <div className="About__my-progress-bar">
                                    <p className="About__card-text">CSS</p>
                                    <ProgressBar animated now={55} node={css} label={`${css}%`} />
                                </div>
                                <div className="About__my-progress-bar">
                                    <p className="About__card-text">C#</p>
                                    <ProgressBar animated now={40} node={c} label={`${c}%`} />
                                </div>
                                <div className="About__my-progAbout__ress-bar">
                                    <p className="About__card-text">LINQ</p>
                                    <ProgressBar animated now={40} node={linq} label={`${linq}%`} />
                                </div>
                            </Zoom>

                        </div>

                        <div className="col my-col">
                            <h3 className="About__card-heading">Database</h3>
                            <Zoom right>
                                <div className="About__my-progress-bar">
                                    <p className="About__card-text">MongoDB</p>
                                    <ProgressBar animated now={40} node={mongo} label={`${mongo}%`} />
                                </div>
                                <div className="About__my-progress-bar">
                                    <p className="About__card-text">MySQL</p>
                                    <ProgressBar animated now={40} net={sql} label={`${sql}%`} />
                                </div>
                            </Zoom>
                        </div>

                    </div>


                </div>
                )
            }
        }
        
export default About