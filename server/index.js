const path = require('path');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const port = 3000;

const main = () => {
  try {
    const server = express();

    server.use(
      cors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204
      })
    );

    server.use( express.static( path.join( __dirname, '..', 'dist' ) ) );

    server.use( routes.helloWorld );

    server.listen( port, () => console.log( `server listening on port ${ port }!` ) );
  } catch ( ex ) {
    console.error( 'global exception:', ex );
  }
};

main();
