import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popup, handleSubmitForm }) {
    super(popup);

    this._form = this._popup.querySelector('.popup__form');

    this._handleSubmitForm = handleSubmitForm;
  }

  setCardData(idCard, card) {
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
