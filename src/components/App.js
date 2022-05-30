import { useState } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [ isEditProfilePopupOpen, setEditProfilePopupOpen ] = useState(false);
  const [ isAddPlacePopupOpen, setAddPlacePopupOpen ] = useState(false);
  const [ isEditAvatarPopupOpen, setEditAvatarPopupOpen ] = useState(false);
  const [ selectedCard, setSelectedCard ] = useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          name="place-add"
          title="Новое место"
          buttonText="Создать"
          onClose={closeAllPopups}
      >
        <label className="form__item">
          <input
              className="form__field"
              type="text"
              name="place-name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
          />
          <span className="form__field-error" id="error-place-name">Вы пропустили это поле.</span>
        </label>
        <label className="form__item">
          <input
              className="form__field"
              type="url"
              name="place-image"
              placeholder="Ссылка на картинку"
              required
          />
          <span className="form__field-error" id="error-place-image"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        name="user-info-edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        onClose={closeAllPopups}
      >
        <label className="form__item">
          <input
            className="form__field"
            type="text"
            name="user-nickname"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="form__field-error" id="error-user-nickname"></span>
        </label>
        <label className="form__item">
          <input
            className="form__field"
            type="text"
            name="user-description"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="form__field-error" id="error-user-description"></span>
        </label>
      </PopupWithForm>

      {/*<PopupWithForm*/}
      {/*  isOpen={isEditProfilePopupOpen}*/}
      {/*  name="place-delete"*/}
      {/*  title="Вы уверены?"*/}
      {/*  buttonText="Да"*/}
      {/*  onClose={closeAllPopups}*/}
      {/*>*/}
      {/*</PopupWithForm>*/}

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        name="avatar-edit"
        title="Обновить аватар"
        buttonText="Сохранить"
        onClose={closeAllPopups}
      >
        <label className="form__item">
          <input
            className="form__field"
            type="url"
            name="avatar-image"
            placeholder="Ссылка на картинку"
            required
          />
            <span className="form__field-error" id="error-avatar-image"></span>
        </label>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
