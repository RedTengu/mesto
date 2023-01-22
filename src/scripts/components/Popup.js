export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._closeBtn = this._popupSelector.querySelector('.popup__btn-close');
  }

  openPopup() {
    this._popupSelector.classList.add('popup_opened');
  }

  closePopup() {
    this._popupSelector.classList.remove('popup_opened');
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
    this._popupSelector.addEventListener('click', (evt) => {
      this._handleOverlayClose(evt)
    })
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt)
    })
    this._closeBtn.addEventListener('click', () => {
      this.closePopup();
    })
  }

  revomeEventListeners() {
    this._popupSelector.removeEventListener('click', (evt) => {
      this._handleOverlayClose(evt)
    })
    document.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt)
    })
    this._closeBtn.removeEventListener('click', () => {
      this.closePopup();
    })
  }
}
