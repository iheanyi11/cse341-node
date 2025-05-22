const express = require('express');
const mongodb = require('./data/database.js');
const app = express();
const bodyparser = require('body-parser');

const PORT = process.env.PORT || 3000;
app.use(bodyparser.json());

app.use('/', require('./routes/index.js'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(PORT, () => {console.log(`Database is connected and Server is running on port ${PORT}`)});
    }
});


