
const express = require('express');
const path = require('path')
const fssync = require( 'fs' )

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./controllers/routes/apiRoutes')(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}` + " The Base direcotry is = " + " " + __dirname );
});

