import React from "react";

const Table = ({ th, td }) => {
  return (
    <div className="overflow-x-auto overflow-y-hidden">
      <table className="table-auto w-full">
        <thead>{th}</thead>
        <tbody>{td}</tbody>
      </table>
    </div>
  );
};

export default Table;
