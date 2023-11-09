const { it, expect, describe, jest } = require('@jest/globals');
const axios                          = require('../src/_axios');

describe('Axios test suit case', () => {
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