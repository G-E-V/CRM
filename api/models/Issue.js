module.exports = {

  attributes: {
    issue_id: {
      type: 'string',
      required: true,
      unique: true,
      primaryKey: true
    },

    project_name: {
      type: 'string',
      required: true
    },

    targetVersion: {
      type: 'string'
    },

    tracker: {
      type: 'string',
      enum: ['Issue', 'Feature'],
      required: true
    },

    status: {
      type: 'string',
      enum: ['New', 'In Progress', 'Solved', 'Pause', 'Feedback', 'Closed', 'Decline'],
      required: true
    },

    priority: {
      type: 'string',
      enum: ['Immediate', 'Critical', 'High', 'Normal', 'Low'],
      required: true
    },

    subject: {
      type: 'string',
      required: true
    },

    assignee: {
      type: 'string',
      required: true
    },

    updated: {
      type: 'datetime',
      defaultsTo: function () {
        return new Date();
      }
    },
    dueDate: {
      type: 'date'
    },

    estimateTime: {
      type: 'float'
    },

    spentTime: {
      type: 'float'
    },

    author: {
      type: 'string',
      required: true
    }
  }
};

