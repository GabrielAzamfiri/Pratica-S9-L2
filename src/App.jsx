import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";


function App() {
  return <div className="App">
    <TopBar/>
    <Welcome/>
    <AllTheBooks />
    <MyFooter/>
  </div>;
}

export default App;
