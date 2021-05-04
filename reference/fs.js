const fs = require('fs')
const path = require('path')

//create a folder
// fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
//   if(err) throw err
//   console.log('Folder Created');
// })

// create and write to file
// fs.writeFileSync(path.join(__dirname, 'test', 'hello.txt'), 'Hello Node.JS again', (err) => {
//   if (err) throw err
//   console.log('File Created');
// })

// //append to file
// fs.writeFileSync(path.join(__dirname, 'test', 'hello.txt'), 'Hello Node.JS', (err) => {
//   if (err) throw err
//   console.log('File Created');

//   //File append
//   fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), "\n... it is me again", (err) => {
//     if (err) throw err
//     console.log("FILE APPENDED");
//   })
// })

//read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err
  console.log(data);
})

//rename a file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  (err) => {
    if (err) throw err
    console.log("file renamed");
  },
  'utf8',

)