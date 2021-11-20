const fs = require('fs')
const path = require('path')

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
//   if (err) throw err
//   console.log('Folder created...')
// })

// Create and write to file
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World!',
//   function (err) {
//     if (err) throw err
//     console.log('File written to...')

//     // File Append
//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       ' I love Node.js',
//       function (err) {
//         if (err) throw err
//         console.log('File written to...')
//       }
//     )
//   }
// )

// Read File
// fs.readFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'utf8',
//   function (err, data) {
//     if (err) throw err
//     console.log(data)
//   }
// )

// Rename File
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloWorld.txt'),
  function (err) {
    if (err) throw err
    console.log('File renamed...')
  }
)
