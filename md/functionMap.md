## 프로젝트 함수 구조

```
project
│
├── createGenre
│   ├── changeProfileStates()
│   ├── tvGenres()
│   └── movieGenres()
│
└── mainSecForm
   └── changeTab
       ├── createSec12345
       │   ├── translateLanguage()
       │   ├── createRandomGenre
       │   │   └── translateNotTranslated()
       │   │
       │   └── createSwiperSlides()
       │       ├── firstSec
       │       │   ├── createBanner()
       │       │   └── createSlide
       │       │       ├── labeling()
       │       │       └── createInbox
       │       │           ├── createInboxTitle()
       │       │           ├── createInboxBG()
       │       │           ├── createInboxGenres()
       │       │           └── createVoteRates()
       │       │
       │       ├── secondSec
       │       │   └── createSlide()
       │       │
       │       ├── thirdSec
       │       │   └── createSlide()
       │       │
       │       ├── forthSec
       │       │   └── createSlide()
       │       │
       │       └── fifthSec
       │           └── slideBG()
       │               └── labeling()
       │
       └── transitionPage()
           ├── fadeOutFistPage()
           └── fadeInSecondPage()
```
