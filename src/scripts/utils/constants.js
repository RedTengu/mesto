// Контейнер карточек
const galleryCards = document.querySelector('.gallery__cards');
// Popups
const popupGallery = document.querySelector('.popup_gallery');
const popupProfile = document.querySelector('.popup_profile');
const popupAddCard = document.querySelector('.popup_card-add');
const popupAvatar = document.querySelector('.popup_avatar');
// Кнопки popup
const btnEdit = document.querySelector('.profile__edit-btn');
const btnAdd = document.querySelector('.profile__add-btn');
const btnEditAvatar = document.querySelector('.profile__avatar-container')
// Forms и inputs
const formEditProfile = popupProfile.querySelector('.popup__edit-form');
const formAddCard = popupAddCard.querySelector('.popup__add-form');
const formEditAvatar = popupAvatar.querySelector('.popup__avatar-form');
const nameInput = formEditProfile.querySelector('.popup__text-input_profile_name');
const jobInput = formEditProfile.querySelector('.popup__text-input_profile_job');
const cardNameInput = document.querySelector('.popup__text-input_card_name');
const cardSrcInput = document.querySelector('.popup__text-input_card_src');
const avatarSrcInput = formEditAvatar.querySelector('.popup__text-input_avatar_src')
// Данные профиля
const nameProfile = document.querySelector('.profile__nickname');
const jobProfile = document.querySelector('.profile__bio');
const avatarProfile = document.querySelector('.profile__avatar');
// Мой ID
const myId = 'aa987f88a1121c65fec9b7b3';

export {galleryCards,
        popupGallery,
        popupProfile,
        popupAddCard,
        btnEdit,
        btnAdd,
        btnEditAvatar,
        formEditProfile,
        formAddCard,
        formEditAvatar,
        nameInput,
        jobInput,
        cardNameInput,
        cardSrcInput,
        avatarSrcInput,
        nameProfile,
        jobProfile,
        avatarProfile,
        popupAvatar,
        myId}
