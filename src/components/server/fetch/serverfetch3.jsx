import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ServerFetch3 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/comments";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`This is an HTTP error: The status is ${res.status}`);
        }
        let actualData = await res.json();
        setData(actualData);

        console.log(actualData);
        setError(null);
      } catch (err) {
        console.log(err.message);
        setData(null);
      }
    };
    getData();
  }, []);

  return (
    <>
      <ServerFetch3Style>
        <div className="container">
          <div className="card">
            <h1>Server Fetch (by fetch)</h1>
            <div className="card desc row">
              {data?.map((e, i) => {
                return (
                  <>
                    <div className="col-xl-5 infocard">
                      <h5>{e.name}</h5>
                      <p>{e.email}</p>
                      <p>{e.body}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </ServerFetch3Style>
    </>
  );
};
export default ServerFetch3;
const ServerFetch3Style = styled.div`
  .card {
    overflow-y: hidden;
    height: 650px;
  }
  .infocard {
    height: 400px;
  }
  @media (max-width: 767px) {
    .card {
      overflow-y: hidden;
      height: 600;
    }
    .infocard {
      height: 400px;
    }
  }
`;
