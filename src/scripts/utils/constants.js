// Контейнер карточек
const galleryCards = document.querySelector('.gallery__cards');
// Popups
const popupGallery = document.querySelector('.popup_gallery');
const popupProfile = document.querySelector('.popup_profile');
const popupAddCard = document.querySelector('.popup_card-add');
// Кнопки popup
const btnEdit = document.querySelector('.profile__edit-btn');
const btnAdd = document.querySelector('.profile__add-btn');
// Forms и inputs
const formEditProfile = popupProfile.querySelector('.popup__edit-form');
const formAddCard = popupAddCard.querySelector('.popup__add-form');
const nameInput = formEditProfile.querySelector('.popup__text-input_profile_name');
const jobInput = formEditProfile.querySelector('.popup__text-input_profile_job');
const cardNameInput = document.querySelector('.popup__text-input_card_name');
const cardSrcInput = document.querySelector('.popup__text-input_card_src');
// Данные профиля
const nameProfile = document.querySelector('.profile__nickname');
const jobProfile = document.querySelector('.profile__bio');

export {galleryCards,
        popupGallery,
        popupProfile,
        popupAddCard,
        btnEdit,
        btnAdd,
        formEditProfile,
        formAddCard,
        nameInput,
        jobInput,
        cardNameInput,
        cardSrcInput,
        nameProfile,
        jobProfile}
