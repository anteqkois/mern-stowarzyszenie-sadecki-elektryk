const express = require('express');
const { join } = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/projectRouter');
const { notFound, catchErrors } = require('./middlewares/errors');

const app = express();

//database
const database = require('./config/database');

app.set('port', process.env.PORT || 8080);
//app.set('views', join(__dirname, 'views'));
//app.engine('html', ejs.renderFile);
//app.set('view engine', 'html');
if (process.env.MODULE === 'production') {
  app.use(express.static(join(__dirname, '../client/build')));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', routes);

//handling errors
app.use(notFound);
app.use(catchErrors);

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`);
});
