import React from "react";
import NavBar from "./NavBar.js"

export default function Header() {
    return (
        <>
            <div className="container-flex">
                <div className="row border border-dark text-center">
                    <div className="col text-center">
                        <p className="text-center fs-1 fw-bold">Lex.Eat.with(friends)</p>
                        <img height="200" width="225" src="https://cdn.pixabay.com/photo/2017/11/11/20/19/dinner-table-2940339_1280.png" />
                    </div>
                </div>
            </div>
            <NavBar />
            
        </>

        
    )
}
