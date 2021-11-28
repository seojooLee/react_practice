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

참고사항

- https://github.com/changhoi/redux-async-demo
