[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# Slack Scrum Bot

<img src="static/img/slack.png" height="50" width="50">

A Slack bot built using `NodeJS` that alarms your team when the Daily's time is coming.

## Usage

### Environment

You will need to set a `.env` file **only** on the host that will run the app.

.env file
```
SLACK_TOKEN=xoxb-3233057...
```

#### Note

> **Also you could change the channels that will be receive the messages from the bot.**

### Change daily's time

Just change the cron jobs that are defined in `index.js`.

```javascript
new CronJob('00 25 9 * * 1-5', () => {
    bot.postMessageToChannel('omni_pdv_time_a', 
                             'Está quase na hora da daily, faltam apenas *5 minutos!* :eyes:');
    },null,true,'America/Sao_Paulo');
```

### License
Apache License. [Click here for more information.](LICENSE)
