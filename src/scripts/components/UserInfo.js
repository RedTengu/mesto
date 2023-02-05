export default class UserInfo {
  constructor({name, about}) {
    this._name = name;
    this._about = about;
  }

  getUserInfo() {
    const userData = { name: this._name.textContent, about: this._about.textContent };
    return userData;
  }

  setUserInfo(newUserValues) {
    this._name.textContent = newUserValues.name;
    this._about.textContent = newUserValues.about;
  }
}
