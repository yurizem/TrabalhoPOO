const fs = require('fs')

console.log(1)

function callback(err, conteudo) {
    console.log(err, String(conteudo))
}

fs.readFile('./text.txt', callback)

console.log(2)

console.log(3)