var questionInput = document.getElementById('questionInput');
var submitBtn = document.getElementById('submitBtn');
var usersQuestion = document.getElementById('usersQuestion');
var eightBallAnswer = document.getElementById('eightBallAnswer');
var eightBallImage = document.getElementById('eightBallImage');
var potentialAnswers = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don\'t count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];

submitBtn.addEventListener('click', questionEightBall);

function questionEightBall() {
  // Capture the question
  var question = questionInput.value;

  // Get random answer
  var randomNumber = Math.floor(Math.random() * (20 - 1) + 1);

  // Set question text
  usersQuestion.innerText = question;

  // Set answer text
  eightBallAnswer.innerText = potentialAnswers[randomNumber];

  // Hide EightBall image & Display p's
  eightBallImage.classList.add('hidden');
  usersQuestion.classList.remove('hidden');
  eightBallAnswer.classList.remove('hidden');

  // Clear Question question
  questionInput.value = '';
}
