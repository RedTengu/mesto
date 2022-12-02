// Валидация
const validationConfig = {
  formSelector: 'popup__form',
  inputSelector: 'popup__text-input',
  submitButtonSelector: 'popup__submit-input_active',
  inactiveButtonClass: 'popup__submit-input',
  inputErrorClass: 'input-error',
  errorClass: 'input-error_active'
};

// Показ ошибки
const showError = (form, input, errorMessage, validationConfig) => {
  const error = form.querySelector(`.${validationConfig.inputErrorClass}-${input.id}`);
  error.classList.add(validationConfig.errorClass);
  error.textContent = errorMessage;
};

// Скрытие ошибки
const hideError = (form, input, validationConfig) => {
  const error = form.querySelector(`.${validationConfig.inputErrorClass}-${input.id}`);
  error.classList.remove(validationConfig.errorClass);
  error.textContent = '';
};

// Проверка валидности поля
const validationForms = (form, input, validationConfig) => {
  if (!input.validity.valid) {
    input.style.borderBottom = "1px solid #ff0000";

    showError(form, input, input.validationMessage, validationConfig);
  } else {
    input.style.borderBottom = "1px solid rgba(0, 0, 0, .2)";

    hideError(form, input, validationConfig);
  };
};

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
};

// Сделать кнопку submit неактивной
const disableSubmitBtn = (submitBtn, validationConfig) => {
  submitBtn.setAttribute('disabled', true)
  submitBtn.classList.remove(validationConfig.submitButtonSelector);
};

// Сделать кнопку submit активной
const enableSubmitBtn = (submitBtn, validationConfig) => {
  submitBtn.removeAttribute('disabled');
  submitBtn.classList.add(validationConfig.submitButtonSelector);
}

// Делаем активной кнопку отправки формы, если поля валидны
const toggleButtonState = (inputs, submitBtn, validationConfig) => {
  if (!hasInvalidInput(inputs)) {
    enableSubmitBtn(submitBtn, validationConfig);
  } else {
    disableSubmitBtn(submitBtn, validationConfig);
  }
};

// Добавляем слушатель всем полям
const setEventListeners = (form, validationConfig) => {
  const inputs = Array.from(form.querySelectorAll(`.${validationConfig.inputSelector}`));
  const submitBtn = form.querySelector(`.${validationConfig.inactiveButtonClass}`);

  toggleButtonState(inputs, submitBtn, validationConfig);

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      validationForms(form, input, validationConfig);
      toggleButtonState(inputs, submitBtn, validationConfig);
    });
  });
};

// Добавляем ф-цию валидации всем формам
const enableValidation = (validationConfig) => {
  const forms = Array.from(document.querySelectorAll(`.${validationConfig.formSelector}`));

  forms.forEach((form) => {
    setEventListeners(form, validationConfig);
  });
};

enableValidation(validationConfig);
