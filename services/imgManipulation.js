const sharp = require('sharp');// can conver to other formats and so on

class imgManipulator {
static async resize(img,width,height) {
    let newImg;
    newImg= await sharp(img)
    .resize({
      width: width,
      height: height
    }).toBuffer();

    const dataUrl = `data:image/jpeg;base64,${newImg.toString('base64')}`;

    return {dataUrl};

}
static async applytint(img,r,g,b) {
    let newImg;
    newImg= await sharp(img).tint({r: r, g: g, b: b}).toBuffer();
    const dataUrl = `data:image/jpeg;base64,${newImg.toString('base64')}`;
    return {dataUrl}
}
static async getMetadata(img) {
    const metadata = await sharp(img).metadata();
    return {metadata}
}
}
module.exports=imgManipulator