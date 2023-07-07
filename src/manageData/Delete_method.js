import { baseUrl } from "./config";

const Delete_method=(id)=>{
    fetch(baseUrl+'/'+id, {
        method: 'DELETE',
      })
      .then(res => console.log(res))
      .then(console.log());
}

export{Delete_method}