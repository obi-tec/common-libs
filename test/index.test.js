import { it, expect, describe, jest } from '@jest/globals';
import { axios, cache } from '../src/index.js';

describe('Axios test suit case - index', () => {
  it('should do a request', async () => {
    const resolvedValue = {data: 'foo'};

    jest
      .spyOn(
        axios,
        'get'
      )
      .mockResolvedValueOnce(resolvedValue);

    const result = await axios.get('/');

    expect(result).toEqual(resolvedValue);
  });
});

describe('Cache test suit case - index', () => {
  it('should verify if functions are available on import', async () => {
    expect(cache.set).toEqual(expect.any(Function));
    expect(cache.get).toEqual(expect.any(Function));
    expect(cache.ttl).toEqual(expect.any(Function));
    expect(cache.del).toEqual(expect.any(Function));
  });
});