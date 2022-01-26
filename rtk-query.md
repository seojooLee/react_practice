## Redux-Toolkit-Query

---

RKT Query는 리덕스를 보다 편리하게 사용하기 위해 제공되는 툴이다.

```
npm install @reduxjs/toolkit
```

리덕스를 사용하게 되면 전역 상태를 전부 하나의 저장소에 있는 객체 트리에 저장하게 된다. 그리고 상태를 변경하거나, 서술하는 동작에 대해서는 action을 내보내는 dispatch만 유일한 방법이라 할 수 있다. 그리고 이를 언제 변경할지는 reducer의 작성이 필요하게 된다.

이런 효율적인 상태관리를 하기 위해서 리덕스를 사용하게 되었지만, 리덕스에서도 단점들이 발견되었다.

1. 스토어 설정이 복잡하다.
2. 많은 패키지를 추가적으로 설치해야 유용하게 리덕스 사용이 가능하다.

이런 이슈를 해결하기 위해 redux tool kit이 등장하게 된다.

1. configureStore
2. Redux middleware

특징

1. 전체 API를 보통 한 곳에 정의한다

- 요청, 캐시 무효화, 공통 앱 설정을 관리하기 더 쉽다.

* Mutations
  뮤테이션은 서버에게 업데이트를 하여 로컬 캐시에게 변화를 준다.
  뮤테이션 엔드포인트는 createApi 부분에서 정의된다. build.mutation()

뮤테이션 엔드포인트는 쿼리 콜백 구조를 가져가야 한다.

---

useQuery와 달리 mutation은 자동으로 실행되지않으므로 trigger를 통해 호출해야한다.

error : 현재 에러가 있을 때
isLoading : 응답을 기다리는 것이 끝났을 때
isSuccess : 응답으로 부터 성공적으로 데이터를 받았을 때

provideTags : 해당 받아온 리스트를 useSelector로 지정할 수 있도록 tag를 제공해준다.
invaildTags : 앞서 provideTags로 invaildTag를 해줄 경우, 자동으로 상태가 업데이트 된다. refetch
onQueryStarted : 해당 업데이트된 데이터로 상태를 업데이트 해준다.
transformResponse : 쿼리로 부터 결과를 받아온다.

//드래그 앤 드랍을 rtk query로 할 경우에
onQueryStarted에서
draft = list 전체를 주면 업데이트는 되지만 깜박이는 증상이 있다.
그러므로 index별로 업데이트를 해주어야 깜박임을 해소한다.

---

참고
http://blog.hwahae.co.kr/all/tech/tech-tech/6946/
