const http =require('http')

http.createServer((req, res) => {
  //write a respose
  res.write('<h1>Hello World</h1>')
  res.end()
}).listen(5000, () => console.log("Server is running on port 5000..."))