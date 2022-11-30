// Валидация

// Показ ошибки
const showError = (form, input, errorMessage) => {
  const error = form.querySelector(`.input-error-${input.id}`);
  error.textContent = errorMessage;
};

// Скрытие ошибки
const hideError = (form, input) => {
  const error = form.querySelector(`.input-error-${input.id}`);

  error.textContent = '';
};

// Проверка валидности поля
const validationForms = (form, input) => {
  if (!input.validity.valid) {
    showError(form, input, input.validationMessage);
  } else {
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
    submitBtn.classList.add('popup__submit-input_active');
  } else {
    submitBtn.setAttribute('disabled', true)
    submitBtn.classList.remove('popup__submit-input_active');
  }
};

// Добавляем слушатель всем полям
const setEventListeners = (form) => {
  const inputs = Array.from(form.querySelectorAll('.popup__text-input'));
  const submitBtn = form.querySelector('.popup__submit-input')

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
  const forms = Array.from(document.querySelectorAll('.popup__form'));

  forms.forEach((form) => {
    setEventListeners(form);
  });
};

enableValidation();
