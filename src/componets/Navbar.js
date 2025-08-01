import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/" style={{ fontWeight: "600" }}>NEWS</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ color: "#bbb" }}>
                                <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/general">Home</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/business">Business</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/health">Health</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/science">Science</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/sports">Sports</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/technology">Technology</NavLink></li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
