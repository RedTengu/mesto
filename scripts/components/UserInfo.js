export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._name = nameSelector;
    this._job = jobSelector;
  }

  getUserInfo() {
    return { name: this._name, job: this._job }
  }

  setUserInfo(name, job) {
    this._name.textContent = name;
    this._job.textContent = job;
  }
}
