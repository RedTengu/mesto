// Открытие и закрытие popup
const openPopupBtn = document.querySelector('.profile__edit-btn');
const popupElem = document.querySelector('.popup');
const closePopupBtn = popupElem.querySelector('.popup__btn-close');
const formElement = popupElem.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__text-input_profile_name');
const jobInput = formElement.querySelector('.popup__text-input_profile_job');
const nameProfile = document.querySelector('.profile__nickname');
const jobProfile = document.querySelector('.profile__bio');

const onOpen = (popup) => {
  popup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
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

function formSubmitHandler (evt) {
    evt.preventDefault();

    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    onClose(popupElem)
}

formElement.addEventListener('submit', formSubmitHandler);
