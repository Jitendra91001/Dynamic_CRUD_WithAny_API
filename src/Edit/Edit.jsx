import React, { useState } from "react";
import { Form } from "../Form/Form";

export const Edit = ({ editId }) => {
  const [show, setShow] = useState(false);

  const handleEdit = () => {
    setShow(true);
  };
  return (
    <>
      {show ? <Form id={editId} /> : null}
      <button onClick={handleEdit} className="btn btn-success">
        Edit
      </button>
      
    </>
  );
};
