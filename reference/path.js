const path = require('path')

// basename
console.log('basename: ', path.basename(__filename))

// directory
console.log('basename: ', path.dirname(__filename))

//file extension
console.log('filext: ', path.extname(__filename));

// creating a path object
console.log('path obj: ', path.parse(__filename));

// concat path
console.log('path concat: ', path.join(__dirname, 'test', 'hello.html'));