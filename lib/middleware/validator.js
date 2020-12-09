'use strict';

function validateQuery(req, res, next) {
  // Checks the query string for a name property.
  if(typeof req.query.name === 'string') {
  // Sends the request through when valid.
    res.status(200).send( { name: req.query.name } );
  } else {
  // Forces an error when not.
    next('Error: not a valid data type.');
  }
}

module.exports = validateQuery;
