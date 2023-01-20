import Card from './Card.js'
import validationConfig from './validationConfig.js';
import FormValidator from './FormValidator.js';
import initialCards from './initialCards.js'
import {galleryCards,
        popupProfile,
        popupAddCard,
        popupGallery,
        btnEdit,
        btnAdd,
        formEditProfile,
        formAddCard,
        nameInput,
        jobInput,
        cardNameInput,
        cardSrcInput,
        nameProfile,
        jobProfile} from './constants.js';
import Popup from './components/Popup.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';

const profilePopup = new Popup(popupProfile);

const addCardPopup = new Popup(popupAddCard);

const imagePopup = new PopupWithImage(popupGallery)
imagePopup.setEventListeners();

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

  profilePopup.closePopup();
  profilePopup.revomeEventListeners();
};

// // Создание карточки места
function handleAddFormSubmit (evt) {
  evt.preventDefault();

  renderCard({name: cardNameInput.value, link: cardSrcInput.value});

  addCardPopup.closePopup();
  addCardPopup.revomeEventListeners();

  formAddCard.reset();
};

function handleCardClick(name, link) {
  imagePopup.openPopup(name, link);
}

// const cardList = new Section({
//   items: initialCards,
//   renderer: (cardParameter) => {
//     const card = new Card(cardParameter, '.card-template');

//     const cardElement = card.generateCard();
//     cardList.check();
//     cardList.addItem(cardElement);
//   },
//   galleryCards
// });

// cardList.renderItems();


// Функции карточек

// Создание и добавление экземпляров карточек
const renderCard = (cardParameter) => {
  const card = new Card(cardParameter, '.card-template', handleCardClick);

  const cardElement = card.generateCard();

  galleryCards.prepend(cardElement);
}

// Инициализация начальных карточек
// const createDefaultCards = (cardParameter) => {
//   cardParameter.forEach(item => renderCard(item));
// }

// createDefaultCards(initialCards);

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
  profilePopup.openPopup();
  profilePopup.setEventListeners();
});

// Открыть popup добавления карточки
btnAdd.addEventListener('click', () => {
  addFormValidation.validationFormsCheck();
  addCardPopup.openPopup();
  addCardPopup.setEventListeners();
});

// Сохранить изменения профиля
formEditProfile.addEventListener('submit', handleEditFormSubmit);

// Сохранить добавляемую карточку
formAddCard.addEventListener('submit', handleAddFormSubmit);
