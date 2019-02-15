const fs = require('fs')
const path = require('path')

// 首先我们要给读取文件封装一个方法

// 函数中第一个参数是文件路径，第二个是一个回调函数，回调函数中第一个是错误的参数1，第二个是成功的参数
function getFiles(fpath, callback) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        if (err) return callback(err)
        callback(null, dataStr)
    })
}

getFiles(path.join(__dirname, './files/1.txt'), (err, dataStr) => {
    if (err) return console.log(err.message)
    console.log(dataStr)
})