const mongoose = require('mongoose');

const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/CMDB';
mongoose.Promise = global.Promise;

const db = mongoose.connect(dbUri, {
  useMongoClient: true,
})
.then(status => {
  console.log('db connected')
})
.catch(err => {
  console.log('connect to db failed', err);
});

module.exports = db;
