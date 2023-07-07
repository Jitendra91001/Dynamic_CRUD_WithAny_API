import React, { useEffect, useState } from "react";
import { EditData } from "../manageData/Edit";
import { Button } from "../Form_Component/Button";
import { PutData } from "../manageData/Put_method";
import { GenerateFied } from "./GenerateFied";

export const Form =({id})=> {
  const [data, setData] = useState({});
  const[show,setShow]=useState(true)
  const[updation,setUpdation]=useState("update")
  useEffect(() => {
    EditData(id).then((res) => setData({...res}));
  }, []);
  const updateData = (e) => {
    e.preventDefault();
    PutData(id, data);
    setShow(false)
  };
  return (
    <>
      {show ? <form style={{ position: "absolute", top: "0", left: "25%" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-10 mx-auto offset-2 mt-3">
              <div className="card" style={{ width: "600px" }}>
                <div className="card-header">
                  <h1>Form</h1>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="list-input-group">
                        {data.length != 0 && <GenerateFied data={data} setData={setData}/>}
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    {/* <button className="btn btn-warning">Update</button> */}
                    <Button
                      value={"update"}
                      method={updateData}
                      classname={"btn btn-warning"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>:null
}   
      
    </>
  );
}
