import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; 
import store from "./redux/reduxStore";

// ~~~~~~~~~~~~~~~~~~~~ Render ~~~~~~~~~~~~~~~~~~~ //

 const rerenderTree = (state) => {
  // debugger
  ReactDOM.render(
    <BrowserRouter>
      <App
        store={store}
        state={state}
        dispatch={store.dispatch.bind(store)} 
      />
      ,
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderTree(state); 
});