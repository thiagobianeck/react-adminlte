import React, {Component} from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Header/>
          <Sidebar/>
          <Content/>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
