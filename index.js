// phew… not a lot going on here. Please add some code!
const main = document.querySelector('[data-js="main]');
//Bookmark Button
const bookmarkActive = document.querySelector(
  "[data-js=bookmark-button-toggle]"
);
const bookmark = document.querySelector('[data-js="bookmark-button-toggle"]');

bookmark.addEventListener("click", () => {
  bookmarkActive.classList.toggle("bookmark--active");
});
console.log(bookmark);

//Answer button
const AnswerBtn = document.querySelector('[data-js="answer-button"]');
const showAnswer = document.querySelector('[data-js="show-answer"]');

AnswerBtn.addEventListener("click", () => {
  showAnswer.classList.toggle("card__answer--active");
});
console.log(AnswerBtn);
