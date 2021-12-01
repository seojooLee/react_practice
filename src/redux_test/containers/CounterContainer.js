/**
 * useSelector(상태 조회), useDispath 사용
 *
 */

import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux"; //상태 조회
import { decrease, increase, setDff } from "../modules/counter";
function CounterContainer() {
  const { number, diff } = useSelector((state) => ({
    //state= 리덕스의 현재 상태
    //state=> 스토어에서 getState를 했을 때 반환하는 상태가 여기로 온다.
    //비구조 할당으로 number와 diff를 가져온다.
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  const dispatch = useDispatch();

  // 액션 생성 함수들이 호출되면 액션 객체 생성되어 DISPATCH가 된다.
  const onIncrease = () => dispatch(increase()); //Counter 모듈에서 생성한 함수 불러옴
  const onDerease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDerease={onDerease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
