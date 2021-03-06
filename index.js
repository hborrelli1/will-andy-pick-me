var questionInput = document.getElementById('questionInput');
var submitBtn = document.getElementById('submitBtn');
var usersQuestion = document.getElementById('usersQuestion');
var eightBallAnswer = document.getElementById('eightBallAnswer');
var eightBallImage = document.getElementById('eightBallImage');
var heartBtn = document.getElementById('heartBtn');
var eightBallForm = document.querySelector('.question-form');
var clearFormBtn = document.getElementById('clearBtn');
var currentQuestion = null;
var currentAnswer = null;
var favAnswersBox = document.querySelector('.favorite-answers-box');
var favAnswersList = document.querySelector('.favorite-answers-list');
var potentialAnswers = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don\'t count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

questionInput.addEventListener('keyup', validateBox);
submitBtn.addEventListener('click', questionEightBall);
clearBtn.addEventListener('click', clearBox);
heartBtn.addEventListener('click', addFavoriteAnswer);

function validateBox() {
  if (questionInput.value != '') {
    submitBtn.removeAttribute('disabled');
  }
}

function questionEightBall() {
  // Capture the question
  currentQuestion = questionInput.value;

  // Get random answer
  var randomNumber = Math.floor(Math.random() * (20 - 1) + 1);

  // Set question text
  usersQuestion.innerText = currentQuestion;

  // Set answer text
  eightBallAnswer.innerText = potentialAnswers[randomNumber];
  currentAnswer = potentialAnswers[randomNumber];

  // Hide EightBall image & Display p's
  eightBallImage.classList.add('hidden');
  usersQuestion.classList.remove('hidden');
  eightBallAnswer.classList.remove('hidden');
  heartBtn.classList.remove('hidden');

  // Clear Question question
  eightBallForm.reset();

  // Remove disabled attribute from clear button.
  clearFormBtn.removeAttribute('disabled');
  submitBtn.setAttribute('disabled', '');

  // re-enable heartBtn once new question is created.
  heartBtn.removeAttribute('disabled');
}

function clearBox() {
  // Clear information on page.
  usersQuestion.classList.add('hidden');
  eightBallAnswer.classList.add('hidden');
  heartBtn.classList.add('hidden');
  eightBallImage.classList.remove('hidden');

  // Readd disabled attribute to clear btn.
  clearFormBtn.setAttribute('disabled', '');
}

function addFavoriteAnswer() {
  var favItem = `<li>Question: ${currentQuestion}</br>Answer: ${currentAnswer}</li>`;
  favAnswersList.insertAdjacentHTML('beforeend', favItem);
  favAnswersBox.classList.remove('hidden');
  heartBtn.setAttribute('disabled', '');
}
