const moment = require("moment");

module.exports = {
  table_1: function($) {
    let lastUpdated,
        newReportsToday,
        totalReported;
    const firstTable = $('#node-558 table').first();
    const firstRow = $(firstTable).find('tbody > tr').first();
    $(firstRow).find('td').each((index, element) => {
      switch(index) {
        case 0:
          lastUpdated = moment($(element).text(), "MMMM DD, YYYY").format("MMM DD, YYYY");
        case 1:
          //NOTE: Sept 1st, 2020: health.gatech.edu started using "*" in string.
          newReportsToday = $(element).text().replace('*', '');
        case 2:
          totalReported = $(element).text();
      }
    });
    return {
      lastUpdated,
      newReportsToday,
      totalReported
    };
  },
  table_2: function($) {
    let reports = [];
    const secondTable = $('#node-558 table').eq(2);
    $(secondTable).find('tbody > tr').each((index, element) => {
      let dateReported,
          position,
          dateLastOnCampus,
          campusImpact;
      $(element).find('td').each((index, element) => {
        switch(index) {
          case 0:
            dateReported = $(element).text();
          case 1:
            position = $(element).text();
          case 2:
            dateLastOnCampus = $(element).text();
          case 3:
            campusImpact = $(element).text();
        }
      });
      reports.push({
        dateReported,
        position,
        dateLastOnCampus,
        campusImpact
      });
    });
    return { reports };
  },
  table_N: function($) {
    let reports = [];
    const tables = $('#node-707 table');
    $(tables).each((index, element) => {
      $(element).find('tbody > tr').each((index, element) => {
        let dateReported,
            position,
            dateLastOnCampus,
            campusImpact;
        $(element).find('td').each((index, element) => {
          switch(index) {
            case 0:
              dateReported = $(element).text();
            case 1:
              position = $(element).text();
            case 2:
              dateLastOnCampus = $(element).text();
            case 3:
              campusImpact = $(element).text();
          }
        });
        reports.push({
          dateReported,
          position,
          dateLastOnCampus,
          campusImpact
        });
      });
    });
    return { reports };
  }
}
