const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();
const port = 3000;

//Routers
const indexRouter = require('./routes/index.route');
const registerRouter = require('./routes/register.route');

//Set view engine
app.set('views', './views');
app.engine('handlebars', handlebars({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');

//Handle Flash
app.use(cookieParser());
app.use(session({ cookie: { maxAge: null }, secret: 'secret', name: 'session', resave: false, saveUninitialized: false }))
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
