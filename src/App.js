import Footer from "./components/includes/footer";
import LocalFetch1 from "./components/local/localfetch1";
import LocalFetch2 from "./components/local/localfetch2";
import ServerFetch3 from "./components/server/fetch/serverfetch3";
import ServerFetch1 from "./components/server/serverfetch1";
import ServerFetch2 from "./components/server/serverfetch2";

const App = () => {
  return (
    <div className="App">
      <div className="row">
        <div className="col-xl-5 col-md-6 col-sm-12">
          <LocalFetch1 />
          <LocalFetch2 />
        </div>
        <div className="col-xl-7 col-md-6 col-sm-12">
          <ServerFetch1 />
          <ServerFetch2 />
          <ServerFetch3 />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
