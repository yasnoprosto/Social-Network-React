import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navigation from "./components/Navigation/Navigation";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props: any) => {
  // debugger;
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navigation navigationData={props.state.navigationData} />
        <div className="app-wrapper-content">
          <Route
            exact
            path="/profile"
            render={() => {
              return (
                  <Profile
                      store={props.store}
                  />
              );
            }}
          />
          <Route
            exact
            path="/dialogs"
            render={() => (
              <DialogsContainer store={props.store} />
            )}
          />
          {/* <Route exact path="/news" component={Dialogs} />
        <Route exact path="/music" component={Dialogs} />
        <Route exact path="/settings" component={Dialogs} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
