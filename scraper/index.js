#!/usr/bin/env node

const Joi = require('joi');
const chalk = require('chalk');
const argv = require('minimist')(process.argv.slice(2), {});
const { scrape, clean, save } = require('./tasks.js');

const schema = Joi.object().keys({
  url: Joi.string().default('http://health.gatech.edu/coronavirus/health-alerts'),
});

async function run() {
  try {
    const inputs = await Joi.validate(argv, schema, { stripUnknown: true });
    const raw = await scrape(inputs);
    await save('scrape.raw', raw);
    const processed = await clean(raw);
    await save('scrape.processed', processed);
    process.exit();
  } catch(e) {
    console.log(chalk.bgRed.white.bold(e));
    process.exit();
  }
}

run();
