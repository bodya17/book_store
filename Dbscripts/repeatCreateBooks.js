const exec = require('child_process').exec

 for (let i = 0; i < 100; i++) {
     exec('node createBooks.js')
 }