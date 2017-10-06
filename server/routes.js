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
    let auth = 'Basic ' + new Buffer("jirascpoc" + ':' + "avantica#").toString('base64');

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
    let savedProjects = firebaseActions.getProjects();
    //let projectExist = savedProjects.indexOf(project.id) >= 0; // change this to return a promise
    if (project){ //&& !projectExist) {
      firebaseActions.saveProjectId(project, error => {
        res.json(!!error);
      })
    } else {
      res.json('Project already exists!');
    }
  });

};