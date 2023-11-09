const axios  = require('axios');
const logger = require('@obi-tec/logger-console');

// private
const _logResponseSuccess = (response) => {
  const payload = {
    service          : response.config.service,
    url              : response.config.url,
    method           : response.config.method,
    status           : response.status,
    statusText       : response.statusText,
    requestStartTime : response.config.requestStartTime,
    requestEndTime   : response.config.requestEndTime,
    time             : response.config.requestEndTime - response.config.requestStartTime
  };

  logger.info(`Request ${payload.service || response.config.url}`, payload);
};

const _logResponseError = (error) => {
  const payload = {
    service          : error.config.service,
    url              : error.config.url,
    method           : error.config.method,
    status           : error.status,
    statusText       : error.statusText,
    requestStartTime : error.config.requestStartTime,
    requestEndTime   : error.config.requestEndTime,
    time             : error.config.requestEndTime - error.config.requestStartTime
  };

  logger.error(`Request ${payload.service || error.config.url}`, payload);
};

// instance of axios
const instance = axios.default.create();

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    config.requestStartTime = Date.now();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    response.config.requestEndTime = Date.now();
    _logResponseSuccess(response);
    return response;
  },
  (error) => {
    if (error) {
      if (error.config) {
        error.config.requestEndTime = Date.now();
      } else {
        error.config = {
          requestEndTime: Date.now()
        };
      }
      _logResponseError(error);
    }
    return Promise.reject(error);
  });

module.exports = instance;