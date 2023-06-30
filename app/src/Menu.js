import React, { useState, useEffect } from "react";
import getData from "./data.js";

export default function Menu(props) {


    const [menu, setMenu] = useState([]);
    let menuArr = Object.entries(menu);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            setMenu(data);
        }
        fetchData();
        return () => {

        }
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
                                return (
                                    <>
                                        <div className="col-xs-4">
                                            <h5 className="card-title">{item.title} ${item.price}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <button onClick={handleClick} className="btn btn-primary">Add to cart</button>
                                        </div>
                                
                                    
                                    </>
                            )})
                : <p>works</p>



                    }
            </div>
        </div >
        </>
    )
}