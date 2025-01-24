const image = document.querySelector(".comment-img");
const textEl = document.querySelector(".comment-text");
const userName = document.querySelector(".comment-name");

const testimonials = [
  {
    name: 'Mykola',
    photoUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    text: "I will long remember my birthday celebrated at this restaurant! A piece of Armenia right here! A special thanks for the complimentary fruit plate. We will recommend this restaurant to our friends and relatives abroad traveling to Chernihiv!!!",
  },
  {
    name: 'Petro',
    photoUrl:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    text: "From the moment I immersed myself in the atmosphere of this restaurant, I felt it was a true discovery! A complete bloom of flavor in every dish, incredible harmony of aromas, and perfectly chosen ingredients. But it's not only about the taste sensations – the staff truly knows how to make every moment special. I can't wait for my next visit!",
  },
  {
    name: 'Vasyl',
    photoUrl:
      'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    text: "With every sip and every taste-filled bite, I am convinced: this restaurant is a true culinary discovery! Here, food is not just food – it feels like every culinary creation is crafted with love and professional mastery. The atmosphere, with its captivating rhythm of conversations and laughter, enhances the aesthetic pleasure of each dish. I will definitely return many times to enjoy this culinary masterpiece again and again!",
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