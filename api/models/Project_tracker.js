/**
 * Project_tracker.js
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
    tracker: {
      type: 'string',
      required: true
    },
    subject: {
      type: 'string',
      required: true
    },
    assigne: {
      type: 'int',
      required: true
    },
    description: {
      type: 'string',
    },
    status: {
      type: 'string',
      required: true
    },
    priority: {
      type: 'string',
      required: true
    },
    startDate: {
      type: 'datetime',
      required: true
    },
    dueDate: {
      type: 'datetime',
      required: true
    },
    estimatedTime: {
      type: 'int',
      required: true
    },
    done: {
      type: 'string'
    }

  }
};

