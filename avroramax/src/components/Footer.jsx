// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="logo">AVRORA-MAX</div>
        <p>Инновационные рекламные решения для вашего бизнеса</p>
        <div className="social-links">
          <a href="https://www.instagram.com/avrora_max" target="_blank" className="social-link"><img src="./images/instagram.png" alt="INST" /></a>
          <a href="https://api.whatsapp.com/send/?phone=77001385150" target="_blank" className="social-link"><img src="./images/whatsapp.png" alt="WA" /></a>
          <a href="https://www.google.com/maps/place/%D0%A2%D0%9E%D0%9E+%22AVRORA-MAX%22+%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B0%D0%BD%D0%B4%D0%B0/@49.7936474,73.0844256,17z/data=!4m15!1m8!3m7!1s0x424347340c0fffff:0xbad9b85dd2a42e17!2z0YPQuy4g0JXRgNC20LDQvdC-0LLQsCAxOC8yLCDQmtCw0YDQsNCz0LDQvdC00LAgMTAwMDAw!3b1!8m2!3d49.7936474!4d73.0844256!16s%2Fg%2F11x73pvpz1!3m5!1s0x4243475de9fa1ead:0xb2c6750697a0358b!8m2!3d49.7938403!4d73.0851907!16s%2Fg%2F11h42xdd46?hl=ru-KZ&entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D" target="_blank" className="social-link"><img src="./images/google-maps.png" alt="GM" /></a>
          <a href="https://2gis.kz/karaganda/firm/11822477302826991" target="_blank" className="social-link"><img src="./images/2gis.png" alt="2GIS" /></a>
        </div>
        <p>&copy; 2025 AVRORA-MAX. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
