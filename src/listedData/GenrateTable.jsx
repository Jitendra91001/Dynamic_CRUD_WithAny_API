export let generateTable = (value) => {
  if (typeof value == "string" && value.match(/(jpg|png|gif|bmp|jpeg)/gi)) {
    return (
      <td>
        <img src={value} height="100px" width="200"/>
      </td>
    );
  } else if (
    typeof value == "number" ||
    (typeof value == "string" && !value.match(/(jpg|png|gif|bmp|jpeg)/gi))
  ) {
    return <td>{value}</td>;
  } else if (typeof value == "object") {
    return (
      <td>
        <table className="table table-striped" style={{ textAlign: "center" }}>
          <tr>
            <th>
              {Object.keys(value).map((item, index) => {
                return generateTable(item);
              })}
            </th>
          </tr>
          <tr>
            <td>
              {Object.values(value).map((item, index) => {
                return generateTable(item);
              })}
            </td>
          </tr>
        </table>
      </td>
    );
  } else if (Array.isArray(value)) {
    return value.map((item) => {
      return <td>{generateTable(item)}</td>;
    });
  } else if (typeof value == "boolean") {
    return <td>{value + ""}</td>;
  } else {
    return Object.keys(value).map((item) => {
      if (typeof value[item] === "object") {
        return Object.keys(value).map((elem) => {
          return generateTable(elem);
        });
      }
    });
  }
};
