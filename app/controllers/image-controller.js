import ImageService from "../services/image-service.js";

const _is = new ImageService()

function draw() {
  document.getElementById('bg-image').style.backgroundImage = "url(${_is.Image.template})"
}
//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    _is.addSubscriber('image', draw)
    _is.getImage()
  }


}

