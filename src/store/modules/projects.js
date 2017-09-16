

const state = {
  projects: [
    {
      id: 1,
      title: 'React Native Developer',
      description: 'React Native Developer',
      minimumPosition: 'Software Engineer II',
      maximumPosition: 'Senior Software Engineer',
      yearsOfExperience: '',
      englishLeves: 'B2',
      mainTechnology: 'Reatc Native',
      status: 'open',
      date:'16/09/2017',
      requirements: [
        'React Native',
        'Integración con servicios Rest',
        'Conocimiento de Expo o framework similar',
        'Conocimiento de Redux or Mobx',
        'Experiencia usando algunos de los sensores del device',
        'Experiencia creando apps para Android y iOS',
        'Conocimiento de herramientas de manejo de versiones (Git)',
        'Conocimiento de Continuous Integration'
      ],
      mandatoryKnowledge: {
        hardSkills: [
          'React Native',
          'REST',
          'Redux o Mob',
          'Git',
          'CI'
        ],
        softSkills: [
          'Good on communication',
          'Good on interviews / fluent English',
          'Pro active'
        ]
      },
      preferableKnowledge: {
        hardSkills: [
          'Agile',
          'Scrum'
        ],
        softSkills: []
      }
    },
    {
      id: 2,
      title: 'Health Symmetric Software Engineer',
      description: 'In this role, you will work with a senior team of execution-focused engineers that are building a next-generation, smart healthcare platform, powered by open innovation, accessed through interoperability, and accelerated by data science. At SocialCare we value teammates that are passionate, enjoy problem solving, collaborating and working with cutting-edge technologies and solving large-scale, real-world problems that are transforming the Healthcare industry.',
      minimumPosition: 'Software Engineer III',
      maximumPosition: 'Senior Software Engineer',
      yearsOfExperience: '5',
      englishLeves: 'B2',
      mainTechnology: 'Java',
      status: 'open',
      date:'10/09/2017',
      requirements: [
        '5+ years experience developing software applications, services and libraries using Java.',
        'A passion for developing and continuously improving high quality, maintainable software',
        'Experience with REST API, Tomcat (or similar Web/Application servers), OOP, Design Patterns, TDD, and Agile development practices.',
        'Experience developing high-tolerance, secure and performant enterprise level applications with Open Source and custom components.',
        'Responsible for software development and delivery, API design, requirements gathering/clarification, unit and integration tests.',
        'Ability to work independently while possessing strong communication skills and passion for collaborating with product managers, subject matter experts and other developers.',
        'Solution-oriented and willing to challenge existing assumptions and best practices/approaches in solving customer pain points.',
        'S. or B.A. in Computer Science, a similar field or equivalent additional relevant technical experience'
      ],
      mandatoryKnowledge: {
        hardSkills: [
          '5+ years experience developing software applications, services and libraries using Java.',
          'A passion for developing and continuously improving high quality, maintainable software',
          'Experience with REST API, Tomcat (or similar Web/Application servers), OOP, Design Patterns, TDD, and Agile development practices.',
          'Experience developing high-tolerance, secure and performant enterprise level applications with Open Source and custom components.',
          'Responsible for software development and delivery, API design, requirements gathering/clarification, unit and integration tests.',
          'Ability to work independently while possessing strong communication skills and passion for collaborating with product managers, subject matter experts and other developers.',
          'Solution-oriented and willing to challenge existing assumptions and best practices/approaches in solving customer pain points.',
          'S. or B.A. in Computer Science, a similar field or equivalent additional relevant technical experience'
        ],
        softSkills: [
          'Good on communication',
          'Pro active'
        ]
      },
      preferableKnowledge: {
        hardSkills: [
          'Mongo',
          'Spring',
          'Kafka',
          'Git',
          'Maven',
          'Jenkins',
          'Atlassian Tools: Jira, Bitbucket, Confluence, HipChat',
          'Agile',
          'Knowledge of healthcare industry data standards and practices is helpful, but not required'
        ],
        softSkills: []
      }
    }
  ]
};

const mutations = {
  'ADD_PROJECT'(state, project) {
    state.project.push(project);
  }
};

const actions = {
  addProject: ({ commit }, project) => {
    commit('ADD_PROJECT', project);
  }
};

const getters = {
  projects: state => {
    return state.projects;
  },
  project: state => {
    return id => state.projects.find(item =>{
      return item.id === id
    });
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};