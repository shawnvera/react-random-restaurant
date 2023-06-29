import axios from "axios";

export default async function GetData() {
  let response = await axios.get(`https://www.jsonkeeper.com/b/MDXW/`);
  return response.data;
}              