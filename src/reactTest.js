import React from "react";
import HooksDefault from "./hooks_test/HooksDefault";
import ReduxDefault from "./redux_test/ReduxDefault";
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
      </ul>
    </React.Fragment>
  );
}

export default ReactTEST;
