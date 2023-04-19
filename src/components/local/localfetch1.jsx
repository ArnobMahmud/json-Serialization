import React from "react";
import data from "../../json/data1.json";
import styled from "styled-components";
const LocalFetch1 = () => {
  return (
    <>
      <LocalFetch1Style>
        <div className="container">
          <div className="card">
            <h1>Local Data I</h1>
            <div className="card desc row">
              {data.map((e, i) => {
                return (
                  <>
                    <div className="col-xl-6 infocard">
                      <h5>{e.title}</h5>
                      <p>{e.body}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </LocalFetch1Style>
    </>
  );
};

export default LocalFetch1;

const LocalFetch1Style = styled.div`
  .card {
    overflow-y: hidden;
    height: 700px;
  }
  .infocard {
    height: 450px;
  }
  @media (max-width: 767px) {
    .card {
      overflow-y: hidden;
      height: 500px;
    }
    .infocard {
      height: 250px;
    }
  }
`;
