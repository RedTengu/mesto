import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);

    this._popupImg = this._popup.querySelector('.popup__img');
    this._popupCaption = this._popup.querySelector('.popup__caption');
  }

  openPopup(name, link) {
    this._popupImg.src = link;
    this._popupImg.alt = name;
    this._popupCaption.textContent = name;

    super.openPopup();
  }
}
