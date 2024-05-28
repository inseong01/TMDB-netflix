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

// slide
const $sec = document.querySelectorAll('.sec');
const $swiper_wrapper = document.querySelectorAll('.swiper-wrapper');
const $slides = document.querySelectorAll('.swiper-slide.slide');
const $slide_inbox = document.querySelector('.slide .slide_inbox');

for (let slide of $slides) {
  slide.addEventListener('click', function() {
    this.classList.toggle('active');
    for (let sibling of $slides) {
      if (this !== sibling) {
        sibling.classList.remove('active');
      }
    }

    for(let sec of $sec) {
      // 선택된 slide의 .sec, z-index 앞으로
      sec.addEventListener('click', function() {
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
const options = { // 초기설정
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzM1MWVlZjU4MmRjODRjNmZjMTdkMTVjN2Q1ZjQ0NSIsInN1YiI6IjY2NDAyNTQwOTM2OWJiNmU2NTIwMzg5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2_g9mjUwn6IU2zyAsXws_J2S4dbafz3sj5lz-OumHag'
  }
};
const details = {
  genres: [
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 16,
      name: "Animation"
    },
    {
      id: 18,
      name: "Drama"
    },
    {
      id: 27,
      name: "Horror"
    },
    {
      id: 28,
      name: "Action"
    },
    {
      id: 35,
      name: "Comedy"
    },
    {
      id: 36,
      name: "History"
    },
    {
      id: 37,
      name: "Western"
    },
    {
      id: 80,
      name: "Crime"
    },
    {
      id: 99,
      name: "Documentary"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 9648,
      name: "Mystery"
    },
    {
      id: 10751,
      name: "Family"
    },
    {
      id: 10759,
      name: "Action & Adventure"
    },
    {
      id: 10762,
      name: "Kids"
    },
    {
      id: 10763,
      name: "News"
    },
    {
      id: 10764,
      name: "Reality"
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy"
    },
    {
      id: 10766,
      name: "Soap"
    },
    {
      id: 10767,
      name: "Talk"
    },
    {
      id: 10768,
      name: "War & Politics"
    },
  ],
  country: ['JP'],
}
let contents;
let selectedGenre;
let compareDate;


// section1/2/3/4/5
function createSec12345() {
  createRandomGenre();
  swiper_video_wrap();
}

function createRandomGenre() { // randomGenre
  let index = Math.floor(Math.random() * 16);
  selectedGenre = details.genres[index];
  const c1_headertxt = document.querySelector(`.categories1 .headtext span`);
  c1_headertxt.textContent = selectedGenre.name;
  return selectedGenre;
}
function firstSec() { // section1, genre 랜덤 선택
  fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=true&language=ko-KR&page=1&sort_by=vote_count.desc&with_genres=${selectedGenre.id}`, options)
  .then(response => response.json())
  .then(response => {
    const swiper_slides = document.querySelectorAll(`.categories1 .slide`);
    contents = response['results'];
    contents.forEach((value, idx) => {
      if (!value.poster_path) contents.splice(idx, 1);
    });
    createBanner(contents);
    slideData(swiper_slides.length, 1, contents);
  })
  .catch(err => console.error(err));
}
function createBanner(contents) { // 배너 정보 삽입
  const banner_bg = document.querySelector('.banner_bg img');
  const imgURL = contents[0].backdrop_path;
  const image = `https://image.tmdb.org/t/p/original${imgURL}`;

  const banner_title = document.querySelector('.video_content .title');
  const banner_story = document.querySelector('.video_content .story');
  banner_title.textContent = contents[0].name;
  banner_story.textContent = contents[0].overview;

  banner_bg.src = image;
  return contents.shift();
}

function swiper_video_wrap() {
  firstSec();
  for (let n = 2; n < swiper_videos.length + 2; n++) { // swiper_videos.length = 4
    if (n === 2) {
      secondSec(n, contents);

    } else if (n === 3) {
      thirdSec(n, contents);

    } else if (n === 4) {
      forthSec(n, contents);

    } else if (n === 5) {
      fifthSec(n, contents);
      console.log(4, contents)
    }
  }
}
function secondSec(n, contents) { // 2번째 슬라이드
  fetch(`https://api.themoviedb.org/3/discover/movie?language=ko-KR&page=1&sort_by=vote_count.desc`, options)
  .then(response => response.json())
  .then(response => {
    const swiper_slides = document.querySelectorAll(`.categories${n} .slide`);
    contents = response['results'];
    contents.forEach((value, idx) => {
      if (!value.poster_path) contents.splice(idx, 1);
    });
    console.log(1, contents)

    slideData(swiper_slides.length, n, contents);
    })
  .catch(err => console.error(err));
}
function thirdSec(n, contents) { // 3번째 슬라이드
  fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=true&language=ko-KR&page=1&sort_by=popularity.desc&with_genres=${16}&with_origin_country=${details.country[0]}`, options)
  .then(response => response.json())
  .then(response => {
    const swiper_slides = document.querySelectorAll(`.categories${n} .slide`);
    contents = response['results'];
    contents.forEach((value, idx) => {
      if (!value.poster_path) contents.splice(idx, 1);
    });
    console.log(2, contents)

    slideData(swiper_slides.length, n, contents);
    })
  .catch(err => console.error(err));
}
function forthSec(n, contents) { // 4번째 슬라이드
  fetch(`https://api.themoviedb.org/3/tv/top_rated?language=ko-KR&page=1`, options)
  .then(response => response.json())
  .then(response => {
    const swiper_slides = document.querySelectorAll(`.categories${n} .slide`);
    contents = response['results'];
    contents.forEach((value, idx) => {
      if (!value.poster_path) contents.splice(idx, 1);
    });
    console.log(3, contents)
    
    slideData(swiper_slides.length, n, contents);
    })
  .catch(err => console.error(err));
}
function fifthSec(n, contents) { // 5번째 슬라이드
  fetch(`https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&region=ko-KR`, options)
  .then(response => response.json())
  .then(response => {
    const swiper_slides = document.querySelectorAll(`.categories${n} .slide`);
    contents = response['results'];
    contents.forEach((value, idx) => {
      if (!value.poster_path) contents.splice(idx, 1);
    });
    console.log(4, contents)

    slideBG(swiper_slides.length, n, contents);
    })
  .catch(err => console.error(err));
}
function slideBG(slides, n, contents) { // 5번째 슬라이드 BG
  for (let i = 0; i < slides; i++) {
    const swiper_slide = document.querySelector(`.categories${n} .slide${i + 1}`);
    // label
    labeling(swiper_slide, i, contents);

    // poster
    const imgURL = contents[i].poster_path;
    const image = `https://image.tmdb.org/t/p/original${imgURL}`;
    swiper_slide.style.background = `url(${image}) no-repeat center / cover`;
  }
}
function labeling(slides, i, contents) { // new, label 삽입("1999-09-20")
  compareDate = new Date(contents[i].first_air_date); // tv 'first_air_date' sec3 sec4
  if (contents[i].release_date) { // 영화 'release_date' sec2  sec5
    compareDate = new Date(contents[i].release_date);
  }
  const currentDate = new Date(); // 현재 기준 날짜
  const label = document.createElement('div');

  if (currentDate.getFullYear() == compareDate.getFullYear()) {
    label.className = 'new year';
    if (currentDate.getMonth() == compareDate.getMonth()) {
    } else if (currentDate.getMonth() - 1 <= compareDate.getMonth()) {
      label.className = 'new added';
    }
    slides.append(label);
  }
}
function slideData(slides, n, contents) {
  // slide[i] 데이터 삽입
  for (let i = 0; i < slides; i++) {
    const swiper_slide = document.querySelector(`.categories${n} .slide${i + 1}`);
    const swiper_img = document.querySelector(`.categories${n} .slide${i + 1} .slide_inbox img`);
    const swiper_genre_ul = document.querySelector(`.categories${n} .slide${i + 1} .genre_list`);
    const swiper_percent = document.querySelector(`.categories${n} .slide${i + 1} .match_list .percent span`);

    // label 삽입
    labeling(swiper_slide, i, contents);

    // poster
    const imgURL = contents[i].poster_path;
    const image = `https://image.tmdb.org/t/p/original${imgURL}`;
    swiper_slide.style.background = `url(${image}) no-repeat center bottom / cover`;
    swiper_img.src = image;

    // in_box
    // 장르 삽입
    const item_genres = contents[i].genre_ids; 
    item_genres.forEach((value, index) => {
      if (index > 2) return;
      const li = document.createElement('li');
      li.classList = 'list';
      details.genres.forEach((genre, idx) => {
        if (value === genre.id) {
          li.textContent = details.genres[idx].name;
          return swiper_genre_ul.append(li);
        }
      });
      // li.textContent = '';
    })

    // 투표수
    const vote = contents[i].vote_average;
    swiper_percent.textContent = vote.toFixed(1);
    // vote 숫자에 따라서 색상 변경
    // if (vote > 9) {
    // } else if (vote > 7) {
    // } else if (vote > 5) {
    // } else {
    // }
  }
  contents = ''; // 초기화
}

// 유저 선택 화면
const account_section = document.querySelector('.account_section');
const profiles = document.querySelectorAll('.profile');
const main_section = document.querySelector('.main_section');
let user;

function changeTab(user) {
  switch (user) {
    case 'owner' :
      // 사용자 클릭하면 화면 전환
      createSec12345();
      account_section.style.display = 'none';
      main_section.style.display = 'block';
      break;
    default :
      alert('not ready');
      break;
  }
}
function mainSecForm() {
  account_section.addEventListener('submit', function(e) {
    e.preventDefault();
    changeTab(user);
  })
}
profiles.forEach(value => {
  value.addEventListener('click', function() {
    user = this.getAttribute('data-tab');
    return user;
  });
})

mainSecForm();