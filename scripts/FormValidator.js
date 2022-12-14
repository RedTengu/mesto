export default class FormValidator {
  constructor(validationConfig, formElement) {
    // Прием объекта конфига валидации
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    // Получение формы, ее инпутов и кнопки
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(`.${this._inputSelector}`));
    this._submitBtn = this._formElement.querySelector(`.${this._inactiveButtonClass}`);
  }

  // Показ ошибки валидации
  _showError(input) {
    const errorElement = this._formElement.querySelector(`.${this._inputErrorClass}-${input.id}`);
    errorElement.classList.add(this._errorClass);
    input.style.borderBottom = "1px solid #ff0000";
    errorElement.textContent = input.validationMessage;
  }

  // Скрытие ошибки валидации
  _hideError(input) {
    const errorElement = this._formElement.querySelector(`.${this._inputErrorClass}-${input.id}`);
    errorElement.classList.remove(this._errorClass);
    input.style.borderBottom = "1px solid rgba(0, 0, 0, .2)";
    errorElement.textContent = '';
  }

  // Сделать кнопку submit активной
  _enableSubmitBtn() {
    this._submitBtn.removeAttribute('disabled');
    this._submitBtn.classList.add(this._submitButtonSelector);
  }

  // Сделать кнопку submit НЕактивной
  _disableSubmitBtn() {
    this._submitBtn.setAttribute('disabled', true);
    this._submitBtn.classList.remove(this._submitButtonSelector);
  }

  // Вернуть true, если хотя бы один input невалидный
  _hasInvalidInput(inputs) {
    return inputs.some((input) => {
      return !input.validity.valid;
    });
  }

  // Условие активации и деактивации submit
  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._disableSubmitBtn();
    } else {
      this._enableSubmitBtn();
    }
  }

  // Показ или скрытие ошибки, в зависимости от валидности input
  _isValid(input) {
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    };
  };

  // Добавить слушатели проверки валидности всем input в форме
  _setEventListeners() {
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._isValid(input);

        this._toggleButtonState();
      });
    });
  }

  // Проверка состояния кнопки в зависимости от валидности input
  validationFormsCheck() {
    this._inputList.forEach((input) => {
      this._isValid(input);
      this._hideError(input);
    });
    this._toggleButtonState();
  }

  // Включить валидацию формы
  enableValidation() {
    this._setEventListeners();
  }
}
