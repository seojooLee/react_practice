## Redux-Saga Study
리덕스 사가의 필요성

기존 리덕스만 사용할 경우에는 
바로바로 실행되기 때문에 특정 시간과 특정 동작 이후에
액션을 실행할 수 없게 된다. 


```
프로세스

서버쪽에 data가 전달
서버가 로그인 성공 응답 보내줌
응답을 받아서 로그인 성공 

```

리덕스에서는 동기적으로 데이터를 바꿔버리는 것 밖에 못한다. 


리덕스의 기능 확장을 위해서는 미들웨어를 사용한다.
- 리덕스 사이사이에 비동기 요청이 갈 수 있도록 구현

redux-saga를 사용하는 이유 
redux-thunk는 쉬운대신 기능이 약하다.
1. redux는 동기적인 요청이다. <사이에 비동기를 사용하기 위해서는 redux-saga와 같은 
미들웨어를 써야한다. >


### Generator 함수
``` javascript
//rootSaga
function* rootSaga() {
    yield all([
        call(user),
        call(post)
    ])
}

//userSaga
import {all} from 'redux-saga/effect';

import {LOG_IN, LOG_IN_SCCESS, LOG_IN_FAILURE} from '../reducers/user';

//서버 api 호출
function loginApi(){

}

function* login(){
 try{
     yield call(loginAPI);
     yield put({ //put은 dispatch와 동일
         type: LOG_IN_SUCCESS
     })

 }catch(e){
     console.errr(e);
     yield put({
         type : LOG_IN_FAILURE
     })
 }
}

function* watchLogin(){
yield takeLatest(LOG_IN, login); //saga가 LOG_IN이라는 액션이 들어오는지 기다린다
//들어오게 된다면 login에게 api 요청을 보내게 된다.

//redux saga가 로그인이라는 액션이 실행되는지 확인한다. 

//takeLatest가 LOG_IN 액션이 dispatch되길 기다려서 dispatch될 때 login 제네레이터를 호출한다. 
}

export default function* userSaga(){
    yield all([
        fork(watchLogin)
    ]);
}

//postSaga
import {all} from 'redux-saga/effect';
export default function* postSaga(){
    yield all([])
}
==> user과 post가 합친 것이 rootSaga
 
//로그인 동작할 때
서버에 요청을 보냄
 
case success:
 
case fail:
 
```

 
 redux-saga/effets
 ``` javascript
  

 ```


UI는 리덕스안에있는 상태를 구독
ui는 액션을 만들어서 dispatch => dispatch하게 된 액션을 리듀서를 통해서 새로운 상태를 업데이트 하도록 한다. 

--> 리덕스 과정에서 비동기적인 부분은 어떻게 넣을까? = 미들웨어

리덕스 안의 baseDispatch를 감싸게 된다.

미들웨어 => redux-thunk 

redux-thunk
- 추적, 테스트가 힘들고
- Action creator의 반환이 Action object가 아니다.

리덕스 사가
- redux-thunk에서 생긴 어려움들을 해결할 수 있고, 관리하기가 쉽다 
Action creator의 반환은 Action object 

- Side effect : 비동기 요청, 브라우저 캐시, 로컬 스토리지  => 부작용 ? -> 부수 효과
자바스크립트 코드가 외부 세계에 영향을 주거나 받는 것을 의미


Generator 적극 사용 

function* myGeneraotr() {
    yield 1;
    yield 2;
    yield 3
}
const generator = myGenerator();
generator.next().value //iterator 


Runner => generator함수를 가지게 됨 


SAGA => 장기 트랜잭션을 관리하고, 실패가 생길 경우 이 처리를 어떻게 해야할지 방안
redux-saga => 부수효과에 대한 핸들링

Redux-saga-middleware : side effect 처리
next () => 결과 
generator-> yield (Side effect 처리 요청)

비동기적 카운터 
1. dispatch{
    type:'INCREMENT_ASYNC'
}
2. Delay 1000ms =>Side effect
3. dispatch{
    type:'INCREMENT'
}
4. Reducer




``` javascript


import {put, takeEvery, delay} from 'redux-saga/effects'

//saga가 동작하기 전
export function* rootSaga (){ //incrementAsync를 계속 watch 해줌
    yield takeEvery('INCREMENT_ASYNC', incrementAsync) 
    //takeEvery : incremant_async 액션이 발생하면 incrementAsync 호출 
}


export function* incrementAsync(){
    yield delay(1000); //1초 동안 기다리고
    yield put({type:'INCREMENT'})  //값을 올려주는 saga
} 
 

dispatch => INCREMENT_ASYNC 액션이 들어옴 
SAGA에서 WATCH를 하고 있다가 IncrementAsync함수 호출 => 1초 동안 기다리고 INCREMENT 

 
 effects는 미들웨어에 의해 수행되는 명령을 담는 평범한 자바스크립트 객체라 부른다


saga는 effect를 yield하고, Middleware는 effect를 처리한다.

 1. yield call => await과 같은 문법 
 비동기적인 작업이 끝날 때까지 기다려준다.
//call(fetchA ,arg1, arg2) => fetch에 arg1,arg2 인자 넘겨줌 => fetchA(arg1,arg2)
 2. take : 액션을 가져옴
 3. put : 액션을 다시 reducer에 dispatch
 4. fork... ==> 리덕스 문서에서 확인 

 effect를 yiled 할 경우 미들웨어에서 처리가 끝날때까지 기다리지 않아도 된다
 => Blocking effect와 non blocking

 blocking => promise를 핸들링할때 async/awaint 사용 (call)
 await 키워드를 사용할 경우 api에 호출이끝날때 까지 기다림
 
nonblocking => api 작업이 끝난지 안끝난지는 관심이 없고 바로 다음으로 넘어감 (fork)


function* sage(){
    yield take(ACTION) // 액션이 디스패치 될 때까지 기다려줌 <안넘어감>
    yield fork(otherSaga, ...args)
 
}

channel : 외부 이벤트(웹소켓) 과 사가는 어떻게 연결할지? 

웹소켓 : emitter.on(type,listener) //이벤트가 언제 발생될지는 아무도 모른다

사가 : yield take(PATTERN) //올때까지 계속 기다려준다. 

 

 

 

```