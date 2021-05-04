const express = require('express')
const path = require('path')
const showRouters = require('./routes/shop')

const app = express()

// middlewares
// app.use((req, res, next) => {
//   console.log("In the first middleware");
//   next()
// })

// app.use('/hello', (req, res, next) => {
//   console.log("In the second middleware");
//   res.send('<h1>Hello from Express.js</h1>')
// })

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


app.use('/add-products', (req, res) => {
  res.send(`
  <form action="/product" method="POST">
    <input type="text" name="title" /> 
    <button type="submit">SEND</button>
  </form>
  `)
})

app.post('/product', (req, res) => {
  console.log(req.body);
  res.redirect('/')
})

// route
app.use(showRouters)

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,'../', 'public', '404.html'))
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
