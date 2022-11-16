// Начальные карточки
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Переменные popup
const popupElem = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_profile');
const popupAddCard = document.querySelector('.popup_card-add');
const popupGallery = document.querySelector('.popup_gallery');
const popupImg = popupGallery.querySelector('.popup__img');
const popupCaption = popupGallery.querySelector('.popup__caption');
const openEditBtn = document.querySelector('.profile__edit-btn');
const openAddBtn = document.querySelector('.profile__add-btn');
const closePopupBtn = document.querySelectorAll('.popup__btn-close');
// Переменные form и input
const editFormElement = popupProfile.querySelector('.popup__edit-form');
const addFormElement = popupAddCard.querySelector('.popup__add-form');
const nameInput = editFormElement.querySelector('.popup__text-input_profile_name');
const jobInput = editFormElement.querySelector('.popup__text-input_profile_job');
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
const onOpen = (popup) => {
  popup.classList.add('popup_opened');
};

const onClose = (popup) => {
  popup.classList.remove('popup_opened');
};

openEditBtn.addEventListener('click', () => {
  onOpen(popupProfile);
});

openAddBtn.addEventListener('click', () => {
  onOpen(popupAddCard);
});

closePopupBtn.forEach((btn) => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => onClose(popup));
});

// Сохранить данные профиля
function editFormSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  onClose(popupElem);
};

editFormElement.addEventListener('submit', editFormSubmitHandler);

// Функция лайка
const likeHandler = (evt) => {
  evt.target.classList.toggle('card__like-btn_active');
};

// Функция удаления
const deleteHandler = (evt) => {
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

  const likeBtn = cardElem.querySelector('.card__like-btn');
  likeBtn.addEventListener('click', likeHandler);

  const deleteBtn = cardElem.querySelector('.card__delete-btn');
  deleteBtn.addEventListener('click', deleteHandler);

  // Открытие картинки карточки
  const openImgCardHandler = () => {
    popupImg.src = cardImg.src;
    popupImg.alt = cardTitle.textContent;
    popupCaption.textContent = cardTitle.textContent;
    onOpen(popupGallery);
  }
  cardImg.addEventListener('click', openImgCardHandler);

  return cardElem;
};

const renderCard = (card) => {
  galleryCards.prepend(generateCard(card));
};

initialCards.forEach((card) => {
  renderCard(card);
})

// Создание и сохранение карточки
function addFormSubmitHandler (evt) {
  evt.preventDefault();
  renderCard({name: cardNameInput.value, link: cardSrcInput.value});
  onClose(popupAddCard);
  addFormElement.reset();
}

addFormElement.addEventListener('submit', addFormSubmitHandler);
