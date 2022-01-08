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