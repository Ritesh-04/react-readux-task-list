import React from "react";
import ReactDOM from "react-dom";
import AddTask from "./AddTask";
import AllTask from "./AllTask";
import { createStore } from "redux";
import "./styles.css";
import AddTaskReducer from "./reducers/AddTaskReducer";
import { Provider } from "react-redux";

const store = createStore(AddTaskReducer);

function App() {
  return (
    <div className="App">
      <AddTask />
      <br />
      <AllTask />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
