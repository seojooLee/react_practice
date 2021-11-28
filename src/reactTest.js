import React from "react";
import styled from "styled-components";
import HooksDefault from "./hooks_test/HooksDefault";
import ReduxDefault from "./redux_test/ReduxDefault";
import UseRefStudy from "./fastCampus/useRef";
import UseReducerStudy from "./fastCampus/useReducer";
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
          <ReduxDefault></ReduxDefault>
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
