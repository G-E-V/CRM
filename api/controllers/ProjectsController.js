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
  getUsers: function (req, res) {
    console.log("Get users Server");
    Projects.query('SELECT name,id FROM user',function (err, rawesult) {
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
    Projects.query('SELECT project_tracker.tracker, project_tracker.subject, project_tracker.id FROM project_tracker WHERE project_tracker.project_id = ?', [req.param('id')], function (err, raweresult) {
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
    Projects.query('SELECT * FROM project_tracker WHERE project_tracker.project_id = ?', [req.param('id')], function (err, raweresult) {
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
  }
}


