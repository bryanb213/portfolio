import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

import Ecomm from '../img/Ecomm.png';
import devF from '../img/devF.png';
import recipeSite from '../img/recipeSite.png';


class Projects extends Component {
  render() {
    return (
      <div>
        <section id="gallery" class="text-center py-5">
          <div className="container-fluid">
            <h2 className="h1-responsive font-weight-bold mb-5" style={{'font-size': '50px'}}>Projects</h2>
            <div className="row">
                <div class="col-md-4">
                <Fade>
                <figure>
                    <a href="https://uptownclothingstore.netlify.com/"
                      data-size="1600x1067" target="_blank">
                      <img src={Ecomm}
                        className="img-fluid z-depth-1-half" />
                    </a>
                    <p style={{'font-size': '15px'}}>React, Firebase, SCSS E-commerce project</p>
                  </figure>
                  </Fade>
                </div>
                <div className="col-md-4">
                <Fade>
                <figure>
                    <a href="https://polar-eyrie-08421.herokuapp.com/"
                      data-size="1600x1067" target="_blank">
                      <img src={devF}
                        className="img-fluid z-depth-1-half" />
                    </a>
                    <p style={{'font-size': '15px', 'margin-top':'15px'}}>MERN CRUD project for developers to show off skills</p>
                  </figure>
                  </Fade>
                </div>
                <div className="col-md-4">
                <Fade>
                <figure>
                    <a href="https://angularrecipe-b5d1c.web.app/recipes"
                      data-size="1600x1067" target="_blank">
                      <img src={recipeSite}
                        className="img-fluid z-depth-1-half" />
                    </a>
                    <p style={{'font-size': '15px', 'margin-top':'15px'}}>Angular Firebase app to add and edit recipes</p>
                  </figure>
                  </Fade>
                </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Projects

