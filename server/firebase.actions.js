var admin = require("firebase-admin");
var db = admin.database();

function saveProject(project, callback) {
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
    let project = projects[key].project;
    project.fsId = key; // fsId -> firebase identifier
    projectListParse.push(project);
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
  saveProject: saveProject,
  getProjects: getProjects
};