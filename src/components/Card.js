function Card({ card, currentUser, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="places__item">
      <article className="place">
        {card.owner._id === currentUser
          ? <button className="place__remove-button" aria-label="Удалить место" />
          : ''
        }

        <img
          className="place__image"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
          <div className="place__info">
            <h2 className="place__name">{card.name}</h2>
            <button
              className="place__like-button"
              aria-label="Нравится"
            >
              <span className="place__like-count">{card.likes.length}</span>
            </button>
          </div>
      </article>
    </li>
  );
}

export default Card;
