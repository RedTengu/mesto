import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleSubmitForm}) {
    super(popupSelector);

    this._form = this._popupSelector.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__text-input');
    this._submitBtn = this._form.querySelector('.popup__submit-input');
    this._submitBtnText = this._submitBtn.value;

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

  isLoaded(value) {
    value
      ? (this._submitBtn.value = "Сохранение...")
      : (this._submitBtn.value = this._submitBtnText);
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this.isLoaded(true);

      this._handleSubmitForm(this._getInputValues());
    });
  }
}
