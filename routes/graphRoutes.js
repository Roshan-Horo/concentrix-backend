import express from 'express'
const router = express.Router()

import {getData} from '../controller/graphController.js'

// @desc    - Fetch all graph data
// @route   - GET /api/data
//@access   - Public 
router.get('/', getData)

export default router