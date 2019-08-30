
export default class Quote {
  constructor(data) {
    this.body = data.body,
      this.author = data.author
  }
  get Template() {
    return `
<h1>"${this.body}"</h1>
<small>-${this.author}</small>
    `
  }

}