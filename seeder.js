import dotenv from 'dotenv'
import entries from './data/graph.js'
import Graph from './model/graphModel.js'

import connectDB from './config/db.js'

// config
dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Graph.deleteMany()

        await Graph.insertMany(entries)
        console.log('Data Imported!')
        process.exit(1)
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Graph.deleteMany()

        console.log('Data Destroyed!')
        process.exit()

    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
       
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}