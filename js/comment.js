// import { image, text, userName } from "./refs.js";

const image = document.querySelector(".comment-img");
const textEl = document.querySelector(".comment-text");
const userName = document.querySelector(".comment-name");

const testimonials = [
  {
    name: 'Микола',
    photoUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    text: "Я надовго запам'ятаю мій День народження, проведений у цьому ресторані! Шматок рідної Вірменії! Окреме дякую за комплімент у вигляді фруктової тарілки. Будемо рекомендувати цей ресторан своїм друзям та родичам також за кордоном, подорожуючих до Чернігова!!!",
  },
  {
    name: 'Петро',
    photoUrl:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    text: 'Щойно занурившись у атмосферу цього ресторану, я відчув, що це справжнє відкриття! Повний розквіт смаку в кожній страві, дивовижна гармонія ароматів та ідеально підібрані інгредієнти. Але не лише смакові враження вражають - персонал тут дійсно знає, як зробити кожен момент особливим. З нетерпінням чекаю на наступний візит!',
  },
{
    name: 'Василь',
    photoUrl:
      'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    text: "З кожним ковтком і кожним переповненим смаком келиха я переконуюся: цей ресторан - справжнє кулінарне відкриття! Тут їжа не просто їжа - це відчуття, що кожен кулінарний твір твориться з любов'ю та професійним майстерством. А атмосфера в захоплюючому ритмі розмов та сміху доповнює естетичне задоволення від кожного страви. Обов'язково повернуся ще й не один раз, щоб насолодитися цим кулінарним шедевром знову та знову!",
  },
];

let currentIndex = 0;

function updateTestimonials() {
    const { name, photoUrl, text } = testimonials[currentIndex];
    image.src = photoUrl;
    textEl.textContent = text;
    userName.textContent = name;
    currentIndex = (currentIndex + 1) % testimonials.length;
}

updateTestimonials();

setInterval(updateTestimonials, 5000);