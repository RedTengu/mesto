import {openPopup} from './utils/utils.js'
import {popupGallery, popupImg, popupCaption} from './constants.js'

export default class Card {
  constructor(cardParameter, templateSelector) {
    // Прием объекта параметров карточек
    this._name = cardParameter.name;
    this._link = cardParameter.link;
    // Прием шаблона карточек
    this._templateSelector = templateSelector;
    // Получение элементов шаблона
    this._element = this._getTemplate();
    this._likeBtn = this._element.querySelector('.card__like-btn');
    this._deleteBtn = this._element.querySelector('.card__delete-btn');
    this._cardTitle = this._element.querySelector('.card__title');
    this._cardImg = this._element.querySelector('.card__img');
  }

  // Получение шаблона из полученного параметра
  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.gallery__card-item')
      .cloneNode(true);

    return cardTemplate;
  }

  // Поставить или убрать лайк
  _handleLikeClick() {
    this._likeBtn.classList.toggle('card__like-btn_active');
  }

  // Удаление карточки
  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  // Открыть popup картинки
  _handleOpenImgPopup() {
    popupImg.src = this._cardImg.src;
    popupCaption.textContent = this._cardTitle.textContent;

    openPopup(popupGallery);
  }

  // Добавить слушатели для лайка, удаления и popup
  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => this._handleLikeClick());

    this._deleteBtn.addEventListener('click', () => this._handleDeleteClick());

    this._cardImg.addEventListener('click', () => this._handleOpenImgPopup());
  }

  // Генерация карточки
  generateCard() {
    this._cardTitle.textContent = this._name;
    this._cardImg.src = this._link;
    this._cardImg.alt = this._cardTitle.textContent;

    this._setEventListeners();

    return this._element;
  }
}

