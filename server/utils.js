const data = require('./data');

function findUser(credentials) {
    return data.users.find(u => {
      return u.password === credentials.password && (u.userName === credentials.userNameOrEmail || u.email === credentials.userNameOrEmail);
    });
  }
  
  function getEnglishLevelById(id) {
    return data.englishLevels[id];
  }
  
  function getTechnologyById(id) {
    return data.technologies[id];
  }
  
  function getPositionById(id) {
    return data.positions[id];
  }
  
  function getTicketData(ticket) {
    return {
      minPosition: getPositionById(ticket.fields.customfield_10172),
      maxPosition: getPositionById(ticket.fields.customfield_10173),
      yearsOfExperience: ticket.fields.customfield_10143,
      englishLevel: getEnglishLevelById(ticket.fields.customfield_10174),
      mainTechnology: getTechnologyById(ticket.fields.customfield_10175),
      requirements: ticket.fields.customfield_10145,
      mandatoryKnowledge: {
        hardSkills: ticket.fields.customfield_10146,
        softSkills: ticket.fields.customfield_10147,
      },
      preferableKnowledge: {
        hardSkills: ticket.fields.customfield_10148,
        softSkills: ticket.fields.customfield_10149,
      },
      expectedStartDate: ticket.fields.customfield_10157,
      title: ticket.fields.summary
    }
  }

  function getJiraAuthHeader() {
    return 'Basic ' + new Buffer(data.jiraCredentials.username + ':' + data.jiraCredentials.password).toString('base64');
  }

  module.exports = {
    getTicketData: getTicketData,
    findUser: findUser,
    getJiraAuthHeader: getJiraAuthHeader
  };