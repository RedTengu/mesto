import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, handleSubmitForm }) {
    super(popupSelector);

    this._form = this._popupSelector.querySelector('.popup__form');

    this._handleSubmitForm = handleSubmitForm;
  }

  getCardData(idCard, card) {
    this._idCard = idCard;
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleSubmitForm(this._idCard, this._card);
    })
  }
}
