const { it, expect, describe, jest } = require('@jest/globals');
const { set, get, del, ttl }         = require('../src/_cache');
const NodeCache                      = require('node-cache');

describe('Cache suit case', () => {
  it('should create a global instance of node cache when importing', () => {
    expect(global._cache).toBeInstanceOf(NodeCache);
  });

  it('should set a key-value pair in the cache with a specified TTL', () => {
    const key = 'testKey';
    const value = 'testValue';
    const ttl = 1000;

    jest.useFakeTimers();

    set(key, value, ttl);

    expect(global._cache.get(key)).toBe(value);
    expect(global._cache.getTtl(key)).toBe(Date.now() + (ttl * 1000));

    jest.useRealTimers();
  });

  it('should return the value associated with the given key from the cache', () => {
    const key = 'testKey';
    const value = 'testValue';
    global._cache = {
      get: jest.fn().mockReturnValue(value)
    };

    const result = get(key);
    expect(result).toBe(value);
    expect(global._cache.get).toHaveBeenCalledWith(key);
  });

  it('should return the result of global._cache.del(key)', () => {
    const key = 'testKey';
    const expectedResult = 'testResult';
    global._cache.del = jest.fn().mockReturnValue(expectedResult);

    const result = del(key);

    expect(result).toBe(expectedResult);
    expect(global._cache.del).toHaveBeenCalledWith(key);
  });

  it('should return the TTL of a cached value when given a valid key and TTL value', () => {
    const key = 'validKey';
    const ttlValue = 60;
    const expectedTTL = 60;

    global._cache.ttl = jest.fn().mockReturnValue(expectedTTL);

    const result = ttl(key, ttlValue);

    expect(result).toBe(expectedTTL);
    expect(global._cache.ttl).toHaveBeenCalledWith(key, ttlValue);
  });
});
