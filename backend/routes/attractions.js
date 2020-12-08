const router = require('express').Router();
let Attraction = require('../models/attraction.model');

router.route('/').get((req,res) => {
    Attraction.find()
    .then(attractions => res.json(attractions))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const address = req.body.address;
    const zipcode = Number(req.body.zipcode);
    const website = req.body.website;
    const imageUrl = req.body.imageUrl;

    const newAttraction = new Attraction({
        name,
        description,
        address,
        zipcode,
        website,
        imageUrl
    });

    newAttraction.save()
    .then(() => res.json('New Cincinnati attraction added!'))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').get((req, res) => {
    Attraction.findById(req.params.id)
    .then(attraction => res.json(attraction))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').delete((req, res) => {
    Attraction.findByIdAndDelete(req.params.id)
    .then(() => res.json('Attraction deleted.'))
    .catch(err => res.status(400).json('Error" ' +err));
})

router.route('/update/:id').post((req, res) => {
    Attraction.findById(req.params.id)
    .then(attraction => {
        attraction.name = req.body.name;
        attraction.description = req.body.description;
        attraction.address = req.body.address;
        attraction.zipcode = Number(req.body.zipcode);
        attraction.website = req.body.website;
        attraction.imageUrl = req.body.imageUrl;

        attraction.save()
        .then(() => res.json('Attraction updated!'))
        .catch(err => res.status(400).json('Error: ' +err));
    })
    .catch(err => res.status(400).json('Error: ' +err))
})



// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + file.originalname);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         // rejects storing a file
//         cb(null, false);
//     }
// }

// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
// });

// /* 
//     stores image in uploads folder
//     using multer and creates a reference to the 
//     file
// */
// router.route("/uploadmulter")
//     .post(upload.single('imageData'), (req, res, next) => {
//         console.log(req.body);
//         const newImage = new Image({
//             imageName: req.body.imageName,
//             imageData: req.file.path
//         });

//         newImage.save()
//             .then((result) => {
//                 console.log(result);
//                 res.status(200).json({
//                     success: true,
//                     document: result
//                 });
//             })
//             .catch((err) => next(err));
//     });

// /*
//     upload image in base64 format, thereby,
//     directly storing it in mongodb datanase
//     along with images uploaded using firebase
//     storage
// */    
// router.route("/uploadbase")
//     .post((req, res, next) => {
//         const newImage = new Image({
//             imageName: req.body.imageName,
//             imageData: req.body.imageData
//         });

//         newImage.save()
//             .then((result) => {
//                 res.status(200).json({
//                     success: true,
//                     document: result
//                 });
//             })
//             .catch((err) => next(err));
//     });


module.exports = router;