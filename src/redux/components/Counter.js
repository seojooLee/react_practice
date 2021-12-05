import React from "react";

/**
 *
 * Presentation 컴포넌트에서는 주로 ui에 집중하고, 필요한 함수는 props로 받아와 사용한다.
 *
 */

function Counter({ number, diff, onIncrease, onDerease, onSetDiff }) {
  const onChange = (e) => {
    onSetDiff(parseInt(e.target.value, 10));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDerease}>-</button>
      </div>
    </div>
  );
}

export default Counter;
