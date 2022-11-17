// Переменные popup
const popupProfile = document.querySelector('.popup_profile');
const popupAddCard = document.querySelector('.popup_card-add');
const popupGallery = document.querySelector('.popup_gallery');
const popupImg = popupGallery.querySelector('.popup__img');
const popupCaption = popupGallery.querySelector('.popup__caption');
const btnEdit = document.querySelector('.profile__edit-btn');
const btnAdd = document.querySelector('.profile__add-btn');
const btnClose = document.querySelectorAll('.popup__btn-close');
// Переменные form и input
const formEdit = popupProfile.querySelector('.popup__edit-form');
const formAdd = popupAddCard.querySelector('.popup__add-form');
const nameInput = formEdit.querySelector('.popup__text-input_profile_name');
const jobInput = formEdit.querySelector('.popup__text-input_profile_job');
const cardNameInput = document.querySelector('.popup__text-input_card_name');
const cardSrcInput = document.querySelector('.popup__text-input_card_src');
// Переменные данных профиля
const nameProfile = document.querySelector('.profile__nickname');
const jobProfile = document.querySelector('.profile__bio');
// Переменные карточек и шаблона
const galleryCards = document.querySelector('.gallery__cards');
const cardTemplate = document.querySelector('.card-template').content;

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

btnEdit.addEventListener('click', () => {
  openPopup(popupProfile);
});

btnAdd.addEventListener('click', () => {
  openPopup(popupAddCard);
});

btnClose.forEach((btn) => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup));
});

// Сохранить данные профиля
function handleEditFormSubmit (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
};

formEdit.addEventListener('submit', handleEditFormSubmit);

// Функция лайка
const handleLikeClick = (evt) => {
  evt.target.classList.toggle('card__like-btn_active');
};

// Функция удаления
const handleDeleteClick = (evt) => {
  evt.target.closest('.gallery__card-item').remove();
};

// Генерация карточек
const generateCard = (card) => {
  const cardElem = cardTemplate.cloneNode(true);

  const cardTitle = cardElem.querySelector('.card__title');
  const cardImg = cardElem.querySelector('.card__img');

  cardTitle.textContent = card.name;
  cardImg.alt = cardTitle.textContent;
  cardImg.src = card.link;

  const btnLike = cardElem.querySelector('.card__like-btn');
  btnLike.addEventListener('click', handleLikeClick);

  const btnDelete = cardElem.querySelector('.card__delete-btn');
  btnDelete.addEventListener('click', handleDeleteClick);

  // Открытие картинки карточки
  const handleOpenImgPopup = () => {
    popupImg.src = cardImg.src;
    popupImg.alt = cardTitle.textContent;
    popupCaption.textContent = cardTitle.textContent;
    openPopup(popupGallery);
  }
  cardImg.addEventListener('click', handleOpenImgPopup);

  return cardElem;
};

const renderCard = (card) => {
  galleryCards.prepend(generateCard(card));
};

initialCards.forEach((card) => {
  renderCard(card);
})

// Создание и сохранение карточки
function handleAddFormSubmit (evt) {
  evt.preventDefault();
  renderCard({name: cardNameInput.value, link: cardSrcInput.value});
  closePopup(popupAddCard);
  formAdd.reset();
}

formAdd.addEventListener('submit', handleAddFormSubmit);
