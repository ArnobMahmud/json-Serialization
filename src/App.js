import LocalFetch from "./components/local/localfetch";
import ServerFetch1 from "./components/serverfetch1";
import ServerFetch2 from "./components/serverfetch2";

const App = () => {
  return (
    <div className="App">
      <div className="row">
        <div className="col-xl-5 col-md-6 col-sm-12">
          <LocalFetch />
        </div>
        <div className="col-xl-7 col-md-6 col-sm-12">
          <ServerFetch1 />
          <ServerFetch2 />
        </div>
      </div>
    </div>
  );
};

export default App;
