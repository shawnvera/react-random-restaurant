import axios from "axios";
import React, { useState, useEffect } from "react";


export default async function getData() {

  const [data, setData] = useState("");

  useEffect(() => {
    setData(response.data);
  }, []);

  let response = await axios.get(`https://www.jsonkeeper.com/b/MDXW`);
  return response.data;
}              