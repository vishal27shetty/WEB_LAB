const fs = require('fs');
fs.writeFile('example.txt','Hello World !', (err)=> {
    if(err) throw err;
    console.log('File created and written to!:');

    fs.readFile('example.txt','utf-8',(err,data)=> {
        if (err) throw err;
        console.log('File content', data);
    });

    fs.appendFile('example.txt','utf-8',(err,updatedData)=> {
        if (err) throw err;
        console.log('Updated content are :', updatedData)
    });

    fs.unlink('example.txt', (err)=> {
        if(err) throw err;
        console.log('File deleted !');
    });

});