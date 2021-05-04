const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('<h1>Hello ffrom the other side</h1>')
})

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,'../', 'public', '404.html'))
})

module.exports = router