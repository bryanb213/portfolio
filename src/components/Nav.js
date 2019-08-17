import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';



class Nav extends Component {






    render() {
        return (
            <div className="container-fluid navy">
                <div className="row">
                    <Zoom>

                        <ul className="list">
                            <li className="list__li"><a className="list__li--a" href="#home">Home</a></li>
                            <li className="list__li"><a className="list__li--a" href="#about">About</a></li>
                            <li className="list__li"><a className="list__li--a" href="#project">Projects</a></li>
                            <li className="list__li"><a className="list__li--a" href="#contact">Contact</a></li>
                        </ul>

                    </Zoom>
                </div>
            </div>
        )
    }
}

export default Nav