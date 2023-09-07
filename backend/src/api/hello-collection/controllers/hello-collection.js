'use strict';

/**
 * hello-collection controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::hello-collection.hello-collection');
