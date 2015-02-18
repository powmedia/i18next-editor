module.exports = {
  db: {
    //This object is later extended with specific properties based on URL (host, port, user etc.)
    url: process.env.DB_URI || process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/sglang',

    //Options to pass to mongoose.connect
    connect: {
      server: {
        auto_reconnect: true,
        poolSize: 10,
        socketOptions: {
          keepAlive: 1,
          connectTimeoutMS: 10000,
          //socketTimeoutMS: 10000
        }
      }
    }
  }
};
