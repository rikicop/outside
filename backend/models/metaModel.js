const mongoose = require('mongoose')

const metaSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Por favor agregue texto']
    },
}, {
    timestamps: true,
}
)

module.exports = mongoose.model('Meta', metaSchema)