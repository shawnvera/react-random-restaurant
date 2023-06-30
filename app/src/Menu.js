import React, { useState, useEffect } from "react";
import getData from "./data.js";

export default function Menu(props) {


    const [menu, setMenu] = useState([]);
    let menuArr = Object.entries(menu);

    useEffect(() => {
        setMenu(getData());
    }, [])

    function handleClick() {

    }


    return (
        <>
            <div className="container-fluid">

                <div className="row">


                    {
                        menu.length > 0 ?
                            menu.map((item, index) => {

                                <div className="col-4">
                                    <div className="card">

                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.title}</p>
                                            <button onClick={handleClick} className="btn btn-primary"></button>
                                        </div>
                                    </div>
                                </div>
                            })
                        : <p>works</p>



                    }
                </div>
            </div>
        </>
    )
}