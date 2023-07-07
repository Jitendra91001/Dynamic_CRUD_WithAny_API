import React, { useState } from 'react'
import { Form } from '../Form/Form';

const Create_form = () => {
    const [show,setShow]=useState(false)
    const handleData=()=>{
        setShow(true)
    }
  return (
    <>
    {show?<Form/>:null}
    <button className='btn btn-success p-2 m-3' onClick={handleData}>ADD data</button>
    </>
  )
}

export default Create_form;