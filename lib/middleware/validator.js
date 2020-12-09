'use strict';

function validateQuery(req, res, next) {
  // Checks the query string for a name property.

  if(typeof req.query.name !== 'string') {
  // Forces an error when not.
    next('Error: missing or invalid input');
  } else {
  // Sends the request through when valid.
    next();
  }
}

module.exports = validateQuery;


// res.status(200).send( { name: req.query.name } );
