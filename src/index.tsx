import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import data, { addDialogsData, addPostData, subscribe, updateMessageText, updatePostText } from "./redux/state";

// ~~~~~~~~~~~~~~~~~~~~ Render ~~~~~~~~~~~~~~~~~~~ //

 const rerenderTree = (data) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        data={data}
        addPostData={addPostData}
        updatePostText={updatePostText}
        addDialogsData={addDialogsData}
        updateMessageText={updateMessageText}
      />
      ,
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderTree(data);

subscribe(rerenderTree);