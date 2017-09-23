require('./users');

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
};