const functions = require('firebase-functions');
const next = require('next');

const isDev = process.env.NODE_ENV !== 'production';
const app = next({ dev: isDev });
const handle = app.getRequestHandler();

exports.nextApp = functions.region('us-west1').https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res));
});