import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navigation from "./components/Navigation/Navigation";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";


  

const App = (props: any) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navigation navigationData={props.data.navigationData}/>
        <div className="app-wrapper-content">
          <Route exact path="/profile" render={() => <Main profileData={props.data.profileData}/>} />
          <Route exact path="/dialogs" render={() => <Dialogs dialogsData={props.data.dialogsData}/>} />
          {/* <Route exact path="/news" component={Dialogs} />
        <Route exact path="/music" component={Dialogs} />
        <Route exact path="/settings" component={Dialogs} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
