
const express = require('express');
const morgan = require('morgan');
const { Prohairesis } = require("prohairesis");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const router = express.Router();
const db = require('../hope');
router.get('/form', function (req, res, next) {
    res.render('contact');
});
dotenv.config();

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

connection.query('INSERT INTO hope.contact(id, firstName, lastName, email, phone, message) VALUES (1, Sammie, Stephenson, sstephenson@r2hstudent.org, 7047755693, "hello world") ', (err, rows) => {
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

const sqlString = process.env.CLEARDB_DATABASE_URL;
const database = new Prohairesis(sqlString);

app
    .use(morgan("dev"))
    .use(express.static('public'))

    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    .get('/api/user', async (req, res) => {

    })

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
    var sql = 'INSERT INTO hope.contact SET ?';
    db.query(sql, userDetails, function (err, data) {
        if (err) throw err;
        console.log("Contact data is inserted successfully ");
    });
    res.redirect('/contact/form');  // redirect to user form page after inserting the data
});
module.exports = router;

app.get("/", (req, res) => {
    connection.query('SELECT * from hope.contact LIMIT 1', (err, rows) => {
        if (err) throw err;
        console.log('The data from users table are: \n', rows);
        connection.end();
    });
});

