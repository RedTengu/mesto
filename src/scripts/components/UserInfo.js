export default class UserInfo {
  constructor({name, about, avatar}) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
  }

  getUserInfo() {
    const userData = { name: this._name.textContent, about: this._about.textContent, avatar: this._avatar.src };
    return userData;
  }

  setUserInfo(newUserValues) {
    this._name.textContent = newUserValues.name;
    this._about.textContent = newUserValues.about;
  }

  setAvatar(newAvatar) {
    this._avatar.src = newAvatar.avatar;
  }
}
