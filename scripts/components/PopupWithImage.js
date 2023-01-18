import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  openPopup() {
    const popupImg = this._popupSelector.querySelector('.popup__img');
    const popupCaption = this._popupSelector.querySelector('.popup__caption');

    popupImg.src = this._cardImg.src;
    popupCaption.textContent = this._cardTitle.textContent;
  }
}
