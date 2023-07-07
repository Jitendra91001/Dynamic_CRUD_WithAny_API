import { baseUrl } from "./config";

const getApi= async ()=>{
    let response = await fetch(baseUrl)
    return await response.json();
}


export {getApi}

