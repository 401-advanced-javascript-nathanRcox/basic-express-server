'use strict';

function validateQuery(req, res, next) {
  // Checks the query string for a name property.

  const name = req.query.name;

  if (!name) { next('Missing or invalid input.'); }
  else { next(); }
}

module.exports = validateQuery;


// if(typeof req.query.name !== 'string') {
// // Forces an error when not.
//   next('Error: missing or invalid input');
// // Sends the request through when valid.
// next();
// }



// res.status(200).send( { name: req.query.name } );
