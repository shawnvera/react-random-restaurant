import React from "react";

export default function NavBar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <a className="navbar-brand text-center" href="./index.js">Lex.Eat.with(friends)</a>
                  
                  
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="./index.js">Home</a>
                            </li> <br />
                            <li className="nav-item">
                                <a className="nav-link" href="./index.js">Lunch</a>
                            </li> <br />
                            <li className="nav-item">
                                <a className="nav-link" href="./index.js">Dinner</a>
                            </li> <br />
                            <li className="nav-item">
                                <a className="nav-link" href="./index.js">About Us</a>
                            </li><br />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}