// Переменные
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

// Функции

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

// Карточки

// Создание и добавление экземпляров карточек
const renderCard = (cardParameter) => {
  const card = new Card(cardParameter, '.card-template');

  const cardElement = card.generateCard();

  galleryCards.append(cardElement);
}

function handleAddFormSubmit (evt) {
  evt.preventDefault();
  renderCard({name: cardNameInput.value, link: cardSrcInput.value});
  closePopup(popupAddCard);
  formAdd.reset();
};

// Инициализация начальных карточек
const createDefaultCards = (cardParameter) => {
  cardParameter.forEach(item => renderCard(item));
}

createDefaultCards(initialCards);

// // Генерация карточек
// const generateCard = (card) => {
//   // Клонируем шаблон
//   const cardElem = cardTemplate.cloneNode(true);
//   // Получаем заголовок и картинку карточки
//   const cardTitle = cardElem.querySelector('.card__title');
//   const cardImg = cardElem.querySelector('.card__img');
//   // Получаем кнопку лайка и удаления
//   const btnLike = cardElem.querySelector('.card__like-btn');
//   const btnDelete = cardElem.querySelector('.card__delete-btn');

//   // Добавляем значения картинке карточек
//   const addValueImgCard = () => {
//     cardTitle.textContent = card.name;
//     cardImg.alt = cardTitle.textContent;
//     cardImg.src = card.link;
//   };

//   addValueImgCard();

//   // Открытие картинки карточки
//   const handleOpenImgPopup = () => {
//     popupImg.src = cardImg.src;
//     popupImg.alt = cardTitle.textContent;
//     popupCaption.textContent = cardTitle.textContent;
//     openPopup(popupGallery);
//   };

//   // Функция лайка
//   const handleLikeClick = (evt) => {
//     evt.target.classList.toggle('card__like-btn_active');
//   };

//   // Функция удаления
//   const handleDeleteClick = (evt) => {
//     evt.target.closest('.gallery__card-item').remove();
//   };

//   // Открытие popup с картинкой
//   cardImg.addEventListener('click', handleOpenImgPopup);

//   // Поставить лайк
//   btnLike.addEventListener('click', handleLikeClick);

//   // Удалить карточку
//   btnDelete.addEventListener('click', handleDeleteClick);

//   return cardElem;
// };


const validationCheck = (validationConfig, formElement) => {
  const validation = new FormValidator(validationConfig, formElement);
  validation.enableValidation();
};

validationCheck(validationConfig, formEdit);
validationCheck(validationConfig, formAdd);

// Обработчики

// Открыть popup редактирования профиля
btnEdit.addEventListener('click', () => {
  addValueProfile();
  openPopup(popupProfile);
});

// Открыть popup добавления карточки
btnAdd.addEventListener('click', () => {
  const submitBtn = formAdd.querySelector('.popup__submit-input');

  // disableSubmitBtn(submitBtn, validationConfig);

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
