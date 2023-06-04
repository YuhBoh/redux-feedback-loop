import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// REDUCERS HERE
const feeling = (state = {}, action) => {
  if (action.type === "ADD_FEELINGS") {
    const copyofState = { ...state };
    copyofState.feelingScore = action.payload;
    return copyofState;
  } else if (action.type === "CLEAR_DATA") {
    return {};
  }
  return state;
};

const understanding = (state = {}, action) => {
  if (action.type === "ADD_UNDERSTANDING") {
    const copyofState = { ...state };
    copyofState.understandingScore = action.payload;
    return copyofState;
  } else if (action.type === "CLEAR_DATA") {
    return {};
  }
  return state;
};

const support = (state = {}, action) => {
  if (action.type === "ADD_SUPPORT") {
    const copyofState = { ...state };
    copyofState.supportScore = action.payload;
    return copyofState;
  } else if (action.type === "CLEAR_DATA") {
    return {};
  }
  return state;
};

const comments = (state = {}, action) => {
  if (action.type === "ADD_COMMENTS") {
    const copyofState = { ...state };
    copyofState.comment = action.payload;
    return copyofState;
  } else if (action.type === "CLEAR_DATA") {
    return {};
  }
  return state;
};

//STORE HERE
const feedbackStore = createStore(
  combineReducers({
    feeling,
    understanding,
    support,
    comments,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={feedbackStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
