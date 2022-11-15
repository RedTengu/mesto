// Проверить точки с запятыми.
// Перенести все переменные.

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

// Popup
const popupElem = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_profile')
const popupAddCard = document.querySelector('.popup_card-add')
const openEditBtn = document.querySelector('.profile__edit-btn');
const openAddBtn = document.querySelector('.profile__add-btn')
const closePopupBtn = document.querySelectorAll('.popup__btn-close');

const formElement = popupElem.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__text-input_profile_name');
const jobInput = formElement.querySelector('.popup__text-input_profile_job');

const nameProfile = document.querySelector('.profile__nickname');
const jobProfile = document.querySelector('.profile__bio');

// Добавление value в popup профиля
const addValueProfile = () => {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

addValueProfile();

// Открытие и закрытие попапов
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
  const popup = btn.closest('.popup')
  btn.addEventListener('click', () => onClose(popup))
});

// Сохранить данные профиля
function formSubmitHandler (evt) {
    evt.preventDefault();

    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    onClose(popupElem)
}

formElement.addEventListener('submit', formSubmitHandler);

// Добавление карточек
const cardNameInput = document.querySelector('.popup__text-input_card_name')
const cardSrcInput = document.querySelector('.popup__text-input_card_src')

const cardTemplate = document.querySelector('.card-template')

const cardTitle = cardTemplate.querySelector('.card__title')
const cardImg = cardTemplate.querySelector('.card__img')




















// Сохранить данные карточки

// Функция лайка

const likeBtn = document.querySelectorAll('.card__like-btn')

likeBtn.forEach((btn) => {
  btn.closest('.card')
  btn.addEventListener('click', () => {
    btn.classList.toggle('card__like-btn_active')
  })
});
