function ImagePopup() {
  return (
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
            src=""
            alt=""
          />
          <figcaption className="popup__caption"></figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;
