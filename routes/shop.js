const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('<h1>Hello ffrom the other side</h1>')
})

// router.use('/add-products', (req, res) => {
//   res.send(`
//   <form action="/product" method="POST">
//     <input type="text" name="title" /> 
//     <button type="submit">SEND</button>
//   </form>
//   `)
// })

// router.post('/product', (req, res) => {
//   console.log(req.body);
//   res.redirect('/')
// })

router.get("*", (req, res) => {
  console.log("yoyoyoyo");
  res.sendFile(path.join(__dirname,'../', 'public', '404.html'))
})

module.exports = router