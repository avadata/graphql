const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const schema = require("./schema/schema");
const uri = "mongodb+srv://keshab0089:svg123123@graphql-cluster-thma6.mongodb.net/graphql?retryWrites=true";
const PORT = 4001;
mongoose.connect(uri);
mongoose.connection.once("open", () => {
  console.log(`connected successfully to: ${uri}`);
});

// allow cross-origin request
app.use(cors());
// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`now listening for requests on port ${PORT}`);
});
