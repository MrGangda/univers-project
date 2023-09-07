'use strict';

/**
 * hello-collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hello-collection.hello-collection');
