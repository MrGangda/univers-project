'use strict';

/**
 * hello-collection router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hello-collection.hello-collection');
