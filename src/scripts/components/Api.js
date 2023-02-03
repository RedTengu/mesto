export default class Api {
  constructor({ url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  _isResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`)
  }

  getInitialCards() {
    fetch(`${this._url}/cards`, { headers: this._headers })
      .then(res => this._isResponse(res))
  }
}
