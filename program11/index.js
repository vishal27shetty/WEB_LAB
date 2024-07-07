const mysql = require('mysql');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
});

// Connect to the MySQL server
connection.connect((err) => {
    if (err) {
        return console.error('Error connecting to the MySQL server:', err);
    }
    console.log('Connected to the MySQL server.');

    // Create a new database
    connection.query('CREATE DATABASE IF NOT EXISTS school', (err, result) => {
        if (err) throw err;
        console.log('Database created or already exists.');

        // Use the new database
        connection.query('USE school', (err, result) => {
            if (err) throw err;

            // Create a new table
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS students (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    age INT NOT NULL,
                    grade VARCHAR(10) NOT NULL
                )
            `;
            connection.query(createTableQuery, (err, result) => {
                if (err) throw err;
                console.log('Table created or already exists.');

                // Insert values into the table
                const insertQuery = `
                    INSERT INTO students (name, age, grade)
                    VALUES ('John Doe', 18, 'A'),
                           ('Jane Smith', 20, 'B'),
                           ('Alice Johnson', 19, 'A')
                `;
                connection.query(insertQuery, (err, result) => {
                    if (err) throw err;
                    console.log('Values inserted.');

                    // Select values from the table
                    connection.query('SELECT * FROM students', (err, results) => {
                        if (err) throw err;
                        console.log('Selected values:');
                        console.log(results);

                        // Update values in the table
                        const updateQuery = `
                            UPDATE students
                            SET grade = 'A+'
                            WHERE name = 'Jane Smith'
                        `;
                        connection.query(updateQuery, (err, result) => {
                            if (err) throw err;
                            console.log('Values updated.');

                            // Delete values from the table
                            const deleteQuery = `
                                DELETE FROM students
                                WHERE name = 'Alice Johnson'
                            `;
                            connection.query(deleteQuery, (err, result) => {
                                if (err) throw err;
                                console.log('Values deleted.');

                                // Close the connection
                                connection.end((err) => {
                                    if (err) throw err;
                                    console.log('Connection closed.');
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
