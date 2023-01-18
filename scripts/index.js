import Card from './Card.js'
import validationConfig from './validationConfig.js';
import FormValidator from './FormValidator.js';
import initialCards from './initialCards.js'
import {galleryCards,
        popupProfile,
        popupAddCard,
        btnEdit,
        btnAdd,
        btnsClose,
        formEditProfile,
        formAddCard,
        nameInput,
        jobInput,
        cardNameInput,
        cardSrcInput,
        nameProfile,
        jobProfile} from './constants.js';
import Popup from './components/Popup.js';

const popupEdit = new Popup(popupProfile);

// Функции popup

// Добавление value в popup профиля
const addValueProfile = () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
};

// Редактирование профиля
function handleEditFormSubmit (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  popupEdit.closePopup();
};

// // Создание карточки места
// function handleAddFormSubmit (evt) {
//   evt.preventDefault();
//   renderCard({name: cardNameInput.value, link: cardSrcInput.value});
//   closePopup(popupAddCard);
//   formAddCard.reset();
// };

// Функции карточек

// Создание и добавление экземпляров карточек
const renderCard = (cardParameter) => {
  const card = new Card(cardParameter, '.card-template');

  const cardElement = card.generateCard();

  galleryCards.prepend(cardElement);
}

// Инициализация начальных карточек
const createDefaultCards = (cardParameter) => {
  cardParameter.forEach(item => renderCard(item));
}

createDefaultCards(initialCards);

// Функции валидации

// Создание экземпляра валидации для формы редактирования профиля
  const editFormValidation = new FormValidator(validationConfig, formEditProfile);
  editFormValidation.enableValidation();

// Создание экземпляра валидации для формы добавления карточки
  const addFormValidation = new FormValidator(validationConfig, formAddCard);
  addFormValidation.enableValidation();

// Обработчики

// Открыть popup редактирования профиля
btnEdit.addEventListener('click', () => {
  addValueProfile();
  editFormValidation.validationFormsCheck();
  popupEdit.openPopup();
  popupEdit.setEventListeners();
});

// Открыть popup добавления карточки
btnAdd.addEventListener('click', () => {
  addFormValidation.validationFormsCheck();
  openPopup(popupAddCard);
});

// Закрыть любой popup кнопкой
btnsClose.forEach((btn) => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup));
});

// Сохранить изменения профиля
formEditProfile.addEventListener('submit', handleEditFormSubmit);

// Сохранить добавляемую карточку
formAddCard.addEventListener('submit', handleAddFormSubmit);
