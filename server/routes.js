require('./users');
var request = require("request");

function findUser(credentials) {
  return users.find(u => {
    return u.password === credentials.password && (u.userName === credentials.userNameOrEmail || u.email === credentials.userNameOrEmail);
  });
}

module.exports = function (app) {
  app.post('/login', function (req, res) {
    let user = findUser(req.body);
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
    }, function(error, response, body) {
      res.json({ ticket: JSON.parse(body) });
    });
    
  });

};