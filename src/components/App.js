import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <section
        className="popup"
        id="user-info-edit-popup"
        role="dialog"
      >
        <div className="popup__container">
          <button
            className="popup__close-button"
            aria-label="Закрыть окно"
            type="button"
          >
          </button>

          <form className="form" id="user-info-edit-form" action="src/components/App" method="POST" noValidate>
            <h2 className="form__title">
              Редактировать профиль
            </h2>

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

            <button className="form__submit">Сохранить</button>
          </form>
        </div>
      </section>

      <section
        className="popup"
        id="place-add-popup"
        role="dialog"
      >
        <div className="popup__container">
          <button
            className="popup__close-button"
            aria-label="Закрыть окно"
            type="button"
          >
          </button>

          <form className="form" id="place-add-form" action="src/components/App" method="POST" noValidate>
            <h2 className="form__title">
              Новое место
            </h2>

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

            <button className="form__submit">Создать</button>
          </form>
        </div>
      </section>

      <section
        className="popup"
        id="place-delete-popup"
        role="dialog"
      >
        <div className="popup__container">
          <button
            className="popup__close-button"
            aria-label="Закрыть окно"
            type="button"
          >
          </button>

          <form className="form" id="place-delete-form" action="src/components/App" method="POST" noValidate>
            <h2 className="form__title">
              Вы уверены?
            </h2>
            <button className="form__submit">Да</button>
          </form>
        </div>
      </section>

      <section
        className="popup"
        id="avatar-edit-popup"
        role="dialog"
      >
        <div className="popup__container">
          <button
            className="popup__close-button"
            aria-label="Закрыть окно"
            type="button"
          >
          </button>

          <form className="form" id="avatar-edit-form" action="src/components/App" method="POST" noValidate>
            <h2 className="form__title">
              Обновить аватар
            </h2>

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

            <button className="form__submit">Сохранить</button>
          </form>
        </div>
      </section>

      <section
        className="popup popup_backdrop_black"
        id="place-photo-popup"
        role="dialog"
      >
        <div className="popup__container popup__container_width_auto">
          <button
            className="popup__close-button"
            aria-label="Закрыть окно"
            type="button"
          >
          </button>

          <figure className="popup__figure">
            <img
              className="popup__image"
              src="src/components/App"
              alt=""
            />
              <figcaption className="popup__caption"></figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}

export default App;
