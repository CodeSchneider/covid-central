FROM node:11.7.0-alpine

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

COPY package.json $APP_HOME
RUN npm install
COPY . .

CMD [ "node", "index.js" ]
