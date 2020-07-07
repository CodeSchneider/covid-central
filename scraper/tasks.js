const cheerio = require("cheerio");
const axios = require("axios");
const moment = require("moment");
const MongoClient = require('mongodb').MongoClient;
const { table_1, table_2 } = require('./scrapers.js');
const { days } = require('./timeseries.js');

module.exports = {

  scrape: function(inputs) {
    return new Promise(async function(resolve, reject) {
      try {
        const { url } = inputs;
        const result = await axios.get(url);
        const $ = await cheerio.load(result.data);
        return resolve({
          ...table_1($),
          ...table_2($)
        });
      } catch(e) {
        console.log('e: ',e);
        return reject(e);
      }
    });
  },

  clean: function(raw) {
    const __this = this;
    return new Promise(function(resolve, reject) {
      try {
        const clean = {
          ...raw,
          // lastUpdated: moment(raw.lastUpdated, "MMMM DD, YYYY").toISOString(),
          reports: raw.reports.map((r, i) => {
            return {
              ...r,
              key: i
            }
          }),
          timeseries: {
            '90_days': days(90, raw),
            '60_days': days(60, raw),
            '30_days': days(30, raw)
          }
        }
        return resolve(clean);
      } catch(e) {
        return reject(e);
      }
    });
  },

  save: function(collection, data) {
    return new Promise(async function(resolve, reject) {
      try {
        // const mongoUrl = 'mongodb://covid-central:covid-central@localhost:27017';
        // const mongoUrl = 'mongodb://covid-central:covid-central@covid.hdap.cloud:27017';
        // const dbName = 'covid-central';
        const mongoUrl = 'mongodb://test:test@my-release-mongodb:27017/test';
        const dbName = 'test';
        const client = await MongoClient.connect(mongoUrl, { useUnifiedTopology: true });
        const db = await client.db(dbName);
        await db.collection(collection).insertOne({
          createdAt: moment().toISOString(),
          ...data
        });
        await client.close();
        return resolve();
      } catch(e) {
        return reject(e);
      }
    })
  }
}
