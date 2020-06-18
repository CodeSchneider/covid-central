module.exports = {

  friendlyName: 'Score service',

  description: 'Score service',
  //NOTE: assumption right now is all surveys are simpled T/F. No depenceny on
  //the individual survey at the moment.

  inputs: {
    survey: {
      type: 'ref',
      example: {
        question1: true,
        question2: false,
        question3: false
      },
      required: true
    }
  },

  fn: async function (inputs, exits) {
    try {
      const { survey } = inputs;
      const score = Object.keys(survey).some(k => survey[k]) ? 'fail' : 'pass';
      return exits.success(score);
    } catch(e) {
      return exits.error(e);
    }
  }
};
