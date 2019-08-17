import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Carousel from 'react-bootstrap/Carousel';
import spaceninjas from '../img/spaceninjas.png';
import comingsoon from '../img/comingsoon.jpg';

class Projects extends Component {
  render() {
    return (
      <div className="container-fluid my-container project" id="project">
        <div className="row my-row">
          <div className="col-md-12 my-col">
            <Fade left><h1 className="heading">Fun Times</h1></Fade>
          </div>
        </div>
        <div className="row  my-row last-row justify-content-center">
          <div className="col-sm-10  my-col">
          <Flip top>
            <Carousel>
              <Carousel.Item>
                <a href="http://www.nedelkovskialeks.com/spaceninjas/">
                  <img
                    className="d-block w-100 h-100"
                    src={spaceninjas}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Space Ninjas</h3>
                    <p>C#/Unity project I did with 3 colleagues at my coding bootcamp</p>
                    <p>To learn OOP in C#</p>

                  </Carousel.Caption>
                </a>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src={comingsoon}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Coming Soon</h3>
                  <p>...</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src={comingsoon}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Coming Soon</h3>
                  <p>...</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </Flip>
          </div>
        </div>

      </div>
    )
  }
}
export default Projects

