'use strict';

function validateQuery(req, res, next) {
  // Checks the query string for a name property.

  let data = req.query.name;

  if (!data) { next('Error: missing or invalid input.');
  // if(typeof req.query.name !== 'string') {
  // // Forces an error when not.
  //   next('Error: missing or invalid input');
  } else { next();
  // // Sends the request through when valid.
    // next();
  // }
}

module.exports = validateQuery;


// res.status(200).send( { name: req.query.name } );
