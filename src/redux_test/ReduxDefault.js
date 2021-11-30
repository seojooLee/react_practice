import { createStore } from "redux"; //스토어 생성

const initialState = {
  //상태의 초기값
  counter: 0,
  text: "",
  list: [],
};

//액션 타입 지정
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

//액션 생성 함수
const increase = () => ({ type: INCREASE });

const decrease = () => ({ type: DECREASE });

const changeText = (text) => ({ type: CHANGE_TEXT, text });

const addToList = (item) => ({ type: ADD_TO_LIST, item });

//리듀서
//state=initialState => 리덕스에서 초기 상태를 만들 때 리듀서를 한번 호출하고,
// 이 시점에 state가 undefined를 default에서 반환하게됨

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state, //기존의 상태의 counter값을 읽어서 1을 더하고, 기존 값은 유지시키고 반환
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item), //기존의 리스트에 새로운 action.item을 추가하여 새로운 배열
      };
    default:
      return state;
  }
}

//store 생성
const store = createStore(reducer);

console.log(store.getState()); //현재 스토어 안에있는 상태 조회

//리스너 함수 <스토어에 구독하기 위해>
const listener = () => {
  const state = store.getState();
  console.log(state);
};

//스토어에 구독
const unsubscribe = store.subscribe(listener);
//구독 해지
//unsubscribe()함수는 store.subscribe호출하게 되면 만들어준다.
//unsubscribe();

//액션들을 디스패치하기

/**
 * 액션이 DISPATCH 될 때마다 리스너 콘솔에 출력이 될 것이다. WHY? =>구독을 했기 때문에
 *
 */
store.dispatch(increase()); // dispatch가 되면서 리스트 호출-> store 상태 업데이트-> 구독했던 리스너 호출
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "HELLO WORLD" }));

window.store = store; // store 인스턴스를 콘솔에서도 사용이 가능하다.
window.unsubscribe = unsubscribe; //호출하고 나서는 액션을 디스패치해도 아무 변화가 없다.  <하지만 값은 변경됨>
