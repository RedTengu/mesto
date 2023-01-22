export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._closeBtn = this._popupSelector.querySelector('.popup__btn-close');

    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openPopup() {
    this._popupSelector.classList.add('popup_opened');

    document.addEventListener('keydown', this._handleEscClose);
  }

  closePopup() {
    this._popupSelector.classList.remove('popup_opened');

    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }

  _handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.closePopup();
    }
  }

  setEventListeners() {
    this._popupSelector.addEventListener('mousedown', (evt) => {
      this._handleOverlayClose(evt)
    })
    this._closeBtn.addEventListener('click', () => {
      this.closePopup();
    })
  }
}
