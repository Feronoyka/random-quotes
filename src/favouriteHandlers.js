function toggleFovouriteIcon(isFavourite, btn) {
  btn.classList.toggle('fa-regular', !isFavourite);
  btn.classList.toggle('fa-solid', isFavourite);
}

function showFavourite(quote, author, container) {
  const favouriteCard = document.createElement('div');
  favouriteCard.classList.add('favourite-card');
  favouriteCard.innerHTML = `
    <p>${quote}</p>
    <p class="author">${author}</p>
    `;
  container.appendChild(favouriteCard);
}

function hideFavourite(quote) {
  const favouriteCards = document.querySelectorAll('.favourite-card');
  favouriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

export { toggleFovouriteIcon, showFavourite, hideFavourite };
