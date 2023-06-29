import React, {useState, useEffect} from "react";
import getData from "./data.js";

export default function Menu () {


const [data, setData] = useState("");
setData(getData());


//     function displayMenu () {
   
    //    }


    return (
<>
        <div className="card">
                <img height="100" width="125" src="https://cdn.pixabay.com/photo/2017/11/11/20/19/dinner-table-2940339_1280.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>

<li>
  
</li>
</>
    )
}