/**
 * useSelector(상태 조회), useDispath 사용
 *
 */

import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux"; //상태 조회
import { decrease, increase, setDff } from "../modules/counter";
function CounterContainer() {
  //state를 파라미터로 받아와 사용하는 과정에서 selector에서 매번 새로운 객체를 만들고 있기 때문에
  // 컨테이너가 리렌더링 된다.

  /*  최적화 방법  */

  //1
  // const number = useSelector((state) => state.counter.number);
  // const diff = useSelector((state) => state.counter.diff);

  //2
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    //1
    // (left, right) => {
    //   return left.diff === right.diff && left.number === right.number;
    // }
    //2
    shallowEqual //객체안의 모든 값을 제대로 비교하는 것이 아니다. 얕게 비교한다.
  ); //equality

  //최적화 되지 않은 방법
  // const { number, diff } = useSelector((state) => ({
  //   //state= 리덕스의 현재 상태
  //   //state=> 스토어에서 getState를 했을 때 반환하는 상태가 여기로 온다.
  //   //비구조 할당으로 number와 diff를 가져온다.
  //   number: state.counter.number,
  //   diff: state.counter.diff,
  // }));

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
