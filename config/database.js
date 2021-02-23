const mongoose = require('mongoose');


const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbSetting = process.env.DB_SETTING;

const url =
  process.env.MODULE === 'production'
    ? `mongodb+srv://${dbUser}:${dbPassword}@${dbName}.ffjgf.mongodb.net/${dbName}?retryWrites=true&w=majority`
    : `mongodb://localhost:27017/association`;

try {
  const database = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });
  console.log(`Server connected with database`);
  return database;
} catch (error) {
  console.log(`Server can't connected with database, error message: ${error}`);
}

module.exports = database;