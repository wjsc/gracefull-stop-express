process.title = 'graceufull-stop-express';
const express = require('express');
const app = express();
const MAX_SECONDS = 25;
let started = 0;
let ended = 0;
const randomMiliseconds = () => Math.random() * MAX_SECONDS * 1000;
const sleep = ms => new Promise(resolve => setTimeout(() => resolve(true), ms));


app.get('/health', (req, res) => {
  res.status(200).json({});
});

app.get('/resource', (req, res) => {
  started++;
  console.log(`Started: ${started} | Ended: ${ended}`);
  sleep(randomMiliseconds()).then(_ => {
    res.status(200).json({success: true});
    ended++;
    console.log(`Started: ${started} | Ended: ${ended}`);
  })
});

const server =app.listen(3000, () => {
  console.log('Listening port 3000');
});

const processSigInt = server => {
  console.log('SIGINT');
  server.close(() => process.exit(0));

}
const processSigTerm = server => {
  console.log('SIGTERM');
  server.close(() => process.exit(0));
};

process.on('SIGINT', () => processSigInt(server));
process.on('SIGTERM',()=> processSigTerm(server));
