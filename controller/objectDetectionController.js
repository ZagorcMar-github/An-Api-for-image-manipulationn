const detectionServices = require('../services/objectDetection')
const path = require("path")
const fs = require('fs');

exports.peopleDetector = async (req, res) => {
    try {
        const img = req.files.image;
        const logedImg = await detectionServices.detectPeople(img.data)

        res.status(201).json({ status: true, data: logedImg })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: "Internal server error" });

    }
}