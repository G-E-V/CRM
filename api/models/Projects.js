/**
 * projects.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  id:{
    type: 'integer',
    primaryKey: true,
    autoIncrement: true
  },
  project_name: {
    type: 'string',
    required: true
  },

  // The user's title at their job (or something)
  // e.g. Genius
  description: {
    type: 'string',
    required: true
  }
};

