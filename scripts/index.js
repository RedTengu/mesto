// Переменные

// Popup
const popupProfile = document.querySelector('.popup_profile');
const popupAddCard = document.querySelector('.popup_card-add');
const popupGallery = document.querySelector('.popup_gallery');
const popupImg = popupGallery.querySelector('.popup__img');
const popupCaption = popupGallery.querySelector('.popup__caption');
const btnEdit = document.querySelector('.profile__edit-btn');
const btnAdd = document.querySelector('.profile__add-btn');
const btnsClose = document.querySelectorAll('.popup__btn-close');
// Form и input
const formEdit = popupProfile.querySelector('.popup__edit-form');
const formAdd = popupAddCard.querySelector('.popup__add-form');
const nameInput = formEdit.querySelector('.popup__text-input_profile_name');
const jobInput = formEdit.querySelector('.popup__text-input_profile_job');
const cardNameInput = document.querySelector('.popup__text-input_card_name');
const cardSrcInput = document.querySelector('.popup__text-input_card_src');
// Данные профиля
const nameProfile = document.querySelector('.profile__nickname');
const jobProfile = document.querySelector('.profile__bio');
// Карточки и шаблон
const galleryCards = document.querySelector('.gallery__cards');
const cardTemplate = document.querySelector('.card-template').content;

// Функции

// Добавление value в popup профиля
const addValueProfile = () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
};

addValueProfile();

// Открытие и закрытие popup
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

// Редактирование профиля
function handleEditFormSubmit (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
};

// Добавление карточки
function handleAddFormSubmit (evt) {
  evt.preventDefault();
  renderCard({name: cardNameInput.value, link: cardSrcInput.value});
  closePopup(popupAddCard);
  formAdd.reset();
};

// Генерация карточек
const generateCard = (card) => {
  // Клонируем шаблон
  const cardElem = cardTemplate.cloneNode(true);
  // Получаем заголовок и картинку карточки
  const cardTitle = cardElem.querySelector('.card__title');
  const cardImg = cardElem.querySelector('.card__img');
  // Получаем кнопку лайка и удаления
  const btnLike = cardElem.querySelector('.card__like-btn');
  const btnDelete = cardElem.querySelector('.card__delete-btn');

  // Добавляем значения картинке карточек
  const addValueImgCard = () => {
    cardTitle.textContent = card.name;
    cardImg.alt = cardTitle.textContent;
    cardImg.src = card.link;
  };

  addValueImgCard();

  // Открытие картинки карточки
  const handleOpenImgPopup = () => {
    popupImg.src = cardImg.src;
    popupImg.alt = cardTitle.textContent;
    popupCaption.textContent = cardTitle.textContent;
    openPopup(popupGallery);
  };

  // Функция лайка
  const handleLikeClick = (evt) => {
    evt.target.classList.toggle('card__like-btn_active');
  };

  // Функция удаления
  const handleDeleteClick = (evt) => {
    evt.target.closest('.gallery__card-item').remove();
  };

  // Открытие popup с картинкой
  cardImg.addEventListener('click', handleOpenImgPopup);

  // Поставить лайк
  btnLike.addEventListener('click', handleLikeClick);

  // Удалить карточку
  btnDelete.addEventListener('click', handleDeleteClick);

  return cardElem;
};

const renderCard = (card) => {
  galleryCards.prepend(generateCard(card));
};

initialCards.forEach((card) => {
  renderCard(card);
});

// Обработчики

// Открыть popup редактирования профиля
btnEdit.addEventListener('click', () => {
  openPopup(popupProfile);
});

// Открыть popup добавления карточки
btnAdd.addEventListener('click', () => {
  openPopup(popupAddCard);
});

// Закрыть любой popup
btnsClose.forEach((btn) => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup));
});

// Сохранить изменения профиля
formEdit.addEventListener('submit', handleEditFormSubmit);

// Сохранить добавляемую карточку
formAdd.addEventListener('submit', handleAddFormSubmit);
