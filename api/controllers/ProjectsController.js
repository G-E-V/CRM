/**
 * ProjectsController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  getProjects: function (req, res) {
    console.log(req.param('id'));
    console.log("Get projects active");
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
    console.log("Getting issues");
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
    console.log("Getting issue");
    console.log("Issue id  = " + req.param('id'));
    Projects.query('SELECT * FROM project_tracker WHERE project_tracker.project_id = ?', [req.param('id')], function (err, raweresult) {
      if (err) {
        return res.serverError(err);
      }
      // console.log(res);
      console.log(raweresult);
      return res.ok(raweresult);
    })
  }

  };

