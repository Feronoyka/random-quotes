const quotes = ['Howman', 'Stiven', 'Albert', 'Richard'];

const quote = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

const generateRandomQuotes = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomElement = quotes[randomIndex];
  quote.textContent = randomElement;
};

generateBtn.addEventListener('click', generateRandomQuotes);
