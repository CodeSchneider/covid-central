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
          lastUpdated = $(element).text();
        case 1:
          newReportsToday = $(element).text();
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
    const secondTable = $('#node-558 table').eq(1);
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
  }
}
