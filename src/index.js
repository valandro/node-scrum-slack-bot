const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: process.env.SLACK_TOKEN,
    name: 'daily-bot'
});

bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
    };

    bot.postMessageToChannel('general', 'Olá, meu nome é @daily-bot! \n' + 
                                        'Estou aqui para lembra-los de quando a hora da daily estaá chegando.', params);
});