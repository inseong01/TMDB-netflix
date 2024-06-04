// swiper
const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  slidesPerGroup: 3,
  slidesPerView: 7,
  loop: false,
  spaceBetween: 16,
});
const swiper5 = new Swiper('.video5', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  slidesOffsetBefore: 140,
  slidesPerView: 6,
  slidesPerGroup: 3,
  loop: false,
  spaceBetween: 140,
});

// slide 선택
const $sec = document.querySelectorAll('.sec');
const $swiper_wrapper = document.querySelectorAll('.swiper-wrapper');
const $slides = document.querySelectorAll('.swiper-slide.slide');
const $slide_inbox = document.querySelector('.slide_inbox');
const $main_sec = document.querySelector('.main_section');
const $banner_bg = document.querySelector('.banner_bg');
for (let slide of $slides) {
  slide.addEventListener('click', function() {
    // 선택한 slide .active 화면 띄움
    this.classList.toggle('active');
    for (let sibling of $slides) {
      // 그 외 slide는 .active 안 됨
      if (this !== sibling) {
        sibling.classList.remove('active');
      }
    }

    for(let sec of $sec) {
      // 선택된 slide의 .sec, z-index 앞으로
      sec.addEventListener('click', function(e) {
        // sec5 .active 적용 제외
        if (this.classList.value.includes('categories5')) return;
        this.classList.add('active');
        for (let sibling of $sec) {
          if (this !== sibling) {
            sibling.classList.remove('active');
          }
        }
        // 선택 취소된 slide의 .sec, z-index 뒤로
        if (!slide.classList.value.includes('active')) {
          this.classList.remove('active');
        }
      });
    }
  });
  
  window.addEventListener('click', function(e) {
    // slide 외 다른 곳 누르면 닫힘
    if (e.target == $main_sec || e.target == $banner_bg) {
      slide.classList.remove('active');
    }
  });
}


// api
// function createSlide() {
//   // slide 생성(poster 경로 + in_box 내용 삽입)
//   const slide = document.createElement('div').className = 'swiper-slide slide';
//   const slide_inbox = document.createElement('div').className = 'slide_inbox';
//   const inbox_t = document.createElement('div').className = 'inbox top';
//   const inbox_t_img = document.createElement('img');
//   const inbox_b = document.createElement('div').className = 'inbox bottom';
//   const icon_wrap = document.createElement('ul').className = 'icon_wrap';
//   const icon_left = document.createElement('li').className = 'icon_left';
//   const icon_right = document.createElement('li').className = 'icon_right';

//   const match_list = document.createElement('ul').className = 'match_list';
//   const percent = document.createElement('div').className = 'percent';
//   const span = document.createElement('span')

//   const genre_list = document.createElement('ul').className = 'genre_list';

//   const like_list = document.createElement('ul').className = 'like_list';
  
//   // icon top
//   inbox_t.append(inbox_t_img);

//   // icon bottom
//   // createIconLeft
//   for (let i = 0; i < 3; i++) {
//     const icon = document.createElement('div').className = 'icon';
//     const img = document.createElement('img');
//     const a = document.createElement('a');
//     a.append(img);
//     icon.append(a);
//     icon_left.append(icon);
//   }
//   // createIconRight
//   for (let i = 0; i < 1; i++) {
//     const icon = document.createElement('div').className = 'icon';
//     const img = document.createElement('img');
//     const a = document.createElement('a');
//     a.append(img);
//     icon.append(a);
//     icon_right.append(icon);
//   }
//   // icon_wrap
//   icon_wrap.append(icon_left);
//   icon_wrap.append(icon_right);
//   inbox_b.append(icon_wrap);
//   // match_list
//   percent.append(span);
//   percent.textContent = '/10 vote'
//   match_list.append(percent);
//   inbox_b.append(match_list);
//   // genre_list
//   for (let i = 0; i < 3; i++) {
//     const list = document.createElement('li').className = 'list';
//     genre_list.append(list);
//   }
//   inbox_b.append(genre_list);
//   // like_list
//   for (let i = 0; i < 1; i++) {
//     const icon = document.createElement('div').className = 'icon';
//     const img = document.createElement('img');
//     icon.append(img);
//     like_list.append(icon);
//   }
//   for (let i = 0; i < 1; i++) {
//     const icon = document.createElement('div').className = 'icon';
//     icon.textContent = 'more like';
//     like_list.append(icon);
//   }
//   inbox_b.append(like_list);
  
//   slide_inbox.append(inbox_t);
//   slide_inbox.append(inbox_b);
  
//   slide.append(slide_inbox);
// }

const swiper_videos = document.querySelectorAll(`.swiper.video`);
const account_section = document.querySelector('.account_section');
const profiles = document.querySelectorAll('.profile');
const main_section = document.querySelector('.main_section');
const profileImg = document.querySelector('.menu_list_right .profile img');
const lang_lists = document.querySelectorAll('.account_section .bottom .list');
const title1 = document.querySelector('.account_section .title');
const title2 = document.querySelector('.account_section .box2 .name');
const headtitles = document.querySelectorAll('.headtext');

let language = 'ko-KR';
let range;
let userImg_src;
let contents;
let selectedGenre;
let compareDate;
let secNumber = 2;
let complete = 0;
// -------------------
const options = { // 초기설정
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzM1MWVlZjU4MmRjODRjNmZjMTdkMTVjN2Q1ZjQ0NSIsInN1YiI6IjY2NDAyNTQwOTM2OWJiNmU2NTIwMzg5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2_g9mjUwn6IU2zyAsXws_J2S4dbafz3sj5lz-OumHag'
  }
};
const details = {
  genres: { // 번역되지 않은 장르 임의 추가
    'ko': [
      {id: 36, name: "역사"}, 
      {id: 10759, name: '액션 어드벤처'},
      {id: 10762, name: '어린이'},
      {id: 10763, name: '뉴스'},
      {id: 10764, name: '리얼리티'},
      {id: 10765, name: 'SF 판타지'},
      {id: 10766, name: '연속 홈 드라마'},
      {id: 10767, name: '토크'},
      {id: 10768, name: '전쟁 & 정치'}
    ],
    'en': [
      {id: 36, name: "History"},
    ],
    'all': [],
  },
  tv: [],
  movie: [],
  // genres: [
  //   {
  //     id: 12,
  //     name: "Adventure"
  //   },
  //   {
  //     id: 14,
  //     name: "Fantasy"
  //   },
  //   {
  //     id: 16,
  //     name: "Animation"
  //   },
  //   {
  //     id: 18,
  //     name: "Drama"
  //   },
  //   {
  //     id: 27,
  //     name: "Horror"
  //   },
  //   {
  //     id: 28,
  //     name: "Action"
  //   },
  //   {
  //     id: 35,
  //     name: "Comedy"
  //   },
  //   {
  //     id: 36, **
  //     name: "History"
  //   },
  //   {
  //     id: 37,
  //     name: "Western"
  //   },
  //   {
  //     id: 80,
  //     name: "Crime"
  //   },
  //   {
  //     id: 99,
  //     name: "Documentary"
  //   },
  //   {
  //     id: 878, **
  //     name: "Science Fiction"
  //   },
  //   {
  //     id: 9648,
  //     name: "Mystery"
  //   },
  //   {
  //     id: 10751,
  //     name: "Family"
  //   },
  //   {
  //     id: 10759,
  //     name: "Action & Adventure"
  //   },
  //   {
  //     id: 10762,
  //     name: "Kids"
  //   },
  //   {
  //     id: 10763,
  //     name: "News"
  //   },
  //   {
  //     id: 10764,
  //     name: "Reality"
  //   },
  //   {
  //     id: 10765,
  //     name: "Sci-Fi & Fantasy"
  //   },
  //   {
  //     id: 10766,
  //     name: "Soap"
  //   },
  //   {
  //     id: 10767,
  //     name: "Talk"
  //   },
  //   {
  //     id: 10768,
  //     name: "War & Politics"
  //   },
  // ],
  country: ['JP'],
}
// -------------------

function tvGenres(language) {
  fetch(`https://api.themoviedb.org/3/genre/tv/list?language=${language}`, options)
    .then(response => response.json())
    .then(response => {
      details.tv.push(response.genres);
      return complete++;
    })
    .catch(err => console.error(err));
}
function movieGenres(language) {
  fetch(`https://api.themoviedb.org/3/genre/movie/list?language=${language}`, options)
  .then(response => response.json())
  .then(response => {
    details.movie.push(response.genres)
    return complete++;
  })
  .catch(err => console.error(err));
}
function genrePush() {
    const gatherGenres = details.tv.concat(details.movie).flat();
    details.genres['all'].push(gatherGenres)
}
function genreCreater(language) { // genres 추출 (+로딩 표시 제작)
  if (details.genres.all[0]) {
    details.genres.all.pop()
    details.tv.pop()
    details.movie.pop()
  }
  tvGenres(language);
  movieGenres(language);
  setTimeout(() => {
    genrePush();
  }, 530);
}
function translateLanguage(range, language) {
  switch(language) {
    case 'en' :
      let range_en;
      if (range === 'tv') {
        range_en = 'TV SERIES';
      } else if (range === 'movie') {
        range_en = 'movie'
      }
      headtitles[0].innerHTML = `recommend <span></span> <span>${range_en}</span>`
      headtitles[1].innerHTML = `Most Voted <span>${range_en}</span>`
      headtitles[2].innerHTML = `Anime Origned By Japan`
      headtitles[3].innerHTML = `Top Rate <span>${range_en}</span>`
      headtitles[4].innerHTML = `Top 10 Popular <span>${range_en}</span>`
      break;
    default :
    let range_ko;
      if (range === 'movie') {
        range_ko = '영화';
      } else if (range === 'tv') {
        range_ko = 'TV 시리즈';
      }
      headtitles[0].innerHTML = `추천하는 <span></span> <span>${range_ko}</span>`
      headtitles[1].innerHTML = `가장 좋은 평가를 받은 <span>${range_ko}</span>`
      headtitles[2].innerHTML = `일본 원작 애니메이션 시리즈`
      headtitles[3].innerHTML = `가장 유명한 <span>${range_ko}</span>`
      headtitles[4].innerHTML = `인기있는 10편의 <span>${range_ko}</span>`
      break;
  }
}
// section1/2/3/4/5
function createSec12345(range, language) {
  translateLanguage(range, language);
  createRandomGenre(range);
  swiper_video_wrap(range, language);
}
let index;
function createRandomGenre(range) { // randomGenre
  index = Math.floor(Math.random() * details[range].flat().length);
  selectedGenre = details[range].flat()[index];
  const c1_headertxt = document.querySelector(`.categories1 .headtext span`);
  c1_headertxt.textContent = selectedGenre.name;
  return selectedGenre.id;
}
function swiper_video_wrap(range, language) {
  firstSec(range, language);
  secondSec(2, contents, range, language);
  thirdSec(3, contents, range, language);
  forthSec(4, contents, range, language);
  fifthSec(5, contents, range, language);
}

function firstSec(range, language) { // section1, genre 랜덤 선택
  fetch(`https://api.themoviedb.org/3/discover/${range}?include_adult=true&language=${language}&page=1&sort_by=vote_count.desc&with_genres=${selectedGenre.id}`, options)
    .then(response => response.json())
    .then(response => {
      const swiper_slides = document.querySelectorAll(`.categories1 .slide`);
      contents = response['results'];
      contents.forEach((value, idx) => {
        if (!value.backdrop_path) contents.splice(idx, 1);
      });
      createBanner(contents);
      slideData(swiper_slides.length, 1, contents, language);
    })
    .catch(err => console.error(err));
}
function createBanner(contents) { // 배너 정보 삽입
  let imgURL = contents[0].backdrop_path;;
  const banner_bg = document.querySelector('.banner_bg img');
  const image = `https://image.tmdb.org/t/p/original${imgURL}`;
  
  const banner_title = document.querySelector('.video_content .title');
  const banner_story = document.querySelector('.video_content .story');
  banner_title.textContent = contents[0].name;
  if (!banner_title.textContent) { // 영화는 title, TV는 name
    banner_title.textContent = contents[0].title;
  }
  banner_story.textContent = contents[0].overview;
  banner_bg.src = image;
  contents.shift();
  return;
}
function secondSec(n, contents, range, language) { // 2번째 슬라이드
  fetch(`https://api.themoviedb.org/3/discover/${range}?language=${language}&page=1&sort_by=vote_count.desc`, options)
  .then(response => response.json())
  .then(response => {
    const swiper_slides = document.querySelectorAll(`.categories${n} .slide`);
    contents = response['results'];
    content2 = contents.slice(0, 10);
    contents.forEach((value, idx) => {
      if (!value.poster_path) contents.splice(idx, 1);
    });
    slideData(swiper_slides.length, n, contents, language);
    })
  .catch(err => console.error(err));
}
function thirdSec(n, contents, range, language) { // 3번째 슬라이드
  fetch(`https://api.themoviedb.org/3/discover/${range}?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=${16}&with_origin_country=${details.country[0]}`, options)
  .then(response => response.json())
  .then(response => {
    const swiper_slides = document.querySelectorAll(`.categories${n} .slide`);
    contents = response['results'];
    content3 = contents.slice(0, 10);
    contents.forEach((value, idx) => {
      if (!value.poster_path) contents.splice(idx, 1);
    });

    slideData(swiper_slides.length, n, contents, language);
    })
  .catch(err => console.error(err));
}
function forthSec(n, contents, range, language) { // 4번째 슬라이드
  fetch(`https://api.themoviedb.org/3/${range}/top_rated?language=${language}&page=1`, options)
  .then(response => response.json())
  .then(response => {
    const swiper_slides = document.querySelectorAll(`.categories${n} .slide`);
    contents = response['results'];
    content4 = contents.slice(0, 10);
    contents.forEach((value, idx) => {
      if (!value.poster_path) contents.splice(idx, 1);
    });
    
    slideData(swiper_slides.length, n, contents, language);
    })
  .catch(err => console.error(err));
}
function fifthSec(n, contents, range, language) { // 5번째 슬라이드
  fetch(`https://api.themoviedb.org/3/${range}/popular?language=${language}&page=1&region=${language}`, options)
  .then(response => response.json())
  .then(response => {
    const swiper_slides = document.querySelectorAll(`.categories${n} .slide`);
    contents = response['results'];
    contents.forEach((value, idx) => {
      if (!value.poster_path) contents.splice(idx, 1);
    });

    slideBG(swiper_slides.length, n, contents, language);
    })
  .catch(err => console.error(err));
}
function slideBG(slides, n, contents, language) { // 5번째 슬라이드 BG
  for (let i = 0; i < slides; i++) {
    const swiper_slide = document.querySelector(`.categories${n} .slide${i + 1}`);
    // label
    labeling(swiper_slide, i, contents, language);

    // poster
    const imgURL =  `https://image.tmdb.org/t/p/original${contents[i].poster_path}`;
    swiper_slide.style.background = `url(${imgURL}) no-repeat center / cover`;
  }
}
function labeling(slide, i, contents, language) { // new, label 삽입("1999-09-20")
  compareDate = new Date(contents[i].first_air_date); // tv 'first_air_date' sec3 sec4
  if (contents[i].release_date) { // compareDated 없으면, 영화 'release_date' sec2  sec5
    compareDate = new Date(contents[i].release_date);
  }
  const currentDate = new Date(); // 현재 기준 날짜
  const label = document.createElement('div');
  label.className = '';
  if (currentDate.getFullYear() == compareDate.getFullYear()) { // 올해면
    label.className = language === 'en' ? 'new en year' : 'new ko year';
    if (currentDate.getMonth() - 1 <= compareDate.getMonth()) { // 그리고 한 달 전이면
      label.className = language === 'en' ? 'new en added' : 'new ko added';
    }
    slide.style.borderBottomLeftRadius = 0;
    slide.style.borderBottomRightRadius = 0;
    slide.append(label);
  }
}
function slideData(slides, n, contents, language) {
  // slide[i] 데이터 삽입
  for (let i = 0; i < slides; i++) {
    const swiperSlide = document.querySelector(`.categories${n} .slide${i + 1}`);
    const inbox_img = document.querySelector(`.categories${n} .slide${i + 1} .slide_inbox img`);
    const inbox_title = document.querySelector(`.categories${n} .slide${i + 1} .slide_inbox .title`);
    const inbox_genre_ul = document.querySelector(`.categories${n} .slide${i + 1} .genre_list`);
    const inbox_percent = document.querySelector(`.categories${n} .slide${i + 1} .percent span`);
    const inbox_like = document.querySelector(`.categories${n} .slide${i + 1} .like_list`);

    // label 삽입
    labeling(swiperSlide, i, contents, language);

    // in_box
    // 제목 삽입
    const title = contents[i].name ? contents[i].name : contents[i].title;
    inbox_title.textContent = title;
    // BG 삽입(original, w500 ~ w200)
    const postURL = `https://image.tmdb.org/t/p/w400/${contents[i].poster_path}`;
    const backdropURL = `https://image.tmdb.org/t/p/w500/${contents[i].backdrop_path}`;
    swiperSlide.style.background = `url(${postURL}) no-repeat center / cover`; // 섬네일 
    inbox_img.src = backdropURL; // in_box 사진
    // 장르 삽입
    const item_genres = contents[i].genre_ids;
    item_genres.forEach((value, index) => { // value === 'id' 
      if (index > 2) return;
      const li = document.createElement('li');
      li.classList = 'list';
      details.genres.all[0].forEach((genre, idx) => {
        if (language === 'ko-KR') {
          details.genres['ko'].forEach(g => { // 번역되지 않은 장르면
            if (value === g.id) {
              li.textContent = g.name;
              inbox_genre_ul.append(li);
              return;
            }
          })
        }
        if (value === genre.id) { // 장르가 일치하면
          li.textContent = genre.name;
          inbox_genre_ul.append(li);
          return;
        }
      });
    })

    // 투표
    const vote = contents[i].vote_average;
    inbox_percent.textContent = vote.toFixed(1);
    // 좋아요 색상(투표 숫자에 따라서 변경)
    if (language === 'ko-KR') {
      if (vote > 8.7) {
        inbox_like.childNodes[1].style.backgroundColor = '#c32222';
        inbox_like.childNodes[2].textContent = '강력 추천';
      } else if (vote >= 8.5) {
        inbox_like.childNodes[1].style.backgroundColor = '#c32222';
        inbox_like.childNodes[2].textContent = '대부분 좋아하는';
      } else if (vote >= 6.5) {
        inbox_like.childNodes[1].style.backgroundColor = '#41c322';
        inbox_like.childNodes[2].textContent = '시간 보내기 좋은';
      } else {
        inbox_like.childNodes[1].style.backgroundColor = '#9a22c3';
        inbox_like.childNodes[2].textContent = '호불호가 있는..';
      }      
    } else if (language === 'en') {
      if (vote > 8.7) {
        inbox_like.childNodes[1].style.backgroundColor = '#c32222';
        inbox_like.childNodes[2].textContent = 'must watch';
      } else if (vote >= 8.5) {
        inbox_like.childNodes[1].style.backgroundColor = '#c32222';
        inbox_like.childNodes[2].textContent = 'most like';
      } else if (vote >= 6.5) {
        inbox_like.childNodes[1].style.backgroundColor = '#41c322';
        inbox_like.childNodes[2].textContent = 'good to watch';
      } else {
        inbox_like.childNodes[1].style.backgroundColor = '#9a22c3';
        inbox_like.childNodes[2].textContent = 'hmmm..';
      }
    }
  }
  contents = '';
  return n;
}

// 초기 화면
// 선택한 분야로 화면 전환
function changeTab(range, language) {
  switch (range) {
    case 'tv' :
      createSec12345(range, language);
      account_section.style.display = 'none';
      main_section.style.display = 'block';
      break;
    case 'movie' :
      createSec12345(range, language);
      account_section.style.display = 'none';
      main_section.style.display = 'block';
      break;
    default :
      alert('Not ready');
      break;
  }
}

function mainSecForm() {
  account_section.addEventListener('submit', function(e) {
    e.preventDefault();
    changeTab(range, language);
  })
}
// 분야 선택: data 받음
profiles.forEach(value => {
  value.addEventListener('click', function() {
    range = this.getAttribute('data-tab');
    return range;
  });
})
// 언어 선택: data 받음
lang_lists.forEach(value => {
  value.addEventListener('click', function() {
    lang_lists.forEach(siblings => {
      if (this !== siblings) {
        siblings.classList.remove('active');
      }
    });
    value.classList.add('active');
    language = this.getAttribute('data-language');
    
    switch(language) {
      case 'en' :
        title1.textContent = 'Choose What Interests You'
        title2.textContent = 'movie'
        genreCreater(language);
        break;
      default :
        title1.textContent = '관심있는 분야를 선택하세요'
        title2.textContent = '영화'
        genreCreater(language);
        break;
    }
  });
})

genreCreater(language);
mainSecForm();
