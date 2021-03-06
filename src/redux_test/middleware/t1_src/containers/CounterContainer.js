import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "../../modules/counter";

//react에 있는 store 값, 액션 dispatch

function CounterContainer() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}
export default CounterContainer;
