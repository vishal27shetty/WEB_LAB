const fs = require('fs');
const path = require('path');
// Specify the path to the text file
const filePath = path.join(__dirname, 'input.txt');
// Read the file
fs.readFile(filePath, 'utf8', (err, data) =>{
if (err) {
console.error('Error reading the file:', err);
return;
}
console.log('File contents:');
console.log(data);
});