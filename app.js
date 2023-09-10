const express = require('express');
const app = express();
const moment = require('moment'); // Import the moment library

app.get('/api', (req, res) => {
  const slackName = req.query.slack_nam e || '';
  const track = req.query.track || '';
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const utcTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]'); // Format UTC time as specified
  const githubFileUrl = 'https://github.com/Splendidabbey/hng-stage1/blob/main/app.js';
  const githubRepoUrl = 'https://github.com/splendidabbey/hng-stage1';
 
  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime, // Updated UTC time format
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(response);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
  
