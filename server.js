const express = require('express');
const jwt = require('jsonwebtoken');
const { join } = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const projectRoutes = require('./routes/projectRouter');
const categoryRoutes = require('./routes/categoryRouter');
const authorizationRoutes = require('./routes/authorizationRouter');
const { notFound, catchErrors } = require('./middlewares/errors');

const app = express();

//database
const database = require('./config/database');

app.set('port', process.env.PORT || 8080);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/authorization', authorizationRoutes);


if (process.env.MODULE === 'production') {
  app.use(express.static(join(__dirname, 'client/build')));
  app.get('*', (req, res) =>{
    res.sendFile(join(__dirname, 'client/build', 'index.html'));
  })
}
//handling errors
app.use(notFound);
app.use(catchErrors);

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
