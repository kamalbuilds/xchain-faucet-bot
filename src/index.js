const TelegramBot = require( 'node-telegram-bot-api');


const token = 'API_KEY';


const bot = new TelegramBot(token, {polling: true,filepath: false});


bot.onText(/\/start/, async (msg) => {
    const opts = {
      reply_markup: JSON.stringify({
        inline_keyboard: [
          [{ text: 'Start', callback_data: 'start' }]
        ]
      })
    };
  
    bot.sendMessage(msg.chat.id, 'Press the start button to begin.', opts);
  });
  
bot.launch();