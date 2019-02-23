const SlackBot = require('slackbots');
const CronJob = require('cron').CronJob; 

const bot = new SlackBot({
    token: process.env.SLACK_TOKEN,
    name: 'daily-bot'
});

// Welcome message
bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
    };

    bot.postMessageToChannel(
        'omni_pdv_time_a', 
        'Olá, meu nome é *@daily-bot!* \n\n'
        + 'Estou aqui para lembrá-los de quando a hora da daily está chegando!!! \n\n'
        + 'Por enquanto, apenas consigo alertar sobre os horários da daily, mas qualquer sugestão de melhoria é bem vinda.'
        , params);

    bot.postMessageToChannel(
        'omni_pdv-time_b', 
        'Olá, meu nome é *@daily-bot!* \n\n'
        + 'Estou aqui para lembrá-los de quando a hora da daily está chegando!!! \n\n'
        + 'Por enquanto, apenas consigo alertar sobre os horários da daily, mas qualquer sugestão de melhoria é bem vinda.'
        , params);
});

// Team A daily's is coming.
new CronJob('00 25 9 * * 1-5', () => {
    bot.postMessageToChannel('omni_pdv_time_a', 'Está quase na hora da daily, faltam apenas *5 minutos!* :eyes:');
},null,true,'America/Sao_Paulo');

// Team A daily's is now.
new CronJob('00 30 9 * * 1-5', () => {
    bot.postMessageToChannel('omni_pdv_time_a', '*Está na hora da daily!* :the_horns:');
},null,true,'America/Sao_Paulo');

// Team B daily's is coming.
new CronJob('00 55 9 * * 1-5', () => {
    bot.postMessageToChannel('omni_pdv-time_b', 'Está quase na hora da daily, faltam apenas *5 minutos!* :eyes:');
},null,true,'America/Sao_Paulo');

// Team B daily's is now.
new CronJob('00 00 10 * * 1-5', () => {
    bot.postMessageToChannel('omni_pdv-time_b', '*Está na hora da daily!* :the_horns:');
},null,true,'America/Sao_Paulo');