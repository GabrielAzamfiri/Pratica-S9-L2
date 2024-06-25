import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";



class App extends Component {
  state = {
    categoria: "fantasy",
  };
  
  render() {
    // funzione che modifica lo state categoria grazie al eventKey
   const  selectCategory = eventKey => {
    this.setState({ categoria: eventKey })
    };
    return (
      <div className="App">
        {/* do la funzione selectCategory come props cosi da chiamarla dentro TopBar e farle avere eventKey come dato */}
        <TopBar setCategory={selectCategory} />
        <Welcome />
        {/* passo come props lo state.catogoria cosi da avere l'array di film in base alla selezione del dropdown */}
        <AllTheBooks category={this.state.categoria} />
        <MyFooter />
      </div>
    );
  }
}

export default App;
