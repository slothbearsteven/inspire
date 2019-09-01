

export default class img {
  constructor(data) {
    this.url = data.url

  }

  template() {
    return `${this.url}`
  }
}
