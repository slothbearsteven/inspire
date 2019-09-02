export default class todo {
  constructor(data) {
    this._id = data._id
    this.description = data.description
    this.completed = false || data.completed
  }

  get template() {
    let template = `  <li>${this.description}<br>
    <button class="btn btn-dark" onclick="">Complete</button><button class="btn btn-danger" onclick="">delete</button>`

    if (this.completed == true) {
      template += `<p>Task Completed!</p>`
    }

    return template + `</li>`
  }
}