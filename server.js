const http = require("http");
// const app = require("./app");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://qosimtoirov2000_db_user:mango123456@cluster0.nlrszec.mongodb.net/?reja=Cluster0";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running succesfully on PORT: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
