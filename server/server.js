// TODO: refactor code for graphql, reference activity 26

const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

// TODO: require typedefs, resolvers, apolloserver

const app = express();
const PORT = process.env.PORT || 3001;
// TODO: call your server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// TODO: refactor routes to instead call startApolloServer
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
