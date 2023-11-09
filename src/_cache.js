const NodeCache = require('node-cache');

// private;
if (typeof global._cache === 'undefined') {
  global._cache = new NodeCache();
}

module.exports.set = (key, value, ttl) => {
  global._cache.set(key, value, Number(ttl));
};

module.exports.get = (key) => {
  return global._cache.get(key);
};

module.exports.del = (key) => {
  return global._cache.del(key);
};

module.exports.ttl = (key, ttl) => {
  return global._cache.ttl(key, ttl);
};