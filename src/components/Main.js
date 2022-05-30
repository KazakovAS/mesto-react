import { useState, useEffect } from "react";
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [ userId, setUserId ] = useState('');
  const [ userName, setUserName ] = useState('');
  const [ userDescription, setUserDescription ] = useState('');
  const [ userAvatar, setUserAvatar ] = useState('');
  const [ cards, setCards ] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([profile, cards]) => {
        setUserId(profile._id);
        setUserName(profile.name);
        setUserDescription(profile.about);
        setUserAvatar(profile.avatar);
        setCards(cards);
        // console.log(cards)
      })
      .catch(console.error);
  }, []);

  return(
    <main className="content">
      <section className="profile">
        <figure className="user">
          <div className="user__avatar">
            <img
              className="user__avatar-image"
              src={userAvatar}
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
              <h1 className="user__nickname-text">{userName}</h1>
              <button
                className="user__info-edit-button"
                aria-label="Редактировать профиль"
                type="button"
                onClick={props.onEditProfile}
              >
              </button>
            </div>
            <p className="user__description">{userDescription}</p>
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
          {cards.map((card) =>
            <Card
              card={card}
              currentUser={userId}
              // onCardClick={props.onCardClick}
              key={card._id}
            />
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;
