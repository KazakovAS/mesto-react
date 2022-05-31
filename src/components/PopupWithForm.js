function PopupWithForm(props, { buttonText="Сохранить" }) {
  return (
    <section
      className={`popup ${props.isOpen && 'popup_is-opened'}`}
      role="dialog"
    >
      <div className="popup__container">
        <button
          className="popup__close-button"
          aria-label="Закрыть окно"
          type="button"
          onClick={props.onClose}
        >
        </button>

        <form className="form" name={`${props.name}-form`} action="" method="POST" noValidate onSubmit={props.onClose}>
          <h2 className="form__title">
            { props.title }
          </h2>

          { props.children }

          <button className="form__submit">{ buttonText }</button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
