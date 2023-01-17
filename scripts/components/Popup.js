class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  openPopup(popup) {
    popup.classList.add('popup_opened');
  }

  closePopup(popup) {
    popup.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      closePopup(this._popupSelector);
    }
  }

  _handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(document.querySelector('.popup_opened')); // проверить селектор
    }
  }

  setEventListeners() {

  }
}
