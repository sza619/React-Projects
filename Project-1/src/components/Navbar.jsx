import React from "react"
import _IMAGES from '../images/images'

export default function Navbar() {
    return (
        <header>
            <nav className="nav">
                <img src={_IMAGES.image1} className="nav-logo" alt="logo"/>
                <h3>ReactFacts</h3>
                <h4>Project 1</h4>
            </nav>
        </header>
    )
}