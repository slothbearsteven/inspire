
export default class Quote {
  constructor(data) {
    this.body = data.quote.body,
      this.author = data.quote.author
  }
  get Template() {
    return `
<h1>"${this.body}"</h1>
<small>-${this.author}</small>
    `
  }

}