const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

//Routers
const indexRouter = require('./routes/index.route');
const registerRouter = require('./routes/register.route');

const port = 3000;

//Set view engine
app.set('views', './views');
app.engine('handlebars', handlebars({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');

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
