var crypto = require('crypto');

// Create Hash
var shasum = crypto.createHash('sha1');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

console.log('crypto_hash :', output);
