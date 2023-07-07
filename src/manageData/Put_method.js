import { baseUrl } from "./config";

const PutData = async (id,data) => {
  console.log(data)
  await fetch(baseUrl +'/'+ id, {
    method: "PUT" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) =>console.log(res))
};

export { PutData };
