TMDB-netflix
============
TMDB API 기반, 영화-TV 추천 웹사이트    
https://inseong01.github.io/TMDB-netflix/   

## 작업일자   
- 6.1.   
로딩개선, 정보창 리뉴얼(제목, 장르, 평가), 선택한 계정으로 프로필 사진 연동
- 5.29.     
발견 오류 수정
- 5.28.   
영화/TV 라벨링, 장르 데이터 삽입 개선  
- 5.27.    
계정 선택 창 이동 기능 추가   

- 5.25.    
프로토타입 완성    

- 5.24.   
API 연결(이미지, 내용 - 한 섹션만 완료)   

- 5.19.   
UI 디자인 시안 보충, html/css 보충, DOM 조작

- 5.18.   
html/css 작업

- 5.15.   
UI 디자인 시안 제작


## 발견한 오류 / 개선할 것들   
- categories1, 클릭 시 in_box 목록에서 같은 장르 제거되지 않음 (비/동기 부분 의심)



## 작업 세부내용
+ ## 6.1.
  - 로딩 개선   
    - 이미지 파일 용량 최소화(webp로 교체)
    - script defer 적용 취소
    - TMDB에서 불러오는 사진 크기 original에서 w500 ~ w400으로 변경

  - 정보창 리뉴얼
    - 전체적    
    위치 - 클릭하면 정보창이 윈도우 너비 넘어가지 않게 좌측/우측 정렬 적용.    
    사진 - 너비를 늘려 poster 사진이 아닌 backdrop_path 사진 삽입.
    - 상단  
    버튼 제거, 제목 삽입.
    - 하단   
    장르 - 스크립트 내에 저장된 데이터를 사용하지 않고 fetch로 데이터 가져옴.    
          번역되지 않은 장르 데이터 직접 생성, 언어변경 위해 프로퍼티를 점 대신 대괄호로 접근      
    좋아요 - 투표 수에 따라 색상 및 자막 적용. 

  - 발견한 오류 수정 - 정보창 트랜지션 적용    
  : display: block, non을 제거함.

  - 선택한 계정, 프로필 사진 연동    

+ ## 5.29.
  - 다른 곳 클릭 시 정보 창 닫힘 기능 추가

  - 배너, "backdrop_path" undefinded 오류 수정   
    : banner는 tv 프로그램만 나오도록 설정 했지만 모아둔 장르 데이터에는 tv 뿐만 아니라 movie의 장르도 같이 있었음. fetch에서 오류가 나면 catch 부분에서 movie로 다시 검색할 수 있도록 수정.

+ ## 5.28.
  - 영화/TV 프로그램 라벨링  
    : new Date(), append() 활용.  
    현재 날짜 기준과 부여한 조건에 부합하면 class명 부여(CSS 사전작업).    

  -  장르 데이터 삽입 개선    
    : 객체가 가지고 있는 장르 데이터 수 만큼 객체 생성/삽입(장르 삽입 3개 제한).    

  - 객체 높이, swiper-slide 프리뷰 갯수 수정

+ ## 5.27.
  -  유저 선택 창에서 해당 계정을 누르면 창 이동    
		: a 태그를 button 태그로 변경.   

      ```   
      switch문으로 사용자 전환, e.preventDefault()로 뒤로가기 방지
      ```   

+ ## 5.25.
  - 스와이퍼 슬라이드 그룹넘김 갯수 수정    
  : 보이지 않고 넘어가는 슬라이드 방지.

  - 같은 카테고리, 장르에서 제외    
  : categories3은 적용되지만 categories1에서 적용되지 않음(비동기 부분 의심).

  - 장르 값 랜덤 추출   
		: 랜덤 인덱스 값으로 장르 추출, 첫번째 내용을 배너로 삽입 후 배열에서 삭제,  
    남은 배열로 categories1 slide 구성.

  - 배너 로고는 넣을 데이터가 없어서 주석처리

  - banner, story 없어도 괜찮나, 제외해야 되나?


+ ## 5.24.
  - 연산 최소화, 최적화    

  - slide API 추출 값 만큼 자동 반복 생성하려 했지만  
  JS에서 객체 생성 오류가 나서 HTML에서 설계한 객체 수 만큼 반복 적용  

  - 반복시키는 과정 작성에서 여러 방법을 찾느라 시간 소모

+ ## 5.19.   
  - 이미지 클릭할 때 네비게이션이 in_box(영화 정보창)보다 위로 올라옴    
  : 이미지 선택할 때 상위 객체에 active 클래스를 추가해서 swiper-wrapper의 z-index 수정함.
	
  - slide 외 부분 클릭 시 in_box 올라옴 수정    
		: slide 안에 in_box가 포함되어 있었음. 

  - 같은 sec(행)에서 slide(열) 선택 했을 때 네비게이션 감추기   
    - toggle 적용했을 때,   
    sec를 누를 때마다 네비게이션 사라졌다 나타났다 반복되었음.     

    - add 변경 + includes() 사용,   
    slide의 클래스명이 추가되면 sec의 속성도 같이 변경되도록 수정.  

      ``` 
      slide.active in_box {} // css로 z-index 값 수정
      ```   

## 참고
  - github 사용법   
    https://geundung.dev/46
  - markdown 작성법   
    https://gist.github.com/ihoneymon/652be052a0727ad59601
