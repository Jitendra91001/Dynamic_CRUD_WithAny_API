import React, { useState } from "react";
import { Input } from "../Form_Component/Input";

export const GenerateFied = ({ data, setData }) => {
  // const changeData = (e) => {
  //   setData((prev) => {
  //     return { ...prev, [e.target.name]: e.target.value };
  //   });

  // };

  function changeData(e) {
    let value = e.target.name;
    if (data.hasOwnProperty(value)) {
      return setData({ ...data, [e.target.name]: e.target.value });
    }
    else{
      Object.values(data).map((item,index)=>{
        console.log(item[value])
         if(item[value]!==undefined){
          return setData({...data,[Object.keys(data)[index]]:{...data[Object.keys(data)[index]],[value]:e.target.value}})
        }
      })
    }
  }
  const GenerateFied = (data) => {
    return Object.keys(data).map((ele, index) => {
      if (typeof data[ele] == "object") {
        return GenerateFied(data[ele]);
      } else {
        return (
          <div key={index}>
            <label>{ele}</label>
            <br />
            <Input
              type={"text"}
              method={changeData}
              classname={"form-control mb-2"}
              value={data[ele]}
              name={ele}
            />
          </div>
        );
      }
    });
  };
  return <>{GenerateFied(data)}</>;
};
