import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navigation from "./components/Navigation/Navigation";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      <Navigation />
      <div className="app-wrapper-content">
        <Route exact path="/profile" component={Main} />
        <Route exact path="/dialogs" component={Dialogs} />
        <Route exact path="/news" component={Dialogs} />
        <Route exact path="/music" component={Dialogs} />
        <Route exact path="/settings" component={Dialogs} />
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
