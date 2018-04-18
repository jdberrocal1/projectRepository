var admin = require("firebase-admin");
var db = admin.database();

function saveProjectId(project, callback) {
  let projects = db.ref("projects").push();
  return projects.set(
    {
      project: project
    }, 
    function (error) {
      callback(error);
  });
}

function parseProjectList(projects) {
  if (!projects) return [];
  let projectListParse = [];
  Object.keys(projects).forEach(key => {
    projectListParse.push(projects[key].project);
  });
  return projectListParse;
}

function getProjects(firstCall, callback) {
  let projects = db.ref("projects");
  projects.once("value", function(snapshot) {
     if(firstCall){
       callback(parseProjectList(snapshot.val()));
       firstCall = false;
      }
  }, function (errorObject) {
    return [];
  });
}

module.exports = {
  saveProjectId: saveProjectId,
  getProjects: getProjects
};