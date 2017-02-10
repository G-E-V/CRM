/**
 * Project_user.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    project_id: {
      type: 'int',
      required: true
    },
    user_id: {
      type: 'int',
      required: true
    }

  }
};

