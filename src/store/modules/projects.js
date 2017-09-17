

const state = {
  projects: [
    {
      id: 1,
      title: 'React Native Developer',
      description: 'React Native Developer who performs maintenance and provides technical assistance and advice on existing software solutions.',
      minimumPosition: 'Software Engineer II',
      maximumPosition: 'Senior Software Engineer',
      yearsOfExperience: '',
      englishLevel: 'B2',
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
      englishLevel: 'C1',
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
          'Mongo',
          'Spring',
          'Kafka'
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
    },
    {
      id: 3,
      title: 'Front End Developer',
      mainTechnology: 'JavaScript',
      englishLevel: 'B2',
      mandatoryKnowledge: {
        hardSkills: [
          'React',
          'Angular',
          'VueJS',
          'Git',
          'Maven',
          'Jenkins'
        ],
        softSkills: [
          'Good on communication',
          'Pro active'
        ]
      },
      description: 'As a Software Developer on our team you will be expected to write great code, execute on your ideas, generate new and improved approaches to software development, and generally make things better.Specifically, you’ll be responsible for designing, developing, testing, deploying and maintaining our products and our customers’ projects. Communication, influence and passion are key to the success of the team and ultimately the company.'
    },
    {
      id: 4,
      title: '.Net Full Stack Developer',
      mainTechnology: 'C#',
      englishLevel: 'B2',
      mandatoryKnowledge: {
        hardSkills: [
          'EF',
          'Azure',
          'SQL',
          'WCF',
          'Maven',
          'Jenkins'
        ],
        softSkills: [
          'Good on communication',
          'Pro active'
        ]
      },
      description: 'Since 2008, we have been helping clients across the globe to imagine, engineer and deliver software solutions as well as digital experiences empowering them to be more innovative and competitive. We are doing so by taking into consideration it is not only about what we do, it is about who we are and how we do it. With you.'
    },
    {
      id: 5,
      title: 'VueJS Developer',
      mainTechnology: 'VueJS',
      englishLevel: 'C2',
      mandatoryKnowledge: {
        hardSkills: [
          'Javascript',
          'Vuex',
          'NodeJS',
          'AWS'
        ],
        softSkills: [
          'Good on communication',
          'Pro active'
        ]
      },
      description: 'ArVum IT is seeking a Jr VueJS Developer for our core development team. (0 – 2 years experience).'
    },
    {
      id: 6,
      title: 'UX Designer',
      mainTechnology: 'HTML5 - CSS3',
      englishLevel: 'B1',
      mandatoryKnowledge: {
        hardSkills: [
          'Adove PS',
          'Sketch',
          'InVision'
        ],
        softSkills: [
          'Good on communication',
          'Pro active'
        ]
      },
      description: 'Dynamic, passionate and proven people who want to make a positive difference with the people they work with and customers we support. You will have the ability to thrive in a fast-paced and challenging environment where everyone is empowered and committed to deliver the best in industry customer experience. Fluency in English (written and spoken) is a given, as is a ‘can do’ attitude and a thirst to learn and develop professional and soft skills.'
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