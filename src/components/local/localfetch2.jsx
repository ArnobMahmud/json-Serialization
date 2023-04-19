import React from "react";
import data from "../../json/data2.json";
import styled from "styled-components";

const Localfetch2 = () => {
  return (
    <>
      <LocalFetch1Style>
        <div className="container">
          <div className="card">
            <h1>Local Data II</h1>
            <div className="card desc row">
              <div className="infocard">
                <h3>Social medias : </h3>
                {data.SocialMedias.map((e, i) => {
                  return (
                    <>
                      <div>
                        <p>{e}</p>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="infocard">
                {data.Experiences.map((f, j) => {
                  return (
                    <>
                      <div>
                        <h4>{f.companyName}</h4>
                        <p>
                          {f.roles.map((g, k) => {
                            return g.title;
                          })}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="infocard">
                {data.Skills.map((x, l) => {
                  return (
                    <>
                      <div>
                        <h5>{x.Area}</h5>

                        {x.SkillSet.map((y, m) => {
                          return (
                            <>
                              <p>{y.Name}</p>
                            </>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </LocalFetch1Style>
    </>
  );
};
export default Localfetch2;

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
      height: 700px;
    }
    .infocard {
      height: 450px;
    }
  }
`;
