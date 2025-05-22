import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');
  const [statusStyle, setStatusStyle] = useState('');
  const [showTimeline, setShowTimeline] = useState(false);
  const [messageVisible, setMessageVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Сбросить сообщение и таймлайн при повторной отправке
    setMessageVisible(true);
    setMessageStatus('');
    setShowTimeline(false);

    setIsSending(true);

    try {
      console.log('Отправка данных:', formData);  // Логирование данных формы

      const response = await axios.post('http://localhost:5001/send-message', formData);

      console.log('Ответ от сервера:', response);  // Логирование ответа сервера

      if (response.data.success) {
        setMessageStatus('Сообщение отправлено успешно!');
        setStatusStyle('success');
      } else {
        setMessageStatus('Ошибка при отправке сообщения.');
        setStatusStyle('error');
      }

      setShowTimeline(true);

      setTimeout(() => {
        setMessageVisible(false); // Скрыть блок и таймлайн через 2 секунды
      }, 2000);

    } catch (error) {
      console.error('Ошибка при отправке:', error);  // Логирование ошибок
      setMessageStatus('Произошла ошибка при отправке сообщения.');
      setStatusStyle('error');
      setShowTimeline(true); // Показать таймлайн в случае ошибки
      setTimeout(() => {
        setMessageStatus('');
      }, 2000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Имя</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Телефон</label>
        <input
          type="text"
          id="phone"
          name="phone"
          pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$'
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="text">Сообщение</label>
        <textarea
          id="text"
          name="message"
          minLength={2}
          maxLength={150}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" disabled={isSending}>
        {isSending ? 'Отправка...' : 'Отправить сообщение'}
      </button>
      {messageVisible && (
        <div className={`message-status ${statusStyle}`} style={{ opacity: messageStatus ? 1 : 0 }}>
          {messageStatus}
          {showTimeline && (
            <div className={`timeline ${statusStyle}`}></div> // Изменение цвета таймлайна
          )}
        </div>
      )}
    </form>
  );
};

export default ContactForm;