var admin = require("firebase-admin");
var db = admin.database();

function saveProjectId(project, callback) {
  let projects = db.ref("projects").push();
  return projects.set(
    {
      id: project.id
    }, 
    function (error) {
      callback(error);
  });
}

function parseProjectList(projects){
  let projectListParse = [];
  Object.keys(projects).forEach(key => {
    projectListParse.push(projects[key].id);
  });
  return projectListParse;
}

function getProjects(project, callback) {
  let projects = db.ref("projects");
  return projects.on("value", function(snapshot) {
    return parseProjectList(snapshot.val());
  }, function (errorObject) {
    return [];
  });
}

module.exports = {
  saveProjectId: saveProjectId,
  getProjects: getProjects
};