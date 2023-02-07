// Добавить catch

export default class Api {
  constructor({ url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  _isResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getProfileInfo() {
    return fetch(`${this._url}/users/me`, { headers: this._headers })
      .then(res => this._isResponse(res))
  }

  // доработать конфиг
  patchProfileInfo({ name, about }) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: '8cad75dc-294a-45e1-b4c2-e3d2ab3b0f9d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        about
      })
    })
    .then(res => this._isResponse(res))
  }

  patchAvatar({ avatar }) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: '8cad75dc-294a-45e1-b4c2-e3d2ab3b0f9d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar
      })
    })
    .then(res => this._isResponse(res))
  }

  getCardsData() {
    return fetch(`${this._url}/cards`, { headers: this._headers })
      .then(res => this._isResponse(res))
  }

  postNewCard({ name, link }) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: '8cad75dc-294a-45e1-b4c2-e3d2ab3b0f9d',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        link
      })
    })
    .then(res => this._isResponse(res))
  }

  deleteThisCard(idCard) {
    return fetch(`${this._url}/cards/${idCard}`, {
      method: 'DELETE',
      headers: {
        authorization: '8cad75dc-294a-45e1-b4c2-e3d2ab3b0f9d',
        'Content-Type': 'application/json'
      }
    })
    .then(res => this._isResponse(res))
  }

  putLike(idCard) {
    return fetch(`${this._url}/cards/${idCard}/likes`, {
      method: 'PUT',
      headers: {
        authorization: '8cad75dc-294a-45e1-b4c2-e3d2ab3b0f9d',
        'Content-Type': 'application/json'
      }
    })
    .then(res => this._isResponse(res))
  }

  deleteLike(idCard) {
    return fetch(`${this._url}/cards/${idCard}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: '8cad75dc-294a-45e1-b4c2-e3d2ab3b0f9d',
        'Content-Type': 'application/json'
      }
    })
    .then(res => this._isResponse(res))
  }
}
