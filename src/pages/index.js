import Popup from '../scripts/components/Popup.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';
import UserInfo from '../scripts/components/UserInfo.js';
import validationConfig from '../scripts/utils/validationConfig.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import Card from '../scripts/components/Card.js'
import Api from '../scripts/components/Api.js';
import apiConfig from '../scripts/utils/apiConfig.js';
import {galleryCards,
  popupProfile,
  popupAddCard,
  popupGallery,
  popupDelete,
  btnEdit,
  btnAdd,
  btnEditAvatar,
  formEditProfile,
  formAddCard,
  formEditAvatar,
  nameInput,
  jobInput,
  nameProfile,
  jobProfile,
  avatarProfile,
  popupAvatar,
  myId } from '../scripts/utils/constants.js';
  import './index.css';


// Инициализация Api
const api = new Api(apiConfig);

// Попап профиля
const profilePopup = new Popup(popupProfile);

// Попап аватара
const avatarPopup = new Popup(popupAvatar);

// Попап добавления карты
const cardPopup = new Popup(popupAddCard);

// Попап картинки
const imagePopup = new PopupWithImage(popupGallery)

// Попап подтверждения удаления
const deleteConfirmPopup = new PopupWithConfirmation({
  popupSelector: popupDelete,
  handleSubmitForm: deleteCard
});

function handleDeleteCard(idCard, card) {
  deleteConfirmPopup.getCardData(idCard, card);
  deleteConfirmPopup.openPopup();
}

// Информация о пользователе
const userInfo = new UserInfo({name: nameProfile, about: jobProfile, avatar: avatarProfile})

// Получаем инфо профиля с сервера
api.getProfileInfo()
  .then(res => {
    userInfo.setAvatar(res);
    userInfo.setUserInfo(res);
  })
  .catch(err => console.log(err))

// Добавление value в popup профиля
const addValueProfile = () => {
  const userValues = userInfo.getUserInfo();

  nameInput.value = userValues.name;
  jobInput.value = userValues.about;
};

// Создание экземпляра валидации для формы редактирования профиля
const editFormValidation = new FormValidator(validationConfig, formEditProfile);
editFormValidation.enableValidation();

// Создание экземпляра валидации для формы добавления карточки
const addFormValidation = new FormValidator(validationConfig, formAddCard);
addFormValidation.enableValidation();

// Создание экземпляра валидации для формы добавления аватара
const avatarFormValidation = new FormValidator(validationConfig, formEditAvatar);
avatarFormValidation.enableValidation();

// Редактирование профиля
const popupEdit = new PopupWithForm({
  popupSelector: popupProfile,
  handleSubmitForm: (inputValues) => {
    api.patchProfileInfo(inputValues)
      .then(data => {
        userInfo.setUserInfo(data);
        popupEdit.closePopup();
      })
      .catch(err => console.log(err))
      .finally(() => popupEdit.isLoaded(false))
  }
})

// Редактирование аватара
const popupEditAvatar = new PopupWithForm({
  popupSelector: popupAvatar,
  handleSubmitForm: (inputValues) => {
    api.patchAvatar(inputValues)
      .then(data => {
        userInfo.setAvatar(data);
        popupEditAvatar.closePopup();
      })
      .catch(err => console.log(err))
      .finally(() => popupEditAvatar.isLoaded(false));
  }
})

// Функция лайка
function like(card) {
  api.putLike(card.idCard)
    .then(data => {
      card.handleLikeClick();
      card.likeCounter(data);
    })
    .catch(err => console.log(err));
}

// Функция дизлайка
function dislike(card) {
  api.deleteLike(card.idCard)
    .then(data => {
      card.handleLikeClick();
      card.likeCounter(data);
    })
    .catch(err => console.log(err));
}

// Создание экземпляра карточки
const createNewCard = (cardParameter) => {
  const card = new Card(cardParameter, '.card-template', handleCardClick, like, dislike, handleDeleteCard, myId);

  const cardElement = card.generateCard();

  return cardElement;
}

// Удаление карточки
function deleteCard(card) {
  api.deleteThisCard(card.idCard)
    .then(() => {
      card.handleDeleteCardDom();
      deleteConfirmPopup.closePopup();
    })
    .catch(err => console.log(err));
}

// Ф-ция открывающая попап картинки
function handleCardClick(name, link) {
  imagePopup.openPopup(name, link);
}

// Инициализация начальных карточек
api.getCardsData()
  .then(res => {
    newCard.renderItems(res)
  })
  .catch(err => console.log(err))

const newCard = new Section({
  renderer: (cardParameter) => {
    newCard.addInitialItems(createNewCard(cardParameter));
  }},
  galleryCards
);

// Создание карточки через попап
const popupNewCard = new PopupWithForm({
  popupSelector: popupAddCard,
  handleSubmitForm: (inputValues) => {
    api.postNewCard(inputValues)
      .then(data => {
        newCard.addItem(createNewCard(data));
        popupNewCard.closePopup();
      })
      .catch(err => console.log(err))
      .finally(() => popupNewCard.isLoaded(false))
  }
});

// Обработчики
profilePopup.setEventListeners();
avatarPopup.setEventListeners();
cardPopup.setEventListeners();
popupNewCard.setEventListeners();
popupEditAvatar.setEventListeners();
popupEdit.setEventListeners();
deleteConfirmPopup.setEventListeners();
imagePopup.setEventListeners();

// Открыть popup редактирования профиля
btnEdit.addEventListener('click', () => {
  addValueProfile();
  editFormValidation.validationFormsCheck();
  profilePopup.openPopup();
});

// Открыть popup редактирования аватара
btnEditAvatar.addEventListener('click', () => {
  avatarFormValidation.validationFormsCheck();
  avatarPopup.openPopup();
})

// Открыть popup добавления карточки
btnAdd.addEventListener('click', () => {
  addFormValidation.validationFormsCheck();
  cardPopup.openPopup();
});
