const moment = require('moment');

module.exports = function(req, res, next) {
  try {
    const { last_successful_submission } = req.session;
    const waiting_period = 3600; //1 hr in seconds
    const now = moment();
    if (!last_successful_submission) {
      return next();
    }
    if (now.diff(last_successful_submission, 'seconds') > waiting_period) {
      return next()
    } else {
      const time_until_next_submission = now.add(waiting_period - (now.diff(last_successful_submission, 'seconds')), 'seconds').format('h:mm a');
      return res.badRequest(`Wait until ${time_until_next_submission} before submitting again.`);
    }
  } catch(e) {
    return res.badRequest(e);
  }
};
