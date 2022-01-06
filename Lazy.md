## React.lazy

사용자가 원하지 않을 때는 코드를 다운받지 않도록 한다.
--> 사용하지 않을거면 모든 코드를 다운받을 필요가 없다

if(!user){
import \* as api from './api'
}
//조건에 따라 import를 줄 경우 error 메시지 발생

```
import and export may only appear at the top level
```

React.lazy : import를 적절하게 해준다.

import Settings from './Settings'
=>
const Settings = React.lazy(()=> import('./Settings'))

---

먄약 사용자가 트위터라는 방문을 하지 않았을 때 (트위터에 관해 import를 받아올 필요X)

```javascript
const Tweets = React.lazy(() => import("./Tweets"));

<React.Suspense fallback={<p>Loading</p>}>
  {" "}
  //suspense로 감싸줌
  <Route>
    <Component />
  </Route>
</React.Suspense>;
```


---
# 불변성 
리액트에서는 불변성의 의미가 상태관리에 있어 중요하다. 
불변성을 지킨다 => 메모리 영역에서 값을 변경할 수 없다.
불변성을 지키지 않을 경우에는 원본 데이터가 변경되므로 사이드 이펙트가 발생할 수 있다. 

불변성을 지키기 위해서는 새로운 배열로 반환하는 메소드를
활용하면 된다.
하지만 splice는 원본 데이터를 변경하므로 불변성을 지켜주지 않는다. 

## 참고자료

https://www.youtube.com/watch?v=0mQbxF-_S-M&ab_channel=uidotdev
