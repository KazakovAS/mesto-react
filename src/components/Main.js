function Main() {
  return(
    <main className="content">
      <section className="profile">
        <figure className="user">
          <div className="user__avatar">
            <img
                className="user__avatar-image"
                src="src/components/App"
                alt="Аватар пользователя"
            />
            <button
                className="user__avatar-edit-button"
                aria-label="Редактировать картинку профиля"
            >
            </button>
          </div>

          <figcaption className="user__caption">
            <div className="user__nickname">
              <h1 className="user__nickname-text"></h1>
              <button
                  className="user__info-edit-button"
                  aria-label="Редактировать имя"
                  type="button"
              >
              </button>
            </div>
            <p className="user__description"></p>
          </figcaption>
        </figure>

        <button
            className="profile__place-add-button"
            aria-label="Добавить место"
            type="button"
        >
        </button>
      </section>

      <section className="places">
        <ul className="places__list"></ul>
      </section>
    </main>
  );
}

export default Main;
