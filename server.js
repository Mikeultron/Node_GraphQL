const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { MainSchema } = require("./src/Schema/MainSchema");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: MainSchema,
    graphiql: true,
  })
);

app.get("/", (req, res) => res.redirect("/graphql"));

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
