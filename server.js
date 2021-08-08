const express = require('express');
const jwt = require('jsonwebtoken');
const { join } = require('path');
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/projectRouter');
const categoryRoutes = require('./routes/categoryRouter');
const autherizationRoutes = require('./routes/autherizationRouter');
const { notFound, catchErrors } = require('./middlewares/errors');

const app = express();

//database
const database = require('./config/database');

app.set('port', process.env.PORT || 8080);
if (process.env.MODULE === 'production') {
  app.use(express.static(join(__dirname, '../client/build')));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/autherization', autherizationRoutes);

//handling errors
app.use(notFound);
app.use(catchErrors);

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
