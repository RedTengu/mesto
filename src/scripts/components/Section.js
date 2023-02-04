export default class Section {
  constructor({ renderer }, container) {
    this._renderer = renderer;
    this._container = container;
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }

  addInitialItems(element) {
    this._container.append(element);
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
