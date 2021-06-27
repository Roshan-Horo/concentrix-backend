import mongoose from 'mongoose'

const graphSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    key: [String],
    value: [Number]
},{timestamps: true})

const Graph = mongoose.model('Graph',graphSchema)

export default Graph