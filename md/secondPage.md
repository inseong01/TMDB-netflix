## TMDB-NETFLIX 두번째 페이지

### 함수 구조

```
project
│
├── createGenre ...
│
└── mainSecForm
    └── changeTab
        ├── createSec12345
        │    ├── translateLanguage()
        │    ├── createRandomGenre
        │    │   ├── createRandomGenre()
        │    │   └── translateNotTranslated()
        │    │
        │    └── createSwiperSlides()
        │           ├── firstSec
        │           │   ├── createBanner()
        │           │   └── createSlide
        │           │       ├── labeling()
        │           │       └── createInbox
        │           │           ├── createInboxTitle()
        │           │           ├── createInboxBG()
        │           │           ├── createInboxGenres()
        │           │           └── createVoteRates()
        │           │
        │           ├── secondSec
        │           │   └── createSlide()
        │           │
        │           ├── thirdSec
        │           │   └── createSlide()
        │           │
        │           ├── forthSec
        │           │   └── createSlide()
        │           │
        │           └── fifthSec
        │                   └── slideBG()
        │                       └── labeling()
        │
        └── transitionPage ...
```

## createRandomGenre

- ### createRandomGenre() : 재귀함수

  랜덤장르를 적용하다 보면 한국에 많이 없는 서부 장르가 나온다. 그때를 대비하기 위해 다시 `createRandomGenre()` 함수를 불러오도록 했다.

- ### translateNotTranslated() : 고차함수 - 순회

  장르 영상 데이터 뿐 아니라 장르 제목도 번역되지 않은 것들도 있다. 이유는 모르겠지만 공식 사이트에서도 몇몇 장르는 영어로 알려주고 있다. 심지어 영어 장르, 한국어 장르 갯수도 차이 난다.

  빠진 장르, 번역한 장르 추가해서 데이터 더미를 만들었다. 번역되지 않은 장르로 지정된다면 데이터 더미를 순회해서 알맞은 값으로 반환한다.

## createSwiperSlides

- ### firstSec : `createBanner()`

  `firstSec`은 배너와 슬라이드 두 개를 만든다. `API` 응답 메시지를 하나의 `contents`로 서로 공유한다. 데이터를 공유할 때 주의해야 하는 점은 원본이 바뀌면 안 된다.

  하지만 이번 경우는 다르다. 배너와 슬라이드에 중복되는 데이터가 있으면 안 된다. 배너에서 보여준 정보를 또 슬라이드에서 보여주면 정보의 중복이다.

  배열 변경을 위해 `.shift()`로 첫번째 데이터를 삭제하고 배열이 변경된 `contents`를 다음 함수 `createSlide`로 넘겼다.

  <img src="../gif/배너와-슬라이드.gif" width="70%">

- ### createInbox : 프로퍼티 인수

  함수에 인수가 너무 많다는 걸 느꼈다. 자바스크립트 클린코드를 들었던 기억이 났다. 어쩔 수 없다면 인수를 프로버티 변수로 전달하라는 걸 떠올렸다.

  ```
  const inboxProperties = {
    idx: i,
    contents: contents,
    inbox_title: inbox_title,
    ...
  }
  ```

  키-값을 동일하게 선언하고 생성한 변수를 `createInbox()`에 전달했다. 인수를 구조분해로 받으니 아주 편했다. 매개변수 위치를 맞추지 않아도 됐다. 확실히 아는 게 많을수록 코드를 깔끔하게 작성할 수 있다.

  그리고 리덕스를 사용하면 더 편하지 않을까란 생각이 들었지만 그렇게 복잡하지 않은 구조라 효과적이지 않을 듯하다.
