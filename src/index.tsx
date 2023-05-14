import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/state";

// ~~~~~~~~~~~~~~~~~~~~ Render ~~~~~~~~~~~~~~~~~~~ //

 const rerenderTree = (data) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        data={store.getData()}
        addPostData={store.addPostData}
        updatePostText={store.updatePostText}
        addDialogsData={store.addDialogsData}
        updateMessageText={store.updateMessageText}
      />
      ,
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderTree(store.getData());

store.subscribe(rerenderTree);