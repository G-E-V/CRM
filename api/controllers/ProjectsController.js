/**
 * ProjectsController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  getProjects: function (req, res) {
    console.log("Get projects active");
    Projects.query('SELECT * FROM projects, project_user WHERE projects.id = project_user.project_id AND  user_id = ?', [1], function (err, rawesult) {
      if (err) {
        return res.serverError(err);
      }
      // console.log(res);
      console.log(rawesult);
      return res.ok();
    });
  }




    // Projects.find({
    //   poject_id: req.param('')
    // }, function foundUser(err, user) {
    //   if (err){
    //     console.log("Error")
    //     return res.negotiate(err);
    //   }
    //   if (!user) {
    //     console.log("User not found");
    //     return res.notFound()
    //   }
    //   console.log(user.encryptedPassword);
    //   console.log("SUCCESS");
    //   if (user) {
    //     Mailer.sendWelcomeMail(user);  // <= Here we using
    //     res.json(200, {user: user});
    //     // $('#success').css('visibility', 'visible');
    //     // console.log("Mail Sentingggg");
    //
    //   }
    //
    //   // All done- let the client know that everything worked.
    //   return res.ok();
    // });


  };

