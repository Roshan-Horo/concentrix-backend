import asyncHandler from 'express-async-handler'
import Graph from '../model/graphModel.js'

const getData = asyncHandler(async(req,res) => {
    const data = await Graph.find()

    res.json(data)
})

export {
    getData
} 