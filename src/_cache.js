import NodeCache from 'node-cache';

// private;
if (typeof global._cache === 'undefined') {
  global._cache = new NodeCache();
}

export const set = (key, value, ttl) => {
  global._cache.set(key, value, Number(ttl));
};

export const get = (key) => {
  return global._cache.get(key);
};

export const del = (key) => {
  return global._cache.del(key);
};

export const ttl = (key, ttl) => {
  return global._cache.ttl(key, ttl);
};

export default {
  set,
  get,
  del,
  ttl
};