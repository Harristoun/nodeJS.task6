const fs = require('fs')
const text = 'lorem ipsum :)';


fs.writeFile( 'lorem.txt', 'text', function(err, data) {
    if (err) {
        console.log('eror')
    }
    else {
    console.log('Файл удален')}
})
// тут должен быть код, который сохранит текст из переменной в файл lorem.txt 
