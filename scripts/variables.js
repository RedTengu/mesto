// Контейнер карточек
const galleryCards = document.querySelector('.gallery__cards');
// Popup
const popupGallery = document.querySelector('.popup_gallery');
const popupImg = popupGallery.querySelector('.popup__img');
const popupCaption = popupGallery.querySelector('.popup__caption');
const popupProfile = document.querySelector('.popup_profile');
const popupAddCard = document.querySelector('.popup_card-add');
// Кнопки popup
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

export {galleryCards,
        popupGallery,
        popupImg,
        popupCaption,
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
        jobProfile}
