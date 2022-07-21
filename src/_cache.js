// dependencies
const NodeCache = require('node-cache');

// private;
if (typeof global._cache === 'undefined') {
  global._cache = new NodeCache();
}

module.exports.set = (key, valeu, ttl) => {
  global._cache.set(key, valeu, Number(ttl));
};

module.exports.get = (key) => {
  return global._cache.get(key);
};
