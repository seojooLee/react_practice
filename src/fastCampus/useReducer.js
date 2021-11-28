import React, { useState, useReducer } from "react";

//결과값은 다음 상태 값을 반환해야한다.
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state; // new Error('Unhandled action')
  }
}

function UseReducerStudy() {
  // 기존 코드 : const [number, setNumber] = useState(0);
  //[현재의 상태, 액션을 발생 ] = useReducer(reducer함수, 초기값)
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    //기존 코드 : setNumber((prevNumber) => prevNumber + 1);
    dispatch({
      type: "INCREMENT",
    });
  };
  const onDecrease = () => {
    // setNumber(number - 1);
    dispatch({
      type: "DECREMENT",
    });
  };

  return (
    <React.Fragment>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </React.Fragment>
  );
}

export default UseReducerStudy;
