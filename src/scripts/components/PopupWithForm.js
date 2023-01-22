import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleSubmitForm}) {
    super(popupSelector);

    this._form = this._popupSelector.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__text-input');

    this._handleSubmitForm = handleSubmitForm;
  }

  _getInputValues() {
    this._inputValues = {};

    this._inputs.forEach(input => {
      this._inputValues[input.name] = input.value;
    });

    return this._inputValues;
  }

  closePopup() {
    super.closePopup();

    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleSubmitForm(this._getInputValues());
    });
  }
}
