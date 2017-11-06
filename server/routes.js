var request = require("request");
var utils = require('./utils');
var firebaseActions = require('./firebase.actions');

module.exports = function (app) {
  app.post('/login', function (req, res) {
    let user = utils.findUser(req.body);
    if (user) {
      let loginSuccessful = {
        user: {
          name: user.name,
          email: user.email,
          userName: user.userName
        },
        successful: true
      };
      res.json(loginSuccessful);
    } else {
      res.json({ successful: false });
    }
  });

  app.get('/import/:id', function (req, res) {
    let ticketNumber = req.params.id;
    let url = "https://jira7-clone-pub.avantica.net:7443/rest/api/2/issue/" + ticketNumber;
    let auth = utils.getJiraAuthHeader();

    request({
      headers: {
        'Authorization': auth
      },
      uri: url,
      method: "GET"
    }, function (error, response, body) {
      if (error) {
        res.json(null);
      }
      let data = JSON.parse(body);
      res.json(utils.getTicketData(data));
    });
  });

  app.post('/import', function (req, res) {
    let project = req.body;
    firebaseActions.getProjects(true, function(savedProjects) {
      let projectExist = savedProjects.indexOf(project.id) >= 0 || false;
      let result = {
        haveErrors: true,
        message: ''
      };
      if (project && !projectExist) {
        firebaseActions.saveProjectId(project, error => {
          result.haveErrors = !!error;
          result.message = 'Project Saved Successfully';
          res.json(result);
        });
      } else {
        result.message = 'Project already exists';
        res.json(result);
      }
    });
  });

};