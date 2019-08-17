import React, { Component } from 'react';
import Particles from 'react-particles-js';

const particleOpt =
{
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
}




class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="particles" id="home">
                        <h1 className="particles__main-header">Hello! I'm <span>Bryan Blancas</span>, I'm a <span>web developer.</span></h1>
                        <Particles params={particleOpt} />
                    </div>
                </div>
            </div>
        )
    }
}



export default Header;