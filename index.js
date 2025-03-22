import quotes from './src/quotes.js';
import {
  toggleFovouriteIcon,
  showFavourite,
  hideFavourite,
} from './src/favouriteHandlers.js';

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');
const toggleFavouriteBtn = document.getElementById('toggle-favourite');
const favouritesContainer = document.getElementById('favourites-container');

let currentQuoteIndex;

const generateRandomQuotes = () => {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  // const quoteElement =
  //   '<em>"' + randomQuote.quote + '"</em>' + '<br>' + randomQuote.author;
  // const quote = randomQuote.quote;
  // const author = `(${randomQuote.author})`;
  // const { quote, author } = randomquote;
  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;
  toggleFovouriteIcon(randomQuote.isFavourite, toggleFavouriteBtn);
  toggleFavouriteBtn.style.display = 'inline-block';
};

function toggleFovourite() {
  const currentQuotes = quotes[currentQuoteIndex];
  if (currentQuoteIndex === undefined) {
    return;
  }

  currentQuotes.isFavourite = !currentQuotes.isFavourite;
  toggleFovouriteIcon(currentQuotes.isFavourite, toggleFavouriteBtn);

  if (currentQuotes.isFavourite) {
    showFavourite(
      currentQuotes.quote,
      currentQuotes.author,
      favouritesContainer
    );
  } else {
    hideFavourite(currentQuotes.quote);
  }
}

generateBtn.addEventListener('click', generateRandomQuotes);
toggleFavouriteBtn.addEventListener('click', toggleFovourite);
