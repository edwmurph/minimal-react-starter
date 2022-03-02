const express = require('express');

const router = express.Router();

router.get( '/api/hello', ( req, res ) => {
  setTimeout(
    () => res.send('hello world'),
    2000
  );
});

module.exports = router;
