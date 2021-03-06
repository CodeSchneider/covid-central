module.exports.routes = {
  'post /surveys': 'SurveyController.new',
  'get /surveys/:surveySlug': 'SurveyController.view',
  'post /surveys/:surveySlug/submissions': 'SubmissionController.new',
  'get /metrics': 'MetricController.last',
  'post /screenings': 'ScreeningController.new'
};
