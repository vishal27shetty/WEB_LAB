const mysql = require('mysql');
 const connection = mysql.createConnection({
    host:'localhost',
    user:'root'
 });
  connection.connect((err)=>{
    if(err) {
        return console.error('Error connecting to the MySQL server',err);
    }
    console.log('Connected to MySQL server');

    connection.query('CREATE DATABASE IF NOT EXISTS school', (err,resul)=>{
        if(err) throw err;
        console.log("Database created or already exists");
    });

    connection.query('USE school', (err,results)=>{
        if(err) throw err;
        const createTableQuery = `
        CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            age INT NOT NULL,
            grade VARCHAR(10) NOT NULL
        )
        `;
    connection.query(createTableQuery,(err,results)=>{
        if(err) throw err;
        console.log("Table created or already exists");
        });

    const insertQuery = `
        INSERT INTO students (name,age,grade)
        VALUES ('john',18,'A'),
         ('smith',19,'B'),
       ('finona',20,'C')
    `;

    connection.query(insertQuery,(err,results)=>{
        if(err) throw err;
        console.log("Values inserted");
        });
    connection.query('SELECT * FROM students',(err,results)=>{
        if(err) throw err;
        console.log("Selected displayed",results);
        });
    const updateQuery = `
        UPDATE students
        SET grade = 'A+'
        WHERE name= 'VISHAL R S'
    `;
    connection.query(updateQuery, (err, result) => { if (err) throw err;
        console.log('Values updated.');});
    const deleteQuery =    `
        DELETE FROM students
        WHERE name= 'Alice Johnson'
    `;
    connection.query(deleteQuery, (err, result) => { if (err) throw err;
        console.log('Values deleted.');});
        connection.end((err) => {
            if (err) throw err;
            console.log('Connection closed.');});
    })
  })