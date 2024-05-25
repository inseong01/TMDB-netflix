TMDB-netflix
============
TMDB API 기반, 영화-TV 추천 웹사이트

## 작업일자  
- 5.25. 5h   
프로토타입 완성    

- 5.24. 5h  
API 연결(이미지, 내용 - 한 섹션만 완료)   

- 5.19. 6h  
UI 디자인 시안 보충, html/css 보충, DOM 조작

- 5.18. 5h  
html/css 작업


- 5.15. 3h  
UI 디자인 시안 제작


## 수정할 오류   
- 클릭된 categories 외 다른 부분 선택하면 in_box 창 닫히도록
- 마지막 섹션은 클릭하면 화살표 막히지 않게, z-index 올라오지 않도록
- categories 클릭하면 네비게이션 자연스럽게 전환
- categories1, 클릭 시 in_box 목록에서 같은 장르 제거되지 않음 (비/동기 부분 의심)

## 작업 세부내용
+ ## 5.25.
  - 스와이퍼 슬라이드 그룹넘김 갯수 수정    
  : 보이지 않고 넘어가는 슬라이드 방지

  - 같은 카테고리, 장르에서 제외    
  : categories3은 적용되지만 categories1에서 적용되지 않음(비동기 부분 의심)

  - 장르 값 랜덤 추출   
		: 랜덤 인덱스 값으로 장르 추출, 첫번째 내용을 배너로 삽입 후 배열에서 삭제,  
    남은 배열로 categories1 slide 구성

  - 배너 로고는 넣을 데이터가 없어서 주석처리

  - banner, story 없어도 괜찮나, 제외해야 되나?
+ ## 5.24.
  - 연산 최소화, 최적화 해야됨    

  - slide API 추출 값 만큼 자동 반복 생성하려 했지만  
  JS에서 객체 생성 오류가 나서 HTML에서 설계한 객체 수 만큼 반복 적용 함.  

  - 반복시키는 과정 작성에서 여러 방법을 찾느라 시간 소모

+ ## 5.19.   
  - 이미지 클릭할 때 네비게이션이 in_box(영화 정보창)보다 위로 올라옴    
  : 이미지 선택할 때 상위 객체에 active 클래스를 추가해서 swiper-wrapper의 z-index 수정
	
  - slide 외 부분 클릭 시 in_box 올라옴 수정    
		: slide 안에 in_box가 포함되어 있었음. 

  - 같은 sec(행)에서 slide(열) 선택 했을 때 네비게이션 감추기   
    - toggle 적용했을 때,   
    sec를 누를 때마다 네비게이션 사라졌다 나타났다 반복되었음     

    - add 변경 + includes() 사용,   
    slide의 클래스명이 추가되면 sec의 속성도 같이 변경되도록 수정  

      ``` 
      slide.active in_box {} // css로 z-index 값 수정
      ```   
----------
## 참고
  - github 사용법   
    https://geundung.dev/46
  - markdown 작성법   
    https://gist.github.com/ihoneymon/652be052a0727ad59601