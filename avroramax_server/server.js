const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5001;

// Использование CORS для разрешения только с вашего фронтенда
app.use(/(.*)/,cors({
  origin: ['http://localhost:5173', 'https://avroramax-1.onrender.com'],  // Порт вашего фронтенда
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());  // Для парсинга JSON в теле запроса

const TELEGRAM_BOT_TOKEN = '7121884471:AAFMVgFoMm98NEgc2avb5Vqp6_wiK93wTn4';  // Замените на ваш токен бота
const TELEGRAM_CHAT_ID = '1329758440';  // Замените на ваш chat_id

// Обработчик OPTIONS-запросов для CORS
app.options('*', cors());  // Убедитесь, что OPTIONS-запросы разрешены

// Обработчик POST-запроса с формы
app.post('/send-message', async (req, res) => {
  const { name, email, phone, message } = req.body;
  const telegramMessage = `
    Новое сообщение с сайта:
    Имя: ${name}
    Email: ${email}
    Телефон: ${phone}
    Сообщение: ${message}
  `;

  try {
    console.log("Отправка в Telegram: ", telegramMessage);

    // Отправляем сообщение в Telegram с помощью Bot API
    await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: telegramMessage,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Ошибка при отправке в Telegram:', error);
    res.status(500).json({ success: false, message: 'Произошла ошибка при отправке сообщения.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
