import express = require('express');
import morgan = require('morgan');
import bodyParser = require('body-parser');
import expressSession = require('express-session');
import sessionFileStore = require('session-file-store');
import * as config from '../config';
import * as api from './api';

export const app: express.Express = express();
const FileStore = sessionFileStore(expressSession);

if (config.logFormat) {
  app.use(morgan(config.logFormat));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(expressSession({
  secret: config.sessionSecret,
  store: new FileStore(),
  saveUninitialized: false,
  resave: false
}));

app.use('/api/', api.router);
app.use('/el/', express.static('./lib/client'));
app.use('/el/*', (req, res) => {
  res.sendFile('index.html', { root: './lib/client' });
});

app.use(express.static('./public'));
