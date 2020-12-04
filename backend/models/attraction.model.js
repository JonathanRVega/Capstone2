const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attractionSchema = new Schema({
    name: { type:String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    zipcode: { type: Number, required: [true, 'The zipcode has to be 5 numbers'], min: 10000, max: 99999},
    website: { 
        type: String,
        validate: {
            validator: function(v) {
                return /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
                .test(v);
            },
            message: props => `${props.value} is not a valid website address!`
        },
    },
    imageUrl: { type: String} 
    }, {
    timestamps: true,
});

const Attraction = mongoose.model('Attraction', attractionSchema);

module.exports = Attraction;