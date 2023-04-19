import React from "react";
import data from "../../json/data.json";

const LocalFetch = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Local Data</h1>
          <br></br>
          {data.map((e, i) => {
            return (
              <>
                <h5>{e.title}</h5>
                <p>{e.body} </p>
              </>
            );
          })}{" "}
        </div>
      </div>
    </>
  );
};

export default LocalFetch;
