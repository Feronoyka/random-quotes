import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');

const generateRandomQuotes = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  // const quoteElement =
  //   '<em>"' + randomQuote.quote + '"</em>' + '<br>' + randomQuote.author;
  // const quote = randomQuote.quote;
  // const author = `(${randomQuote.author})`;
  // const { quote, author } = randomquote;
  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;
};

generateBtn.addEventListener('click', generateRandomQuotes);
