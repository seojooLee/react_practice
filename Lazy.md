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

if(editPost === true){
import('./editpost)
.then((module)=> module.showEditor())
.catch((e)=> )
}

React.lazy : import를 적절하게 해준다.

import Settings from './Settings'
=>
const Settings = React.lazy(()=> import('./Settings'))

---

먄약 사용자가 트위터라는 방문을 하지 않았을 때 (트위터에 관해 import를 받아올 필요X)

const Tweets = React.lazy(()=> import('./Tweets'));

<React.Suspense fallback={<p>Loading</p>}>
<Route>
<Component/>
</Route>
</React.Suspense>

## 참고자료

https://www.youtube.com/watch?v=0mQbxF-_S-M&ab_channel=uidotdev
