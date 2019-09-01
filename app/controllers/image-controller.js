import ImageService from "../services/image-service.js";

const _is = new ImageService()
let template = _is.Img.template
function draw() {

  document.getElementById('bg-image').style.backgroundImage = `url('${template}')`
}
//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    _is.addSubscriber('image', draw)
    _is.getImage()
    console.log(_is.Img)
  }


}

