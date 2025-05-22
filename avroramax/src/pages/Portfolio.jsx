// src/pages/Portfolio.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioItem from '../components/PortfolioItem';

const Portfolio = () => {
  return (
    <div>
      <Header />
      <section id="portfolio">
        <div className="container">
          <h2 className="section-title">Наше портфолио</h2>
          <div className="portfolio">
            <PortfolioItem imgSrc="images/image1.jpg" title="Ребрендинг classic" description="Комплексный ребрендинг для компании classic, включающий новый логотип, фирменный стиль и маркетинговую стратегию." />
            <PortfolioItem imgSrc="images/image2.jpg" title="Запуск продукта PERFECT - COFEE" description="Разработка и реализация стратегии запуска новой кофейни на Казахстанский рынок." />
            <PortfolioItem imgSrc="images/image3.jpg" title="Кампания для магазина сантенического оборудования АКВА МАСТЕР" description="Интегрированная рекламная кампания для сети магазинов сантехники в Казахстане, повысившая посещаемость на 35%." />
            <PortfolioItem imgSrc="images/image4.jpg" title="Проект Mon Amie" description="Разработка и продвижение магазина косметики и парфюма." />
            <PortfolioItem imgSrc="images/image5.jpg" title="Диджитал-кампания Elcom-Service" description="Комплексная цифровая кампания для копировального центра, включающая SMM и контекстную рекламу." />
            <PortfolioItem imgSrc="images/image6.jpg" title="Веб-платформа БЕЛАРУСЬ&ТУРКИЯ" description="Разработка дизайна и запуск интерактивной веб-платформы для онлайн выбора современной мебели." />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
