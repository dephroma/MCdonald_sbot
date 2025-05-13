require('dotenv').config();
const { Telegraf } = require('telegraf');

const { bot, handleWebhook, setupWebhook } = require('./webhookHandler');

// Инициализация вебхука
setupWebhook();
// Обработчик любого сообщения
bot.on('message', (ctx) => {
    ctx.reply(
        'To purchase this domain, contact: @Fullreadiness', // Замените @username на нужный юзернейм
        { reply_to_message_id: ctx.message.message_id } // Ответить на сообщение пользователя
    );
});

// Запуск бота
bot.launch()
    .then(() => console.log('Бот запущен!'))
    .catch((err) => console.error('Ошибка запуска бота:', err));