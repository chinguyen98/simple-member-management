const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

//Handle Error
app.use((req, res, next) => {
    var err = new Error('Not Found!!!');
    err.status = 404;
    next(err);
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})
