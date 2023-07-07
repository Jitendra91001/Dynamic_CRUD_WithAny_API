import { baseUrl } from "./config";

const EditData = async (id) => {
   let response=await fetch(baseUrl+'/'+ id)
      return await response.json()
  };
  export { EditData };
  