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
                            
                            <form action="https://formspree.io/blancasbryan@gmail.com" method="POST">

                                <div class="form-group">
                                    <label className="contact__label" for="exampleInputPassword1">Name</label>
                                    <input type="text" required minLength="2" name="name" class="form-control" id="exampleInputPassword1" placeholder="Enter name" />
                                </div>
                                <div class="form-group">
                                    <label className="contact__label" for="exampleInputEmail1">Email</label>
                                    <input type="email" required name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div >
                                    <label className="contact__label" for="exampleFormControlTextarea1">Message</label>
                                    <textarea placeholder="Enter message" minLength="2" required class="form-control" id="exampleFormControlTextarea1" rows="3" type="text" name="message"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary contact__button">Submit</button>
                            </form>
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
                            <p>BryanBlancas&copy;2019</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;