const tf = require('@tensorflow/tfjs-node');
const cocoSsd = require('@tensorflow-models/coco-ssd');
const { createCanvas, loadImage } = require('canvas');


//const fs = require('fs');


const modelPromise = cocoSsd.load();


class objectDetector {
  static async detectPeople(buffer) {
    console.log(buffer)
    const canvas = createCanvas();
    const context = canvas.getContext("2d")
    const img = await loadImage(buffer)
    
    //console.log("came to")
    
    //console.log("came to2")
    let peopleCounter=0;
    canvas.width = img.width
    canvas.height = img.height
    context.drawImage(img, 0, 0);
    const model = await modelPromise;
    const tensor = tf.browser.fromPixels(canvas);
    const predictions = await model.detect(tensor);

    //console.log("______________________")
    //console.log(predictions);
    //console.log("______________________")

    context.font = '18px Arial';
    context.lineWidth = 2;
    context.strokeStyle = '#00FF00';
    context.fillStyle = '#00FF00';
    predictions.forEach(prediction => {
      if (prediction.class == "person" ){
        peopleCounter++
      }
      const [x, y, width, height] = prediction.bbox;
      context.strokeRect(x, y, width, height);
      context.fillText(prediction.class, x, y - 5);
    });
    //console.log(canvas.toBuffer())
    const dataUrl = canvas.toDataURL()

    //fs.writeFileSync("output.png", buffer)
    return {dataUrl,peopleCounter}
  }

}

module.exports = objectDetector