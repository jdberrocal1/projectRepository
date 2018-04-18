var request = require("request");
var utils = require('./utils');
var firebaseActions = require('./firebase.actions');

module.exports = function (app) {
  let apiUrlBase = "/api/v1";

  app.post(`${apiUrlBase}/login`, function (req, res) {
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

  app.get(`${apiUrlBase}/import/:id`, function (req, res) {
    let ticketNumber = req.params.id;
    let url = "https://jira7-clone.avantica.net/rest/api/2/issue/" + ticketNumber;
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
      data.id = ticketNumber;
      res.json(utils.getTicketData(data));
    });
  });

  app.get(`${apiUrlBase}/projects`, function (req, res) {
    firebaseActions.getProjects(true, function(savedProjects) {
        res.json(savedProjects);
    });
  });

  app.get(`${apiUrlBase}/projects/:id`, function (req, res) {
    let id = req.params.id;
    firebaseActions.getProjects(true, function(savedProjects) {
      let project = savedProjects.find(x => x.id === id);
      res.json(project);
    });
  });

  app.post(`${apiUrlBase}/import`, function (req, res) {
    let project = req.body;
    firebaseActions.getProjects(true, function(savedProjects) {
      let projectExist = savedProjects.find(x => x.id === project.id);
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