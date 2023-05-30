console.log("hello!!!");

const form = document.querySelector('[data-js="form"]');
const newCard = document.querySelector('[data-js="newCard"]');
const questionElement = document.querySelector('[data-js="questionMessage"]');
const answerElement = document.querySelector('[data-js="answerMessage"]');
const amountLenghtAnswer = document.querySelector(
  '[data-js="amountLeftAnswer"]'
);
const amountLenghtQuestion = document.querySelector(
  '[data-js="amountLeftQuestion"]'
);
const maxLengthAnswer = answerElement.getAttribute("maxlength");
const maxLengthQuestion = questionElement.getAttribute("maxlength");

function createCard(data) {
  const card = document.createElement("article");
  const questionItem = document.createElement("h2");
  const answerBtn = document.createElement("button");
  const answerItem = document.createElement("p");
  const tagItem = document.createElement("ul");
  const tag = document.createElement("li");

  console.log(data);
  questionItem.textContent = data.question;
  answerBtn.textContent = "Answer";
  answerItem.textContent = data.answer;
  tag.textContent = data.tag;

  tagItem.append(tag);
  card.append(questionItem, answerBtn, answerItem, tagItem);
  newCard.append(card);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  createCard(data);
  form.reset();
});

//Couner left for Question

const updateAmountLeftQuestion = (value) => {
  amountLenghtQuestion.innerText = value;
};

updateAmountLeftQuestion(maxLengthQuestion);

questionElement.addEventListener("input", () => {
  updateAmountLeftQuestion(maxLengthQuestion - questionElement.value.length);
});
console.log(questionElement);

//Caunter left for Answer

const updateAmountLeftAnswer = (value) => {
  amountLenghtAnswer.innerText = value;
};

updateAmountLeftAnswer(maxLengthAnswer);

answerElement.addEventListener("input", () => {
  updateAmountLeftAnswer(maxLengthAnswer - answerElement.value.length);
});
console.log(answerElement);
