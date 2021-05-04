const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('<h1>Hello ffrom the other side</h1>')
})

module.exports = router