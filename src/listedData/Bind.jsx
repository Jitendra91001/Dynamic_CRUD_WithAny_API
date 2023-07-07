import React, { useEffect, useState } from "react"
import { getApi } from "../manageData/getData"
import Table from "./Table"


const Bind=()=>{
    const [alldata,setAllData]=useState([])
    const [render,setRender]=useState(false)

    useEffect(()=>{
        getApi().then(res=>setAllData(Array.isArray(res) ? res : res[Object.keys(res)[0]]))
        setRender(true)
    },[render])

    return(
        <div>
        <Table alldata={alldata}/>
        </div>
    );
}

 export {Bind}