import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ServerFetch2 = () => {
  const [data, setData] = useState([]);
  const url = "https://dummyjson.com/quotes";

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <ServerFetch2Style>
        <div className="container">
          <div className="card">
            <h1>Server Fetch II (by axios)</h1>
            <div className="card desc row">
              {data.quotes?.map((e, i) => {
                return (
                  <>
                    <div className="col-xl-4 infocard">
                      <p>{e.quote}</p>
                      <h6>
                        ~<i>{e.author}</i>
                      </h6>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </ServerFetch2Style>
    </>
  );
};
export default ServerFetch2;

const ServerFetch2Style = styled.div`
  .card {
    overflow-y: hidden;
    height: 450px;
  }
  .infocard {
    height: 200px;
  }
  @media (max-width: 767px) {
    .card {
      overflow-y: hidden;
      height: 400;
    }
    .infocard {
      height: 230px;
    }
  }
`;