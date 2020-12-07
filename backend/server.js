const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");
})

const attractionRouter = require('./routes/attractions');
const mailRouter = require('./routes/mail');
const { request } = require('express');

app.use('/attractions', attractionRouter);
app.use('/mail', mailRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// app.post('/contact', (req, res) => {
//     const { firstname, lastname, email } = req.body;

//     if (!firstname || !lastname || !email) {
//         return;
//     }

//     const options = {
//         url: '',
//         method: 'POST',
//         headers: {
//             Authorization: ''
//         },
//         body: postData
//     }

//     request(options, (err, response, body) => {

//     });
// })