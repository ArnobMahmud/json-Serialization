import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ServerFetch1 = () => {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <ServerFetch1Style>
        <div className="container">
          <div className="card">
            <h1>Server Fetch I (by axios)</h1>
            <div className="card desc row">
              {data?.map((e, i) => {
                return (
                  <>
                    <div className="infocard row">
                      <div className="col-xl-6 col-md-6 col-sm-12">
                        <h5>{e.name}</h5>
                        <h6>@{e.username}</h6>
                        <p>{e.email}</p>
                        <h3>Address :</h3>
                        <p>{e.address.street}</p>
                        <p>{e.address.suite}</p>
                        <p>{e.address.city}</p>
                        <p>{e.address.zipcode}</p>
                      </div>
                      <div className="col-xl-6 col-md-6 col-sm-12">
                        <h3>Phone no : </h3>
                        <p>{e.phone}</p>
                        <h3>Website : </h3>
                        <p>{e.website}</p>
                        <h3>Company : </h3>
                        <p>{e.company.name}</p>
                        <p>{e.company.catchPhrase}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </ServerFetch1Style>
    </>
  );
};
export default ServerFetch1;

const ServerFetch1Style = styled.div`
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
      height: 950px;
    }
    .infocard {
      height: 700px;
    }
  }
`;
