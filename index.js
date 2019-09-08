const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const bcrypt = require('bcryptjs');
const mongodb = require('mongodb');
const mongoose = require('mongoose');

const db = mongoose.connection;
const app = express();
const port = 3000;

//Routers
const indexRouter = require('./routes/index.route');
const registerRouter = require('./routes/register.route');

//Set view engine
app.set('views', './views');
app.engine('handlebars', handlebars({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');

app.use(flash());

app.use('/', indexRouter);
app.use('/register', registerRouter);

//Handle Error
app.use((req, res, next) => {
	var err = new Error('Not Found!!!');
	err.status = 404;
	next(err);
})

app.listen(port, () => {
	console.log(`Server is running at port ${port}`);
})
