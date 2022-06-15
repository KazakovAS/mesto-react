import { useState, useContext } from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main(props) {
  const [ cards, setCards ] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  return(
    <main className="content">
      <section className="profile">
        <figure className="user">
          <div className="user__avatar">
            <img
              className="user__avatar-image"
              src={`${currentUser.avatar}`}
              alt="Аватар пользователя"
            />
            <button
              className="user__avatar-edit-button"
              aria-label="Редактировать картинку профиля"
              onClick={props.onEditAvatar}
            >
            </button>
          </div>

          <figcaption className="user__caption">
            <div className="user__nickname">
              <h1 className="user__nickname-text">{currentUser.name}</h1>
              <button
                className="user__info-edit-button"
                aria-label="Редактировать профиль"
                type="button"
                onClick={props.onEditProfile}
              >
              </button>
            </div>
            <p className="user__description">{currentUser.about}</p>
          </figcaption>
        </figure>

        <button
          className="profile__place-add-button"
          aria-label="Добавить место"
          type="button"
          onClick={props.onAddPlace}
        >
        </button>
      </section>

      <section className="places">
        <ul className="places__list">
          {
            cards.map((card) => (
              <Card
                card={card}
                onCardClick={props.onCardClick}
                key={card._id}
              />
            )
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;
