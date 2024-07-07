const fs = require('fs');

// Create and write to a file
fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('File created and written to!');

    // Read the file
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);

        // Append to the file
        fs.appendFile('example.txt', ' How are you?', (err) => {
            if (err) throw err;
            console.log('File updated!');

            // Read the updated file
            fs.readFile('example.txt', 'utf8', (err, updatedData) => {
                if (err) throw err;
                console.log('Updated file content:', updatedData);

                // Delete the file
                //fs.unlink('example.txt', (err) => {
                   // if (err) throw err;
                   // console.log('File deleted!');
                //});
            });
        });
    });
});

