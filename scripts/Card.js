import {openPopup} from './index.js'
import {popupGallery, popupImg, popupCaption} from './variables.js'

export default class Card {
  constructor(cardParameter, templateSelector) {
    this._name = cardParameter.name;
    this._link = cardParameter.link;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
    this._likeBtn = this._element.querySelector('.card__like-btn');
    this._deleteBtn = this._element.querySelector('.card__delete-btn');
    this._cardTitle = this._element.querySelector('.card__title');
    this._cardImg = this._element.querySelector('.card__img');
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.gallery__card-item')
      .cloneNode(true);

    return cardTemplate;
  }

  _handleLikeClick() {
    this._likeBtn.classList.toggle('card__like-btn_active');
  }

  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  _handleOpenImgPopup() {
    popupImg.src = this._cardImg.src;
    popupCaption.textContent = this._cardTitle.textContent;

    openPopup(popupGallery);
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => this._handleLikeClick());

    this._deleteBtn.addEventListener('click', () => this._handleDeleteClick());

    this._cardImg.addEventListener('click', () => this._handleOpenImgPopup());
  }

  generateCard() {
    this._cardTitle.textContent = this._name;
    this._cardImg.src = this._link;
    this._cardImg.alt = this._cardTitle.textContent;

    this._setEventListeners();

    return this._element;
  }
}

