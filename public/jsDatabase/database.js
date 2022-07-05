
const express = require('express');
const router = express.Router();
const db = require('../hope');
router.get('/form', function (req, res, next) {
    res.render('contact');
});

const app = express();

const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost', // Replace with your host name
    user: 'root',      // Replace with your database username
    password: '',
    database: 'hope',
    port: '3306'
});

conn.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});

connection.query('INSERT INTO contact(id, firstName, lastName, email, phone, message) VALUES (1, Sammie, Stephenson, sstephenson@r2hstudent.org, 7047755693, "hello world") ', (err, rows) => {
    if (err) {
        throw err
    } else {
        console.log("Data sent");
        console.log(rows)
    }
})

const PORT = process.env.PORT || 3306;
app.listen(PORT);

console.log("App is listening on port " + port);

app.get('/', (req, res) => {
    res.send('got it')
})

module.exports = conn;

app.listen(3306, () => {
    console.log('Server is running at port 3306');
});

router.post('/create', function (req, res, next) {

    // store all the user input data
    const userDetails = req.body;

    // insert user data into users table
    var sql = 'INSERT INTO contact SET ?';
    db.query(sql, userDetails, function (err, data) {
        if (err) throw err;
        console.log("Contact data is inserted successfully ");
    });
    res.redirect('/contact/form');  // redirect to user form page after inserting the data
});
module.exports = router;

app.get("/", (req, res) => {
    connection.query('SELECT * from contact LIMIT 1', (err, rows) => {
        if (err) throw err;
        console.log('The data from users table are: \n', rows);
        connection.end();
    });
});

