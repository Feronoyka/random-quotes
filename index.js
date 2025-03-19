const quotes = [
  {
    quote: 'Stay hungry, stay foolish',
    author: 'Steve Jobs',
  },
  {
    quote: 'To be or not to be, that is the question',
    author: 'William Shakespeare',
  },
  {
    quote: 'To err is human; to forgive, divine',
    author: 'Alexandr Rope',
  },
];

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
