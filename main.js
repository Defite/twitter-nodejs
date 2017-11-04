const twit = require('twit');
const config = require('./config.js');
const readline = require('readline');

const Twitter = new twit(config);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Write your tweet here: ', (answer) => {

  const newTweet = {
    status: answer
  }

  Twitter.post('statuses/update', newTweet, tweeted);

  const tweeted = (err, data, response) => {
    err ? console.log('Something goes wrong') : console.log('Tweet was posted successfully!');
  }

  rl.close();
});
