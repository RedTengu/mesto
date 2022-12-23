export default class FormValidator {
  constructor(validationConfig, formElement) {
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;

    this._formElement = formElement;
    this._inputList = this._formElement.querySelectorAll(`.${this._inputSelector}`);
    this._submitBtn = this._formElement.querySelector(`${this._inactiveButtonClass}`);
  }

  _showError(input) {
    const errorElement = this._formElement.querySelector(`.${this._inputErrorClass}-${input.id}`);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = input.validationMessage;
  }

  _hideError(input) {
    const errorElement = this._formElement.querySelector(`.${this._inputErrorClass}-${input.id}`);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _enableSubmitBtn() {
    this._submitBtn.removeAttribute('disabled');
    this._submitBtn.classList.add(this._submitButtonSelector);
  }

  _disableSubmitBtn() {
    this._submitBtn.setAttribute('disabled', true);
    this._submitBtn.classList.remove(this._submitButtonSelector);
  }

  _hasInvalidInput(inputs) {
    return inputs.some((input) => {
      return !input.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._disableSubmitBtn();
    } else {
      this._enableSubmitBtn();
    }
  }

  _validationForms(input) {
    if (!input.validity.valid) {
      input.style.borderBottom = "1px solid #ff0000";

      this._showError(input);
    } else {
      input.style.borderBottom = "1px solid rgba(0, 0, 0, .2)";

      this._hideError(input);
    };
  };

  _setEventListeners() {
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._validationForms(input);
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
