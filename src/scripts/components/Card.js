export default class Card {
  constructor(cardParameter, templateSelector, handleCardClick, like, dislike, handleDeleteCard, myId) {
    // Прием объекта параметров карточек
    this._name = cardParameter.name;
    this._link = cardParameter.link;
    this.idCard = cardParameter._id;
    this._ownerId = cardParameter.owner._id;
    this._likes = cardParameter.likes;
    // Прием шаблона карточек
    this._templateSelector = templateSelector;
    // Получение элементов шаблона
    this._element = this._getTemplate();
    this._likeBtn = this._element.querySelector('.card__like-btn');
    this._likeCount = this._element.querySelector('.card__like-count');
    this._deleteBtn = this._element.querySelector('.card__delete-btn');
    this._cardTitle = this._element.querySelector('.card__title');
    this._cardImg = this._element.querySelector('.card__img');
    // Функция открывающая попап картинки
    this._handleCardClick = handleCardClick;
    // Функции лайка
    this._like = like;
    this._dislike = dislike;
    // Функция удаления
    this._handleDeleteCard = handleDeleteCard;
    // Мой ID
    this._myId = myId;
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

  // Поставить или убрать активный лайк
  handleLikeClick() {
    this._likeBtn.classList.toggle('card__like-btn_active');
  }

  // Обновить счетчик лайков
  likeCounter(data) {
    this._likeCount.textContent = data.likes.length;
  }

  // Удаление карточки из DOM
  handleDeleteCardDom() {
    this._element.remove();
    this._element = null;
  }

  _hideDeleteBtn() {
    if (this._ownerId !== this._myId) {
      this._deleteBtn.remove();
      this._deleteBtn = null;
    }
  }

  // Проверка активного лайка
  _likeCheck() {
    this._likes.some(like => like._id === this._myId)
      ? this._likeBtn.classList.add("card__like-btn_active")
      : null;
  }

  // Добавить слушатели для лайка, удаления и popup
  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => {
      this._likeBtn.classList.contains('card__like-btn_active')
        ? this._dislike(this)
        : this._like(this)
    });

    this._deleteBtn
      ? this._deleteBtn.addEventListener("click", () => this._handleDeleteCard(this))
      : null;


    this._cardImg.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  // Генерация карточки
  generateCard() {
    this._cardTitle.textContent = this._name;
    this._cardImg.src = this._link;
    this._cardImg.alt = this._cardTitle.textContent;
    this._likeCount.textContent = this._likes.length;

    this._setEventListeners();

    this._likeCheck();

    this._hideDeleteBtn();

    return this._element;
  }
}

