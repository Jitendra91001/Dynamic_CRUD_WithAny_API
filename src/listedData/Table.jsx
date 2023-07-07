import React, { useReducer } from "react";
import { Edit } from "../Edit/Edit";
import { Delete } from "../Delete/Delete";
import { generateTable } from "./GenrateTable";
// import Create_form from "../create/Create_form";
const Table = ({ alldata }) => {  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            {/* <div className=""><Create_form/></div> */}
            <table className="table table-striped">
              <thead>
                <tr>
                  {alldata.length != 0 &&
                    Object.keys(alldata[0]).map((item, index) => (
                      <>
                        <th key={index}>{item}</th>
                      </>
                    ))}
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {alldata.length != 0 &&
                  alldata.map((item) => (
                    <tr>
                      {Object.values(item).map((item) => {
                        return generateTable(item);
                      })}
                      <td>
                        <Delete deleteID={item.id} />
                      </td>

                      <td>
                        <Edit editId={item.id} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Table;
