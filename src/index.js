import React from "react";
import ReactDOM from "react-dom";
import ReactTEST from "./reactTest";

//프로젝트에 리덕스 적용하기
import { Provider } from "react-redux"; //Provider을 통해 리액트 프로젝트에서 리덕스를 적용할 수있다.
import { createStore } from "redux"; //store 생성하는 함수

ReactDOM.render(
  <React.Fragment>
    <ReactTEST />
  </React.Fragment>,
  document.getElementById("root")
);
