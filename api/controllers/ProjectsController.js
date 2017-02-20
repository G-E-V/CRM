/**
 * ProjectsController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  getProjects: function (req, res) {
    console.log(req.param('id'));
    console.log("Get projects Server");
    Projects.query('SELECT * FROM projects, project_user WHERE projects.id = project_user.project_id AND  user_id = ?', [req.param('id')], function (err, rawesult) {
      if (err) {
        return res.serverError(err);
      }
      // console.log(res);
      console.log(rawesult);
      return res.ok(rawesult);
    });
  },
  getIssues: function (req, res) {
    console.log("Getting issues Server");
    console.log("Project id  = " + req.param('id'));
    Projects.query('SELECT projects.project_name,project_tracker.tracker, project_tracker.subject, project_tracker.id FROM project_tracker,projects WHERE project_tracker.assigne = ? and project_tracker.project_id = projects.id', [req.param('id')], function (err, raweresult) {
      if (err) {
        return res.serverError(err);
      }
      // console.log(res);
      console.log(raweresult);
      return res.ok(raweresult);
    })
  },
  getIssue: function (req, res) {
    console.log("Getting issue Server");
    console.log("Issue id  = " + req.param('id'));
    Projects.query('SELECT * FROM project_tracker WHERE project_tracker.id = ?', [req.param('id')], function (err, raweresult) {
      if (err) {
        return res.serverError(err);
      }
      // console.log(res);
      console.log(raweresult);
      return res.ok(raweresult);
    })
  },
  getProject: function (req, res) {
    console.log("Getting project Server");
    console.log("Project name  = " + req.param('name'));
    Projects.query('SELECT * FROM projects WHERE projects.project_name = ?', [req.param('name')], function (err, raweresult) {
      if (err) {
        return res.serverError(err);
      }
      // console.log(res);
      console.log(raweresult);
      return res.ok(raweresult);
    })
  },


  addProject: function (req, res) {
    console.log("Adding project Server");
    console.log(req.param('project_name'),req.param('description'),req.param('user'));
    Projects.create({
      project_name: req.param('project_name'),
      description: req.param('description')
    }).exec(function (err, newProject){
      if (err) {
        return res.serverError(err);
      }
      Project_user.create({
        project_id: newProject.id,
        user_id: req.param('user')
      }).exec(function (err, newId) {
        if (err) {
          return res.serverError(err + "Error in Project_User");
        }
        console.log("Id's added");
      });
      console.log(newProject);
      return res.json(200, { success: 'Success' });
    });
  },
  addIssue: function (req, res) {
    console.log("Adding issue Server");
    console.log(req.param('project_id'),req.param('tracker'),req.param('subject'));
    Project_tracker.create({
      project_id: req.param('project_id'),
      tracker: req.param('tracker'),
      subject: req.param('subject'),
      assigne: req.param('assigne'),
      description : req.param('description'),
      status : req.param('status'),
      priority : req.param('priority'),
      startDate : req.param('startDate'),
      dueDate : req.param('dueDate'),
      estimatedTime : req.param('estimatedTime'),
      done : req.param('done')
    }).exec(function (err, newIssue){
      if (err) {
        return res.serverError(err);
      }
      console.log(newIssue);
      return res.json(200, { success: 'Success' });
    });
  }
}


