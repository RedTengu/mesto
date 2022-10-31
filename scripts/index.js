// Открытие и закрытие popup
const openPopupBtn = document.querySelector('.profile__btn_edit');
const popupElem = document.querySelector('.popup');
const closePopupBtn = popupElem.querySelector('.popup__btn-close');

const onOpen = (popup) => {
  popup.classList.add('popup_opened');
};

const onClose = (popup) => {
  popup.classList.remove('popup_opened');
};

openPopupBtn.addEventListener('click', () => {
  onOpen(popupElem);
});

closePopupBtn.addEventListener('click', () => {
  onClose(popupElem);
});

// Форма профиля и редактирование
const formElement = popupElem.querySelector('.popup__form');

const nameInput = formElement.querySelector('.popup__name-input');
const jobInput = formElement.querySelector('.popup__job-input');

const nameProfile = document.querySelector('.profile__nickname');
const jobProfile = document.querySelector('.profile__bio');

nameInput.value = nameProfile.textContent;
jobInput.value = jobProfile.textContent;

function formSubmitHandler (evt) {
    evt.preventDefault();

    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    onClose(popupElem)
}

formElement.addEventListener('submit', formSubmitHandler);
