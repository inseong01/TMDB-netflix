// swiper
const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    bulletActiveClass: 'bullet-active',
    el: '.swiper-pagination',
    type: 'bullets',
  },
  slidesPerGroup: 7,
  slidesPerView: 3,
  loop: false,
  spaceBetween: 16,
  breakpoints: {
    // when window width is >= px
    0: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    340: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1000: {
      slidesPerView: 4,
      slidesPerGroup: 3,
    },
    1300: {
      slidesPerView: 5,
      slidesPerGroup: 3,
    },
    1500: {
      slidesPerView: 6,
      slidesPerGroup: 3,
    },
    1600: {
      slidesPerView: 7,
      slidesPerGroup: 3,
    },
  },
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
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesOffsetBefore: 40,
      spaceBetween: 100,
    },
    400: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesOffsetBefore: 30,
      spaceBetween: 100,
    },
    900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesOffsetBefore: 80,
    },
    1250: {
      slidesPerView: 4,
      slidesPerGroup: 3,
    },
    1450: {
      slidesPerView: 5,
      slidesPerGroup: 3,
      slidesOffsetBefore: 160,
    },
    1550: {
      slidesPerView: 6,
      slidesPerGroup: 3,
      slidesOffsetBefore: 160,
    },
  },
});

// slide 선택
const $sec = document.querySelectorAll('.sec');
const $swiper_wrapper = document.querySelectorAll('.swiper-wrapper');
const $slides = document.querySelectorAll('.swiper-slide.slide');
const $slide_inbox = document.querySelector('.slide_inbox');
const $main_sec = document.querySelector('.main_section');
const $banner_bg = document.querySelector('.banner_bg');
for (let slide of $slides) {
  slide.addEventListener('click', function () {
    // 선택한 slide .active 화면 띄움
    this.classList.toggle('active');
    for (let sibling of $slides) {
      // 그 외 slide는 .active 안 됨
      if (this !== sibling) {
        sibling.classList.remove('active');
      }
    }

    for (let sec of $sec) {
      // 선택된 slide의 .sec, z-index 앞으로
      sec.addEventListener('click', function (e) {
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

  window.addEventListener('click', function (e) {
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
const profile_boxes = document.querySelectorAll('.profile_box');

let language = 'ko-KR';
let range;
let userImg_src;
let selectedGenre;
let compareDate;
let secNumber = 2;
let clicked = false;
// -------------------
// api key 숨김
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: config.Authorization,
  }
};
const details = {
  genres: { // 번역되지 않은 장르 임의 추가
    'ko': [
      { id: 36, name: "역사" },
      { id: 10759, name: '액션 어드벤처' },
      { id: 10762, name: '어린이' },
      { id: 10763, name: '뉴스' },
      { id: 10764, name: '리얼리티' },
      { id: 10765, name: 'SF 판타지' },
      { id: 10766, name: '연속 홈 드라마' },
      { id: 10767, name: '토크' },
      { id: 10768, name: '전쟁 & 정치' }
    ],
    'en': [
      { id: 36, name: "History" },
    ],
  },
  'ko-KR-tv': [],
  'en-tv': [],
  'ko-KR-movie': [],
  'en-movie': [],
  tv: [],
  movie: [],
  country: ['JP'],
}
// -------------------
// 메인페이지: 섹션 생성
function createSec12345(range, language) {
  translateLanguage(range, language);
  const randomGenre = createRandomGenre(range, language);
  createSwiperSlides(range, language, randomGenre);
}
function translateLanguage(range, language) {
  switch (language) {
    case 'en':
      let range_en = range === 'tv' ? 'TV SERIES' : 'MOVIE';
      headtitles[0].innerHTML = `recommend <span></span> <span>${range_en}</span>`
      headtitles[1].innerHTML = `Most Voted <span>${range_en}</span>`
      headtitles[2].innerHTML = `Anime Origned By Japan`
      headtitles[3].innerHTML = `Top Rate <span>${range_en}</span>`
      headtitles[4].innerHTML = `weekly trending <span>${range_en}</span> top 10`
      break;
    default:
      let range_ko = range === 'tv' ? 'TV 시리즈' : '영화';
      headtitles[0].innerHTML = `추천하는 <span></span> <span>${range_ko}</span>`
      headtitles[1].innerHTML = `가장 많은 평가를 받은 <span>${range_ko}</span>`
      headtitles[2].innerHTML = `일본 원작 애니메이션 시리즈`
      headtitles[3].innerHTML = `가장 유명한 <span>${range_ko}</span>`
      headtitles[4].innerHTML = `주간 인기 <span>${range_ko}</span> 탑 10`
  }
}
function createRandomGenre(range, language) { // randomGenre
  const genres = details[`${language}-${range}`].flat();
  const index = Math.floor(Math.random() * genres.length);
  const c1_headertxt = document.querySelector(`.categories1 .headtext span`);
  let selectedGenre = genres[index];

  // 서부(37) 장르면 
  if (selectedGenre.id === 37) {
    return createRandomGenre(range, language);
  }
  c1_headertxt.textContent = selectedGenre.name;
  // 한국어로 번역되지 않은 장르면
  if (language === 'ko-KR') {
    translateNotTranslated(genres, selectedGenre, c1_headertxt);
    return selectedGenre.id;
  }

  return selectedGenre.id;
}
function translateNotTranslated(genres, selectedGenre, headertxt) {
  for (let i = 0; i < genres.length; i++) {
    if (selectedGenre.id !== genres[i].id) continue;
    headertxt.textContent = genres[i].name;
  }
}
function createSwiperSlides(range, language, randomGenre) {
  firstSec(range, language, randomGenre);
  secondSec(2, range, language);
  thirdSec(3, range, language);
  forthSec(4, range, language);
  fifthSec(5, range, language);
}
function firstSec(range, language, randomGenre) { // section1, genre 랜덤 선택
  fetch(`https://api.themoviedb.org/3/discover/${range}?include_adult=true&language=${language}&page=1&sort_by=vote_count.desc&with_genres=${randomGenre}&with_origin_country=KR`, options)
    .then(response => response.json())
    .then(response => {
      let contents = response['results'];
      contents.forEach((value, idx) => {
        if (value.poster_path || value.backdrop_path) return;
        contents.splice(idx, 1);
      });
      contents.filter((value) => value.poster_path && value.backdrop_path);
      createBanner(contents);
      createSlide(1, contents, language, range);
    })
    .catch(err => console.error(err));
}
function createBanner(contents) { // 배너 정보 삽입
  let imgURL = contents[0].backdrop_path;
  const banner_bg = document.querySelector('.banner_bg img');
  const image = `https://image.tmdb.org/t/p/original${imgURL}`;

  const banner_title = document.querySelector('.video_content .title');
  const banner_story = document.querySelector('.video_content .story');

  // 영화는 title, TV는 name
  banner_title.textContent = contents[0].title || contents[0].name;
  banner_story.textContent = contents[0].overview;
  banner_bg.src = image;
  contents.shift();
  return;
}
function secondSec(n, range, language) { // 2번째 슬라이드
  fetch(`https://api.themoviedb.org/3/discover/${range}?language=${language}&page=1&sort_by=vote_count.desc&with_origin_country=KR`, options)
    .then(response => response.json())
    .then(response => {
      let contents = response['results'];
      contents.filter((value) => value.poster_path && value.backdrop_path);
      createSlide(n, contents, language, range);
    })
    .catch(err => console.error(err));
}
function thirdSec(n, range, language) { // 3번째 슬라이드
  fetch(`https://api.themoviedb.org/3/discover/${range}?include_adult=true&language=${language}&page=1&sort_by=popularity.desc&with_genres=${16}&with_origin_country=${details.country[0]}`, options)
    .then(response => response.json())
    .then(response => {
      let contents = response['results'];
      contents.filter((value) => value.poster_path && value.backdrop_path);
      createSlide(n, contents, language, range);
    })
    .catch(err => console.error(err));
}
function forthSec(n, range, language) { // 4번째 슬라이드
  fetch(`https://api.themoviedb.org/3/${range}/top_rated?language=${language}&page=1&with_origin_country=KR`, options)
    .then(response => response.json())
    .then(response => {
      let contents = response['results'];
      contents.filter((value) => value.poster_path && value.backdrop_path);
      createSlide(n, contents, language, range);
    })
    .catch(err => console.error(err));
}
function fifthSec(n, range, language) { // 5번째 슬라이드
  fetch(`https://api.themoviedb.org/3/trending/${range}/week?language=${language}`, options)
    .then(response => response.json())
    .then(response => {
      let contents = response['results'];
      contents.filter((value) => value.poster_path && value.backdrop_path);
      slideBG(n, contents, language);
    })
    .catch(err => console.error(err));
}
function slideBG(n, contents, language) { // 5번째 슬라이드 BG
  const slideNum = document.querySelectorAll(`.categories${n} .slide`).length;
  for (let i = 0; i < slideNum; i++) {
    const swiper_slide = document.querySelector(`.categories${n} .slide${i + 1}`);
    // label
    labeling(swiper_slide, i, contents, language);

    // poster
    const imgURL = `https://image.tmdb.org/t/p/w500${contents[i].poster_path}`;
    swiper_slide.style.background = `url(${imgURL}) no-repeat center / cover`;
  }
}
function labeling(slide, i, contents, language) { // new, label 삽입("1999-09-20")
  const currentDate = new Date(); // 현재 기준 날짜
  const label = document.createElement('div');
  let compareDate = new Date(contents[i].first_air_date); // tv 'first_air_date' sec3 sec4

  // compareDated 없으면, 영화 'release_date' sec2  sec5
  if (contents[i].release_date) {
    compareDate = new Date(contents[i].release_date);
  }
  label.className = '';
  if (currentDate.getFullYear() == compareDate.getFullYear()) { // 올해면
    label.className = language === 'en' ? 'new en year' : 'new ko year';
    if (currentDate.getMonth() - 1 <= compareDate.getMonth()) { // 그리고 한 달 전이면
      label.className = language === 'en' ? 'new en added' : 'new ko added';
    }
  }
  slide.style.borderBottomLeftRadius = 0;
  slide.style.borderBottomRightRadius = 0;
  slide.append(label);
}
function createSlide(n, contents, language, range) {
  const slideNum = document.querySelectorAll(`.categories${n} .slide`).length;
  // slide[i] 데이터 삽입
  for (let i = 0; i < slideNum; i++) {
    const swiperSlide = document.querySelector(`.categories${n} .slide${i + 1}`);
    const inbox_img = document.querySelector(`.categories${n} .slide${i + 1} .slide_inbox img`);
    const inbox_title = document.querySelector(`.categories${n} .slide${i + 1} .slide_inbox .title`);
    const inbox_genre_ul = document.querySelector(`.categories${n} .slide${i + 1} .genre_list`);
    const inbox_percent = document.querySelector(`.categories${n} .slide${i + 1} .percent span`);
    const inbox_like = document.querySelector(`.categories${n} .slide${i + 1} .like_list`);

    // 영상 또는 사진이 없으면
    if (!contents[i] || !contents[i].poster_path || !contents[i].backdrop_path) {
      swiperSlide.style.display = 'none';
    }
    // label 삽입
    labeling(swiperSlide, i, contents, language);

    // in_box 생성
    const inboxProperties = {
      idx: i,
      contents: contents,
      inbox_title: inbox_title,
      swiperSlide: swiperSlide,
      inbox_img: inbox_img,
      inbox_percent: inbox_percent,
      inbox_genre_ul: inbox_genre_ul,
      inbox_like: inbox_like,
      language: language,
      range: range,
    }
    createInbox(inboxProperties);
  }
}
function createInbox(inboxProperties) {
  // 제목 삽입
  createInboxTitle(inboxProperties);
  // BG 삽입(original, w500 ~ w200)
  createInboxBG(inboxProperties);
  // 장르 삽입
  createInboxGenres(inboxProperties);
  // 투표
  createVoteRates(inboxProperties);
}
function createInboxTitle({ idx, contents, inbox_title }) {
  const title = contents[idx].name || contents[idx].title;
  inbox_title.textContent = title;
}
function createInboxBG({ idx, contents, swiperSlide, inbox_img }) {
  const postURL = `https://image.tmdb.org/t/p/w400${contents[idx].poster_path}`;
  const backdropURL = `https://image.tmdb.org/t/p/w500${contents[idx].backdrop_path}`;
  swiperSlide.style.background = `url(${postURL}) no-repeat center / cover`; // 섬네일 
  inbox_img.src = backdropURL; // in_box 사진
}
function createInboxGenres({ idx, contents, language, range, inbox_genre_ul }) {
  const item_genres = contents[idx].genre_ids;
  for (let genreCount = 0; genreCount < item_genres.length; genreCount++) {
    if (genreCount > 2) return;
    const li = document.createElement('li');
    li.classList = 'list';

    details[`${language}-${range}`].flat().forEach(genre => {
      if (language === 'ko-KR') {
        details.genres['ko'].forEach(g => { // 번역되지 않은 장르면
          if (item_genres[genreCount] === g.id) {
            li.textContent = g.name;
            inbox_genre_ul.append(li);
            return;
          }
        })
      }
      if (item_genres[genreCount] === genre.id) { // 장르가 일치하면
        li.textContent = genre.name;
        inbox_genre_ul.append(li);
      }
    });
  }
}
function createVoteRates({ idx, contents, inbox_percent, inbox_like, language }) {
  const vote = contents[idx].vote_average;
  inbox_percent.parentNode.textContent = vote === 0 ? '평가 없음' : vote.toFixed(1);

  // 좋아요 색상(투표 숫자에 따라서 변경)
  switch (true) {
    case vote > 8.7:
      inbox_like.childNodes[1].style.backgroundColor = '#c32222';
      inbox_like.childNodes[2].textContent = language === 'ko-KR' ? '강력 추천' :
        language === 'en' ? 'must watch' : '';
      break;
    case vote >= 8.5:
      inbox_like.childNodes[1].style.backgroundColor = '#c32222';
      inbox_like.childNodes[2].textContent = language === 'ko-KR' ? '대부분 좋아하는' :
        language === 'en' ? 'most like' : '';
      break;
    case vote >= 6:
      inbox_like.childNodes[1].style.backgroundColor = '#41c322';
      inbox_like.childNodes[2].textContent = language === 'ko-KR' ? '시간 보내기 좋은' :
        language === 'en' ? 'good to watch' : '';
      break;
    case vote < 6:
      inbox_like.childNodes[1].style.backgroundColor = '#9a22c3';
      inbox_like.childNodes[2].textContent = language === 'ko-KR' ? '호불호가 있는..' :
        language === 'en' ? 'I don\u0027t recommend' : '';
      break;
    default:
      inbox_like.childNodes[1].style.backgroundColor = 'white';
      inbox_like.childNodes[2].textContent = language === 'ko-KR' ? '평가 없음' :
        language === 'en' ? 'No voted' : '';
  }
}

// 초기화면
function mainSecForm() {
  account_section.classList.add('active');
  account_section.addEventListener('submit', function (e) {
    e.preventDefault();
    // 선택한 분야 실행
    if (clicked) return;
    changeTab(range, language);
    clicked = true;
  })
}
// 선택한 분야로 화면 전환
function changeTab(range, language) {
  switch (range) {
    case 'tv':
      createSec12345(range, language);
      break;
    case 'movie':
      createSec12345(range, language);
      break;
    default:
      alert('Not ready');
      break;
  }
  transitionPage();
}
// 초기 화면 -> 메인 화면 전환
async function transitionPage() {
  let firstTransition = await fadeOutFistPage();
  let secondTransition = await fadeInSecondPage();
}
function fadeOutFistPage() {
  return new Promise((res, rej) => {
    account_section.classList.remove('active');
    setTimeout(() => {
      account_section.style.display = 'none'
      res(1);
    }, 1500); // 1.5s fadeOut
  });
}
function fadeInSecondPage() {
  return new Promise((res, rej) => {
    main_section.style.display = 'block'
    setTimeout(() => {
      $main_sec.style.opacity = '1';
      res(1);
    }, 600); // 0.6s fadeIn $main_sec
  });
}
// 분야 선택: data 받음
profiles.forEach(value => {
  value.addEventListener('click', function () {
    range = this.getAttribute('data-tab');
    return range;
  });
})
// 언어 선택: data 받음
lang_lists.forEach(value => {
  value.addEventListener('click', function () {
    lang_lists.forEach(siblings => {
      if (this !== siblings) {
        siblings.classList.remove('active');
      }
    });
    value.classList.add('active');
    language = this.getAttribute('data-language');

    changeLanguageFirstPage(language);
  });
})
function changeLanguageFirstPage(lang) {
  switch (lang) {
    case 'en':
      title1.textContent = 'Choose What Interests You'
      title2.textContent = 'movie'
      break;
    default:
      title1.textContent = '관심있는 분야를 선택하세요'
      title2.textContent = '영화'
      break;
  }
}

// 장르 생성
function createGenre() {
  profileSelecteStates();
  tvGenres();
  movieGenres();
}
function profileSelecteStates() {
  profiles[0].disabled = true;
  profiles[1].disabled = true;
  profile_boxes[0].style.pointerEvents = 'none';
  profile_boxes[1].style.pointerEvents = 'none';

  setTimeout(() => {
    profiles[0].disabled = false;
    profiles[1].disabled = false;
    profile_boxes[0].style.pointerEvents = 'auto';
    profile_boxes[1].style.pointerEvents = 'auto';
    console.log('------genre generator complete------');
    console.log('-------now you can click--------');
  }, 300);
}
function tvGenres() {
  fetch(`https://api.themoviedb.org/3/genre/tv/list?language=ko-KR`, options)
    .then(response => response.json())
    .then(response => {
      details['ko-KR-tv'].push(response.genres.flat());
      return;
    })
    .catch(err => console.error(err));
  fetch(`https://api.themoviedb.org/3/genre/tv/list?language=en`, options)
    .then(response => response.json())
    .then(response => {
      details['en-tv'].push(response.genres.flat());
      return;
    })
    .catch(err => console.error(err));
}
function movieGenres() {
  fetch(`https://api.themoviedb.org/3/genre/movie/list?language=ko-KR`, options)
    .then(response => response.json())
    .then(response => {
      details['ko-KR-movie'].push(response.genres.flat());
      return;
    })
    .catch(err => console.error(err));
  fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, options)
    .then(response => response.json())
    .then(response => {
      details['en-movie'].push(response.genres.flat());
      return;
    })
    .catch(err => console.error(err));
}

createGenre();
mainSecForm();
