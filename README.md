# json Serialization

Json namespace provides functionality for serializing to and deserializing from JavaScript Object Notation (JSON). Serialization is the process of converting the state of an object, that is, the values of its properties, into a form that can be stored or transmitted.

[![](https://img.shields.io/badge/License-MIT-critical?style=plastic&logo=appveyor&logoColor=a70023&labelColor=lightblue&color=471e61)](https://github.com/ArnobMahmud/Weather-Web-App/blob/master/LICENSE)&nbsp;
[![developed-by-arnob](https://img.shields.io/badge/Developed%20by-Arnob%20Mahmud-1f425f.svg?style=plastic&logo=visual-studio-code&logoColor=007ACC&labelColor=beb4ab)](https://github.com/ArnobMahmud/)&nbsp;
[![made-with-node](https://img.shields.io/badge/Made%20with-NodeJs-1f425f.svg?style=plastic&logo=Node.Js&color=e1d1eb&logoColor=faed3e&labelColor=339933)](https://nodejs.org/en/)&nbsp;
[![Netlify Status](https://api.netlify.com/api/v1/badges/87105105-5b1b-4eef-916f-016b93fe19b2/deploy-status)](https://app.netlify.com/sites/jsonserializationtest/deploys)

![1](https://user-images.githubusercontent.com/60808266/233086089-4a320a5b-92a6-46a0-82a7-cbcf05eac277.PNG) <br> <br> <br>
![2](https://user-images.githubusercontent.com/60808266/233086078-132a8524-c308-4f98-9daf-4473b79d112c.PNG)

### `License`

MIT License

Copyright (c) 2023 Arnob Mahmud

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

**1. `data.json` file**

```json
{
  "SocialMedias": [
    "https://github.com/",
    "https://www.linkedin.com/",
    "https://www.facebook.com/"
  ],
  "Experiences": [
    {
      "companyName": "Demo1 Technologies",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      "url": "https://www.google.com/",
      "roles": [
        {
          "title": "Full Stack Developer",
          "description": "Built and updated various Chrome Extensions.",
          "startDate": "2017-01-01",
          "endDate": "2017-05-01",
          "location": "New York, USA"
        }
      ]
    },
    {
      "companyName": "Demo2 Technologies",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      "url": "https://www.google.com/",
      "roles": [
        {
          "title": "UI Designer",
          "description": "Design user-fridendly web page",
          "startDate": "2016-05-01",
          "endDate": "2016-09-01",
          "location": "Beijing, China"
        }
      ]
    }
  ],
  "Skills": [
    {
      "Area": "Programming Language",
      "SkillSet": [
        {
          "Name": "Java",
          "Hot": true
        },
        {
          "Name": "C#",
          "Hot": false
        },
        {
          "Name": "Python",
          "Hot": false
        }
      ]
    },
    {
      "Area": "Web-Based Application Development",
      "SkillSet": [
        {
          "Name": "JavaScript (ES5, ES6)",
          "Hot": true
        },
        {
          "Name": "TypeScript",
          "Hot": false
        },
        {
          "Name": "HTML5",
          "Hot": true
        },
        {
          "Name": "CSS (SCSS/SASS)",
          "Hot": true
        },
        {
          "Name": "React",
          "Hot": true
        }
      ]
    }
  ]
}
```

**2.A Link `data.json` file**

```js
import data from "../../json/data2.json";
```

**2.B Integration**

```js
<h3>Social medias : </h3>;
{
  data.SocialMedias.map((e, i) => {
    return (
      <>
        <div>
          <p>{e}</p>
        </div>
      </>
    );
  });
}

{
  data.Experiences.map((f, j) => {
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
  });
}

{
  data.Skills.map((x, l) => {
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
  });
}
```

**3.A Import Axios**

```js
import React, { useEffect, useState } from "react";
import axios from "axios";
```

```js
const [data, setData] = useState([]);
const url = "https://jsonplaceholder.typicode.com/users";

useEffect(() => {
  axios.get(url).then((res) => {
    setData(res.data);
    console.log(res.data);
  });
}, []);
```

**3.B json**

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  }
]
```

**3.C Fetch**

```js
{
  data?.map((e, i) => {
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
  });
}
```

**4. Fetch method**

```js
import React, { useEffect, useState } from "react";

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
```

```json
[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    "postId": 1,
    "id": 4,
    "name": "alias odio sit",
    "email": "Lew@alysha.tv",
    "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
  },
  {
    "postId": 1,
    "id": 5,
    "name": "vero eaque aliquid doloribus et culpa",
    "email": "Hayden@althea.biz",
    "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
  }
]
```

```js
{
  data?.map((e, i) => {
    return (
      <>
        <div className="col-xl-5 infocard">
          <h5>{e.name}</h5>
          <p>{e.email}</p>
          <p>{e.body}</p>
        </div>
      </>
    );
  });
}
```
