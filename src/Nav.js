import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><b>{props.title}</b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
                        </div>
                    </form>
                </div>
            </div>
        </nav >
    )
}
Nav.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
Nav.defaultProps = {
    title: "Set title here",
    aboutText: "set abouttext here"
}
