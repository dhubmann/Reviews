// local review data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "",
    text: "review of susan smith",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "",
    text: "review of anna johnson",
  },
  {
    id: 3,
    name: "adam williamson",
    job: "ux designer",
    img: "",
    text: "review of adam williamson",
  },
  {
    id: 4,
    name: "franz kafka",
    job: "author",
    img: "",
    text: "review of franz kafka",
  },
  {
    id: 5,
    name: "grace hopper",
    job: "scientist",
    img: "",
    text: "review of grace hopper",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial review
document.addEventListener("DOMContentLoaded", function () {
  showReview();
});

// show person based on item
function showReview() {
  const item = reviews[currentItem];
  //img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show previous review
prevBtn.addEventListener("click", function () {
  currentItem -= 1;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showReview(currentItem);
});

// show next review
nextBtn.addEventListener("click", function () {
  currentItem += 1;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showReview(currentItem);
});

// show random review
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showReview(currentItem);
});
