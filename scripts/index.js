import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import validationConfig from './validationConfig.js';
import FormValidator from './FormValidator.js';
import Section from './components/Section.js';
import Card from './Card.js'
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
  nameProfile,
  jobProfile} from './constants.js';

// Попап профиля
const profilePopup = new Popup(popupProfile);

// Попап добавления карты
const cardPopup = new Popup(popupAddCard);

// Попап картинки
const imagePopup = new PopupWithImage(popupGallery)

// Информация о пользователе
const userInfo = new UserInfo({name: nameProfile, job: jobProfile})

// Добавление value в popup профиля
const addValueProfile = () => {
  const userValues = userInfo.getUserInfo();

  nameInput.value = userValues.name;
  jobInput.value = userValues.job;
};

// Создание экземпляра валидации для формы редактирования профиля
const editFormValidation = new FormValidator(validationConfig, formEditProfile);
editFormValidation.enableValidation();

// Создание экземпляра валидации для формы добавления карточки
const addFormValidation = new FormValidator(validationConfig, formAddCard);
addFormValidation.enableValidation();

// Редактирование профиля
const popupEdit = new PopupWithForm({
  popupSelector: popupProfile,
  handleSubmitForm: (inputValues) => {
    userInfo.setUserInfo(inputValues);
    popupEdit.closePopup();
  }
})

// Создание экземпляра карточки
const createNewCard = (cardParameter) => {
  const card = new Card(cardParameter, '.card-template', handleCardClick);

  const cardElement = card.generateCard();

  return cardElement;
}

// Ф-ция открывающая попап картинки
function handleCardClick(name, link) {
  imagePopup.openPopup(name, link);
}

// Инициализация начальных карточек
const cardList = new Section({
  items: initialCards,
  renderer: (cardParameter) => {
    cardList.addItem(createNewCard(cardParameter));
  }},
  galleryCards
);

cardList.renderItems();

// Создание карточки через попап
const popupNewCard = new PopupWithForm({
  popupSelector: popupAddCard,
  handleSubmitForm: (inputValues) => {
    cardList.addItem(createNewCard(inputValues));
    popupNewCard.closePopup();
  }
});

// Обработчики
popupNewCard.setEventListeners();
popupEdit.setEventListeners();
imagePopup.setEventListeners();

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
  cardPopup.openPopup();
  cardPopup.setEventListeners();
});
