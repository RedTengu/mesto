import Card from './Card.js'
import validationConfig from './validation.js';
import FormValidator from './FormValidator.js';
import initialCards from './initial-cards.js'
import {galleryCards,
        popupProfile,
        popupAddCard,
        btnEdit,
        btnAdd,
        btnsClose,
        formEdit,
        formAdd,
        nameInput,
        jobInput,
        cardNameInput,
        cardSrcInput,
        nameProfile,
        jobProfile} from './variables.js';

// Функции popup

// Добавление value в popup профиля
const addValueProfile = () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
};

// Закрытие popup по клавише
const handleEscClose = (evt) => {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  };
};

// Закрытие popup по оверлею
const handleOverlayClose = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(document.querySelector('.popup_opened'));
  };
};

// Открытие и закрытие popup
const openPopup = (popup) => {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', handleEscClose);

  popup.addEventListener('click', handleOverlayClose);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', handleEscClose);

  popup.removeEventListener('click', handleOverlayClose);
};

// Редактирование профиля
function handleEditFormSubmit (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
};

// Создание карточки места
function handleAddFormSubmit (evt) {
  evt.preventDefault();
  renderCard({name: cardNameInput.value, link: cardSrcInput.value});
  closePopup(popupAddCard);
  formAdd.reset();
};

// Функции карточек

// Создание и добавление экземпляров карточек
const renderCard = (cardParameter) => {
  const card = new Card(cardParameter, '.card-template');

  const cardElement = card.generateCard();

  galleryCards.append(cardElement);
}

// Инициализация начальных карточек
const createDefaultCards = (cardParameter) => {
  cardParameter.forEach(item => renderCard(item));
}

createDefaultCards(initialCards);

// Функции валидации

// Функция создает экземпляр валидации для формы редактирования профиля
const editFormValidation = () => {
  const validation = new FormValidator(validationConfig, formEdit);
  validation.enableValidation();
  validation.validationForms();
}

// Функция создает экземпляр валидации для формы добавления карточки
const addFormValidation = () => {
  const validation = new FormValidator(validationConfig, formAdd);
  validation.enableValidation();
  validation.validationForms();
}

// Обработчики

// Открыть popup редактирования профиля
btnEdit.addEventListener('click', () => {
  addValueProfile();
  editFormValidation();
  openPopup(popupProfile);
});

// Открыть popup добавления карточки
btnAdd.addEventListener('click', () => {
  addFormValidation();
  openPopup(popupAddCard);
});

// Закрыть любой popup кнопкой
btnsClose.forEach((btn) => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup));
});

// Сохранить изменения профиля
formEdit.addEventListener('submit', handleEditFormSubmit);

// Сохранить добавляемую карточку
formAdd.addEventListener('submit', handleAddFormSubmit);


export {openPopup}
