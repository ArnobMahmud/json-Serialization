import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <div className="container">
        <div className="card">
          <h1>Server Fetch II (by axios)</h1>
          {data.quotes?.map((e, i) => {
            return (
              <>
                <div className="infocard">
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
    </>
  );
};
export default ServerFetch2;
