const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:UQ1lWbyAbRQ9uyqP@cluster0.qg7c7kn.mongodb.net/b.net/';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Good good, good is connected'))
  .catch(error => console.error(error));