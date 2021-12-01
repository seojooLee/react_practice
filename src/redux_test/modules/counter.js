//액션 타입 선언
//dUCKS 패턴에 액션 타입을 선언할때 문자열 앞에 접두사를 붙인다. => 다른 모듈과 중복되지 않기 위해서
const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//액션 생성 함수
export const setDff = (diff) => ({ type: SET_DIFF, diff }); //얼마씩 할지
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//리듀서에서 관리할 초기 상태값 선언
const initialState = {
  number: 0,
  diff: 1,
};

//리듀서 작성 (export default)
export default function counter(state = initialState, action) {
  //state 기본값
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
