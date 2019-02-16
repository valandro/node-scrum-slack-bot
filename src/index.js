const SlackBot = require('slackbots');
const CronJob = require('cron').CronJob; 

const bot = new SlackBot({
    token: process.env.SLACK_TOKEN,
    name: 'daily-bot'
});

bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
    };

    bot.postMessageToChannel('general', 'Olá, meu nome é @daily-bot! \n\n' + 
                                        'Estou aqui para lembra-los de quando a hora da daily está chegando.', params);
});

// Cron job to set your Daily's time
new CronJob('00 30 9 * * 1-5', () => {
    bot.postMessageToChannel('general', 'Está na hora da daily!');
},null,true,'America/Sao_Paulo');
