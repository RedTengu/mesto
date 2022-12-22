export default class FormValidator {
  constructor(validationConfig, formElement) {
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;

    this._formElement = formElement;
    this._inputList = this._formElement.querySelectorAll(this._inputSelector);
    this._errorElement = this._formElement.querySelector(`.${this._inputErrorClass}-${input.id}`);
  }

  _showError(input) {
    this._errorElement.classList.add(this._errorClass);
    this._errorElement.textContent = errorMessage;
  }

  _hideError(input) {
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = '';
  }

  _validationForms(input) {
    if (!input.validity.valid) {
      input.style.borderBottom = "1px solid #ff0000";

      showError(input);
    } else {
      input.style.borderBottom = "1px solid rgba(0, 0, 0, .2)";

      hideError(input);
    };
  };

  // _setEventListeners() {

  // }

  // enableValidation() {

  // }
}
