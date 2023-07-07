const postData=async (baseUrl,endPoint,data)=>{
    let response=await fetch(baseUrl+endPoint,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return response.json()
}

export {postData}