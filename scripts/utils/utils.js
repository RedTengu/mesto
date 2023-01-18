// Закрытие popup по клавише
// const handleEscClose = (evt) => {
//   if (evt.key === 'Escape') {
//     closePopup(document.querySelector('.popup_opened'));
//   };
// };

// // Закрытие popup по оверлею
// const handleOverlayClose = (evt) => {
//   if (evt.target === evt.currentTarget) {
//     closePopup(document.querySelector('.popup_opened'));
//   };
// };

// // Открытие и закрытие popup
// const openPopup = (popup) => {
//   popup.classList.add('popup_opened');

//   document.addEventListener('keydown', handleEscClose);

//   popup.addEventListener('click', handleOverlayClose);
// };

// const closePopup = (popup) => {
//   popup.classList.remove('popup_opened');

//   document.removeEventListener('keydown', handleEscClose);

//   popup.removeEventListener('click', handleOverlayClose);
// };

// export {openPopup, closePopup}
