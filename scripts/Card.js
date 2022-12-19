import initialCards from './initial-cards.js'
import galleryCards from './variables.js'

export class Card {
  constructor(cardParameter, templateSelector) {
    this._name = cardParameter.name;
    this._link = cardParameter.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.gallery__card-item')
      .cloneNode(true);

    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.card__title').textContent = this._name;
    this._element.querySelector('.card__img').src = this._link;

    return this._element;
  }
}

const renderCard = () => {
  initialCards.forEach(element => {
    const card = new Card(element, '.card-template');

    const cardElement = card.generateCard();

    galleryCards.append(cardElement);
  });
}

renderCard();
