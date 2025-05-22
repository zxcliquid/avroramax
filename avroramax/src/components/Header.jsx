// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
      <a href="/"><img src="./images/logo.png" alt="Логотип" width={128} /></a>
        <div className="logo"><a href="/">AVRORA-MAX</a></div>
        <div className="tagline">Инновационные рекламные решения для вашего бизнеса</div>
        <nav>
          <ul>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/services">Услуги</Link></li>
            <li><Link to="/portfolio">Портфолио</Link></li>
            <li><Link to="/team">Команда</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
