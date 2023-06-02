const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors')
const objectDetectionRouter = require('./routers/objectDetectionRoute')
const imgManipulationRouter = require('./routers/imgManiulationRouter')
const app = express();
const fileupload = require('express-fileupload');
apiKey="Educational"
const checkApiKey = (req, res, next) => {
    const apiKeyHeader = req.headers['api-key'];
    if (apiKeyHeader === apiKey) {
      next();
    } else {
      res.status(403).send({ error: { status: 403,title: 'invalid key', message: 'Invalid API key' } });
    }
  };

app.use(fileupload())
app.use(body_parser.json());
app.use(cors());
app.use(checkApiKey);

app.use((req, res, next) => {
    const allowedExtension = ['jpg', 'png', 'gif']
    const max_size = 1024 * 1024 * 5
    const img = req.files.image;
    imgType = getImageType(img.data)

    //console.log(imgType);
    if (img.size > max_size) {
        console.log("came to1")
        return res.status(413).send({"error": {
            "status": 413,
            "title": "Bad Request",
            "message": "img exceded maximum size."
          }});
    }
    if (!allowedExtension.includes(imgType)) {
        console.log("came to2")
        return res.status(422).send({"error": {
            "status": 422,
            "title": "Bad Request",
            "message": "The provided image is not in the correct format. Please provide a valid image in JPEG or PNG format."
          }});
    }; next()
})
app.use('/', objectDetectionRouter,imgManipulationRouter)//app uporablja router kjer imamo vse api klice


function getImageType(buffer) {
    const signature = buffer.slice(0, 4).toString('hex');
    console.log("signature; " + signature)
    const signatures = {
        '89504e47': 'png',
        '47494638': 'gif',
        'ffd8ffe0': 'jpg',
        'ffd8ffe1': 'jpg',
        'ffd8ffe2': 'jpg',
        'ffd8ffdb': 'jpg'
    };

    return signatures[signature] || 'unknown';
}

module.exports = app; //exportamo app da ga lahko upoabljamo druglje v projektu predvsem v indexu app je express strežnik vidno 8 linija kode