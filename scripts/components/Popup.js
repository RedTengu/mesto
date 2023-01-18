export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
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
    this._popupSelector.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt)
    })
  }

  revomeEventListeners() {
    this._popupSelector.removeEventListener('click', (evt) => {
      this._handleOverlayClose(evt)
    })
    this._popupSelector.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt)
    })
  }
}
