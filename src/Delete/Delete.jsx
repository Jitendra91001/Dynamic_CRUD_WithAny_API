import React from 'react'
import { baseUrl } from '../manageData/config'
import { Delete_method } from '../manageData/Delete_method'

export const Delete = ({deleteID}) => {

function handleDelete()
{
    if(confirm("Are you sure")){
          Delete_method(deleteID)
    }
    window.location.reload()
}
  return (
    <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
  )
}
