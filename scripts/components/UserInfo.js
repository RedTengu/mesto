export default class UserInfo {
  constructor({name, job}) {
    this._name = name;
    this._job = job;
  }

  getUserInfo() {
    const userData = { name: this._name.textContent, job: this._job.textContent };
    return userData;
  }

  setUserInfo(newUserValues) {
    this._name.textContent = newUserValues.name;
    this._job.textContent = newUserValues.job;
  }
}
