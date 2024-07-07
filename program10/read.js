const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,"input.txt")
fs.readFile(filePath,'utf-8',(err, data)=>{
    if(err) {
        console.log("Error reading the file",err); return;
    }
    console.log('File contents are:')
    console.log(data);
});