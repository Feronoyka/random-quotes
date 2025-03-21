import quotes from './quotes.js';

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
  toggleFavouriteBtn.textContent = randomQuote.isFavourite
    ? 'Remove from favourite'
    : 'Add to favourite';

  toggleFavouriteBtn.style.display = 'inline-block';
};

function toggleFovourite() {
  const currentQuotes = quotes[currentQuoteIndex];
  currentQuotes.isFavourite = !currentQuotes.isFavourite;
  toggleFavouriteBtn.textContent = currentQuotes.isFavourite
    ? 'Remove from favourite'
    : 'Add to favourite';

  if (currentQuotes.isFavourite) {
    const favouriteCard = document.createElement('div');
    favouriteCard.classList.add('favourite-card');
    favouriteCard.innerHTML = `
    <p>${currentQuotes.quote}</p>
    <p class="author">${currentQuotes.author}</p>
    `;
    favouritesContainer.appendChild(favouriteCard);
  } else {
    const favouriteCards = document.querySelectorAll('.favourite-card');
    favouriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuotes.quote)) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener('click', generateRandomQuotes);
toggleFavouriteBtn.addEventListener('click', toggleFovourite);
