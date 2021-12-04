## Redux?

---

리덕스란 2년동안 그 수많은 props를 직접 전달하며 개발한 나에게 너무 어렵게 다가왔다.
그리하여 언젠가는 제대로 Redux를 활용하고, 프로젝트에도 사용해보고 싶은 마음에 공부를 시작해봤다.

먼저 리덕스란?
상태 관리 시스템이다.

1. 여러 곳에서 상태를 따로 관리하지 않아도 된다.
2. 상태는 읽기 전용으로, 변화시키기 위해서는 Action을 사용한다.
3. Action은 순수 함수를 통해 이루어지는데, 변화를 만드는 것은 리듀서다.

적용 방법
(상태- state) => action을 dispatcher 전달=>변경시키는 과정<리듀서>=> 상태 변경

- Action
  : 스토어로 보내는 데이터 묶음
- Action Creator
  : 액션을 만들어내는 주체

- Reducer
  : 액션에 따라 슽토어의 상태 변화시키는 함수 <switch문 사용>
- Store
  : 스토어에서 어플리케이션 상태 저장
  : getState() 상태 접근
  : subscribe(listener) 리스너 등록
  : createStore(app, initialState)

시작

```
yarn add react-redux redux axios styled-components
```

파일 구조

- modules : 리듀서
- configureStore.js : store의 역할

```
 npm install redux-thunk redux-logger --dev   react-router-dom react-router-redux history redux-devtools-extension --dev

```

redux-thunk : 리덕스의 middleware로 리액트 그리고 스토어 사이에 존재, 유저가 원할 때 리덕스의 store로 action을 비동기로 보냄

redux-logger : 리덕스 프로젝트를 진행할 때, console창을 통해 현재의 props와 action, state 정보를 얻을 수 있다.

redux-router-dom
react-router-redux : 프로젝트의 url에 다른 router 전환

---

redux정리 - fastcampus

액션 : 상태의 어떤 변화가 필요하게 될 때 액션을 발생시킨다.

```javascript
{
  type : "TOGGLE_VALUE",
  data:{ // 해당 데이터를 추가하겠다
    id : 0,
    text : 'hello redux'
  }
}
```

액션 생성함수 (Action Creator) 필수X

```javascript

export function addTodo(data) {
  return{
    type:"ADD_TODO",
    data...
  }
}

export const changeiNput = text=>({...})



액션생성함수를 사용하지 않는다면 액션을 발생시킬때마다 직접 액션 객체를 작성해야하는 불편이 있다.
```

리듀서 (Reducer) === useReducer
: 변화를 일으키는 함수

```javascript
//액션 타입을 가지고 , 무엇인지에 따라 UPDATE 작업을 한다.
function counter(state, action) {
  //reducer에서는 불변성을 유지해줘야 한다.
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    default:
      return state;
  }
}
/*
useReducer에서는 default부분에 error 발생시켰지만 리덕스의 리듀스에서는 기존 state를
그대로 반환해야함
why? => 리덕스를 사용할때는 여러개의 리듀서를 만들고 이를 함쳐 rootReducer 생성하고, 
그 안에는 subReducer 생성
 
*/

//불변성 유지 == 기존에 있는 객체나 배열을 건들이지 않고, 새로운 객체를 만들어야한다. (... or concat)
```

스토어 (Store)
리덕스를 사용하게 되면, 한 어플리케이션당 하나의 스토어를 만들게 된다.
현재 앱의 상태와 리듀서가 들어있다. 추가적으로 내장함수 포함

- 스토어의 내장 함수

  - 디스패치 (dispatch) =>액션을 발생시킴 or 액션을 store한테 전달한다.
    dispatch({type:'INCREASE'})

  - 구독 (SUBSCRIBE) : 스토어의 내장함수
    파라미터에 특정 함수를 넣어주면, 액션이 DISPATCH될때마다 우리가 설정한 함수가 호출이 된다. (스토어의 상태가 없데이트 될때마다, 특정 함수를 호출할 수 있다.)

리액트 -> 리덕스를 사용하게 될때 이 함수를 직접 사용하는 경우는 없다.
하지만

리덕스 라이브러리에서 제공하는 connect(), useSelector 훅을 사용해서 스토어에 있는 상태가 업데이트 되면 컴포넌트가 리렌더링 되는 작업을 대신 처리해준다.

컴포넌트 -> 리덕스를 구독하게 된다. -> 리덕스 업데이트-> 컴포넌트 리렌더링

---

리덕스의 3가지 규칙

1. 하나의 애플리케이션 == 하나의 스토어 (하나 이상은 가능하나, 권장X)
2. 상태는 읽기전용 => 불변성을 지켜줘야 함(concat, slice)
   리덕스에서 상태의 불변성을 지키는 것은 좋은 성능을 유지 , 컴포넌트들이 제대로 리렌더링됨
3. 변화를 일으키는 함수 리듀서는 순수한 함수여야 한다.

- 리듀서 함수는 이전 상태와, 액션 객체를 파라미터로 받게 된다.
  이전의 상태는 변함X, 변화를 일으킨 새로운 상태를 객체로 만들어 변한하게 된다.(불변성 유지)
  즉 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과값을 반환해야 한다. (동일한 INPUT => 동일한 OUTPUT)

리듀서 함수에서 쓰면 안됨
new Date(); //호출할때마다 다른값
Math.random() // 호출할때마다 다른값
axios.get//네트워크 요청

위 3개의 내장함수를 쓰기 위해서는 해당 작업은 컴포넌트 단에서 사용 또는 미들웨어에서 처리하면된다.

---

리덕스 모듈
액션 타입, 액션 생성 함수, 리듀서가 포함되어있는 하나의 js파일

** Ducks ** 패턴 : 한 파일에 몰아서 작성한다.

- 파일에 액션타입, 액션 생성함수, 리듀서 선언
- 리듀서 : export default, 액션 생성함수 : export

```

    리덕스 스토어
↓ 스토어 상태 불러옴   ↑ (액션 디스패치)
컨테이너 컴포넌트 <상태관리>
↓ (props)
프레젠테이셔널 컴포넌트 <UI 집중>

```

# useSelector 최적화

shallowEqual

```js
const object = {
  a: {
    x: 1,
    y: 2,
    z: 3,
  },
  b: 1,
  c: [1, 2, 3, 4],
};

//shallowEqual을 통해서 object의 left, right를 비교할 경우

[left,right] => left.a === right.a && left.b === right.b&& left.c ===right.c


```

---

## 요약

액션 : 업데이틔 정보를 지니고 있다. type 필수
액션 생성함수 : 액션 객체를 만들어주는 함수 (필수x, 쓰면 편함)
리듀서 : 상태를 바꿔주는 함수 (현재 상태, 액션객체를 파라미터로 받음)
스토어 : 현재 앱의 상태와 리듀서가 들어있고, 1어플리케이션 = 1스토어

- 내장함수
  - 디스패치 : 액션 발생 시킴
  - 구독 : 상태가 업데이트됐을때 특정함수 호출

참고사항

- https://github.com/changhoi/redux-async-demo
