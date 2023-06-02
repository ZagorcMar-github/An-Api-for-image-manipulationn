const manipulationServices = require("../services/imgManipulation")



exports.resizeImg = async (req, res) => {
    try {
        const img = req.files.image;
        if (req.body.width === "" || req.body.height === "") {
            res.status(400).send({
                "error": {
                    "status": 400,
                    "title": "Bad syntax",
                    "message": "Please ensure that you have a value in height or witdh."
                }
            })
        }
        else {
            inputcheck = await checkForIncorrectValues(req.body.width, req.body.height)

            if (!inputcheck) {
                res.status(400).send({
                    "error": {
                        "status": 400,
                        "title": "Bad syntax",
                        "message": "Please ensure that you have entered only numbers in the width or height parameter."
                    }
                })
            } else {
                const width = parseFloat(req.body.width)
                const height = parseFloat(req.body.height)


                const logedImg = await manipulationServices.resize(img.data, width, height)
                res.status(201).json({ status: true, data: logedImg })

            }
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: "Internal server error" });

    }
}
exports.applyTint = async (req, res) => {
    try {
        const img = req.files.image;
        inputcheck = await checkForIncorrectValues(req.body.r, req.body.g, req.body.b)
        if (!inputcheck) {
            res.status(400).send({
                "error": {
                    "status": 400,
                    "title": "Bad syntax",
                    "message": "Please ensure that you have entered only numbers in the r,g,b parameters."
                }
            })
        } else {
            const r = parseFloat(req.body.r)
            const g = parseFloat(req.body.g)
            const b = parseFloat(req.body.b)
            //console.log(imgType);

            const logedImg = await manipulationServices.applytint(img.data, r, g, b)

            res.status(201).json({ status: true, data: logedImg })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: "Internal server error" });

    }
}
exports.getMetadataImg = async (req, res) => {
    try {
        const img = req.files.image;
        //console.log(imgType);

        const logedtext = await manipulationServices.getMetadata(img.data)

        res.status(201).json({ status: true, data: logedtext })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: "Internal server error" });

    }
}
async function checkForIncorrectValues(...value) {
    value.forEach((value) => {
        console.log(value)
        console.log(+value)
        console.log(+value == NaN)
        if (+value == NaN) {
            return false
        }
    })
    return true;

}