module.exports = {
  friendlyName: 'Score the screening submission.',
  description: 'Score the screening submission.',
  inputs: {
    submission: {
      type: 'ref',
      example: {
        consent: null,
        any_symptoms: '',
        exposure: '',
        symptoms_list: [],
        any_life_threaten: '',
        groups: []
      },
      required: true
    }
  },
  fn: async function (inputs, exits) {
    try {
      let score = {};
      const { submission : {
        any_symptoms,
        exposure,
        symptoms_list,
        any_life_threaten,
        groups
      } } = inputs;
      if (any_symptoms === 'no' && exposure === 'no') {
        score = {
          pass: true,
          result: 'social_distance'
        };
      } else if (any_symptoms === 'no' && exposure == 'yes') {
        score = {
          pass: false,
          result: '14_day_isolation'
        };
      } else if (any_symptoms === 'yes' && any_life_threaten === 'yes') {
        score = {
          pass: false,
          result: 'call_911'
        };
      } else if (any_symptoms === 'yes' && any_life_threaten === 'no') {
        score = {
          pass: false,
          result: 'stay_home'
        }
      } else {
        throw new Error('Unknown score.');
      }
      return exits.success(score);
    } catch(e) {
      return exits.error(e);
    }
  }
};
