# Hooks

## useMemo

특정 값이 바뀌었을 때만 특정 함수만 실행하여 연산되도록 처리
만약 원하지 않은 값이 바뀌었을 경우 리렌더링할때 이전에 만들었던 값을 재사용

첫번째 파라미터 : 함수
두번째 파라미터 : deps (deps안에 넣는 값이 바뀌었을 경우에만 실행시켜주겠음을 명시)

```javascript
const count = useMemo(() => testFunction(), [test]);
```

## React.memo

불필요한 컴포넌트의 리렌더링을 막아줌으로 성능을 최적화할 수있다.

```javascript
export default React.memo(컴포넌트 이름)



export default React.memo(컴포넌트 이름,(prevProps, nextProps)=> nextProps.user===prevProps.user ) //나머지 props가 고정적이여서 비교를 안해도 되는건지 확인을 해야한다.



prevPros, nextPros를 가져와 비교 => true <리렌더링 방지>
false => 리렌더링
```

```javascript
const User = React.memo(
    함수형 컴포넌트 감싸줌
)
```

## useCallback

useCallback은 useMemo와 유사하지만 함수를 위한 훅이다.

```javascript
const onChange = useCallback(
  (e) => {
    const { name, value } = e.target;
    setInputs({
      ...Inputs,
      [naeme]: value,
    });
  },
  [inputs]
);
```

onChange함수는 inputs가 바뀔때만 함수가 새로 만들어지고, 안그럴 경우 기존에 만들어진 함수 재사용 한다.
(state와 props)

만일 deps에 들어간 state의 배열을 업데이트 하게 될 때 해당 요소만 업데이트하면 되지만,
deps로 인해 불필요한 리렌더링 될 때 useState의 함수형 업데이트

```javascript
setUsers(user.concat(user)) / setUsers((user) => user.concat(user));
// setUser에 등록한 콜백함수의 파라미터에서 최신 user을 조회하기때문에 deps에서 넣어주지 않아도 된다.
```

useMemo : 연산된 값을 재사용
useCallback : 특정 함수를 재사용
React.memo : 컴포넌트 리렌더링된 결과물 재사용

---

---

## useReducer Hook

useState : 설정하고 싶은 다음 상태를 직접 지정해주는 방식으로 업데이트
useReducer: 액션이라는 객체를 사용하여 상태를 업데이트한다. 이는 상태 업데이트 로직을 컴포넌트 밖으로 분리 가능

액션 : 업데이트할때 참조하는 객체

```javascript
dispatch({
  type: "INCREMENT"
  //type이라는 값을 사용해 어떤 업데이트를 할지 명시
  diff : 4 //업데이트할때 참조하고 싶은 값이 있다면 넣을 수 있다.
});
```

reducer : 상태를 업데이트 하는 함수

```javascript
//현재 상태와 액션 객체를 파라미터로 받아 새로운 상태를 반환해주는 형태를 가지고 있다.
function reducer(state, action) {
  switch (action.type) {
    //액션 타입이 INCREMENT일 경우 기존 상태에 1을 더함
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
```

reducer 사용

```javascript
const [number, dispatch] = useReducer(reducer, 0);
//위의 reducer함수, 기본값=(숫자,문자,객체, 배열 ...etc)

number : 현재 상태
dispatch(보내다, 액션을 발생시킨다.) : action을 발생시키는 함수
```
