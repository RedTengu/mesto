// Валидация
const validationObject = {
  formSelector: 'popup__form',
  inputSelector: 'popup__text-input',
  submitButtonSelector: 'popup__submit-input_active',
  inactiveButtonClass: 'popup__submit-input',
  inputErrorClass: 'input-error',
  errorClass: 'input-error_active'
};

// Показ ошибки
const showError = (form, input, errorMessage) => {
  const error = form.querySelector(`.${validationObject.inputErrorClass}-${input.id}`);
  error.classList.add(validationObject.errorClass);
  error.textContent = errorMessage;
};

// Скрытие ошибки
const hideError = (form, input) => {
  const error = form.querySelector(`.${validationObject.inputErrorClass}-${input.id}`);
  error.classList.remove(validationObject.errorClass);
  error.textContent = '';
};

// Проверка валидности поля
const validationForms = (form, input) => {
  if (!input.validity.valid) {
    input.style.borderBottom = "1px solid #ff0000";

    showError(form, input, input.validationMessage);
  } else {
    input.style.borderBottom = "1px solid rgba(0, 0, 0, .2)";

    hideError(form, input);
  };
};

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
};

// Делаем активной кнопку отправки формы, если поля валидны
const toggleButtonState = (inputs, submitBtn) => {
  if (!hasInvalidInput(inputs)) {
    submitBtn.removeAttribute('disabled')
    submitBtn.classList.add(validationObject.submitButtonSelector);
  } else {
    submitBtn.setAttribute('disabled', true)
    submitBtn.classList.remove(validationObject.submitButtonSelector);
  }
};

// Добавляем слушатель всем полям
const setEventListeners = (form) => {
  const inputs = Array.from(form.querySelectorAll(`.${validationObject.inputSelector}`));
  const submitBtn = form.querySelector(`.${validationObject.inactiveButtonClass}`);

  toggleButtonState(inputs, submitBtn);

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      validationForms(form, input);
      toggleButtonState(inputs, submitBtn);
    });
  });
};

// Добавляем ф-цию валидации всем формам
const enableValidation = () => {
  const forms = Array.from(document.querySelectorAll(`.${validationObject.formSelector}`));

  forms.forEach((form) => {
    setEventListeners(form);
  });
};

enableValidation(validationObject);
