import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";

// ~~~~~~~~~~~~~~~~~~~~ Render ~~~~~~~~~~~~~~~~~~~ //

 const rerenderTree = (data) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        store={store}
        data={data}
        dispatch={store.dispatch.bind(store)} 
      />
      ,
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderTree(store.getData());

store.subscribe(rerenderTree);