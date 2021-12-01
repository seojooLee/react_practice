import React from "react";
import styled from "styled-components";
import HooksDefault from "./hooks_test/HooksDefault";
//import "./redux_test/ReduxDefault";

import UseRefStudy from "./fastCampus/useRef";
import UseReducerStudy from "./fastCampus/useReducer";

//프로젝트에 리덕스 적용하기
import { Provider } from "react-redux"; //Provider을 통해 리액트 프로젝트에서 리덕스를 적용할 수있다.
import { createStore } from "redux"; //store 생성하는 함수
import rootReducer from "./redux_test";
import CounterContainer from "./redux_test/containers/CounterContainer";

const store = createStore(rootReducer);
console.log(store.getState());

function ReactTEST() {
  return (
    <React.Fragment>
      <ul>
        <li>
          - Hooks
          <HooksDefault> </HooksDefault>
        </li>
        <li>
          - Redux
          <Provider store={store}>
            <CounterContainer />
          </Provider>
          {/* <ReduxDefault></ReduxDefault> */}
        </li>
        <li>
          -fastCampus
          <ul>
            <List>
              <h3>useRef</h3>
              <hr />
              <UseRefStudy />
            </List>
            <List>
              <h3>useReducer</h3>
              <hr />
              <UseReducerStudy />
            </List>
          </ul>
        </li>
      </ul>
    </React.Fragment>
  );
}

const List = styled.li`
  background-color: aliceblue;
`;

export default ReactTEST;
