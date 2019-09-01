export default class Image {
  constructor(data) {
    this.url = data.url
  }

  template() {
    return "${this.url}"
  }
}
// document.getElementById('bg-image').style.backgroundImage =