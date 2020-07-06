const moment = require("moment");
const groupBy = require('lodash/groupBy');

module.exports = {
  days: function(count, data) {
    let dates = []
    for (var i = 0; i < count; i++) {
      let date = moment(data.lastUpdated, "MMMM DD, YYYY").subtract(i, 'days')
      dates.push(date.toISOString())
    }
    const groups = groupBy(data.reports
      .map(r => {
        return {
        ...r,
        dateReported: moment(r.dateReported, "MMMM DD, YYYY").toISOString()
      }}), r => r.dateReported);
    const timeseries = dates.reduce((acc, date) => {
      return [
        ...acc,
        {
          date,
          value: groups[date] ? groups[date].length : 0
        }
      ];
    }, []);
    return timeseries;
  }
}
