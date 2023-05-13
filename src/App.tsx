import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navigation from "./components/Navigation/Navigation";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
  

const App = (props: any) => {
  // debugger
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navigation navigationData={props.data.navigationData}/>
        <div className="app-wrapper-content">
          <Route exact path="/profile" render={() => <Profile profileData={props.data.profileData} addPostData={props.addPostData} updatePostText={props.updatePostText}/>} />
          <Route exact path="/dialogs" render={() => <Dialogs dialogsData={props.data.dialogsData} addDialogsData={props.addDialogsData} updateMessageText={props.updateMessageText}/>} />
          {/* <Route exact path="/news" component={Dialogs} />
        <Route exact path="/music" component={Dialogs} />
        <Route exact path="/settings" component={Dialogs} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
