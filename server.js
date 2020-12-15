const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//app.use(bodyParser.urlencoded({ extended: true})a);

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

//Gets ready for production

    app.use(express.static('client/build'));


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
