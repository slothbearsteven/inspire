export default class todo {
  constructor(data) {
    this._id = data._id
    this.description = data.description
    this.completed = false || data.completed
  }
}