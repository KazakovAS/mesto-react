import { useContext } from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `place__remove-button ${isOwn ? 'place__remove-button_visible' : 'place__remove-button_hidden'}`
  );
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `...`;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="places__item">
      <article className="place">
        <button className={cardDeleteButtonClassName} aria-label="Удалить место" />

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
