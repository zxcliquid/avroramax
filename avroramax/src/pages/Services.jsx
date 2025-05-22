// src/pages/Services.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <div>
      <Header />
      <section id="services" style={{ backgroundColor: '#f0f4f8' }}>
        <div className="container">
          <h2 className="section-title">Наши услуги</h2>
          <div className="services">
            <ServiceCard icon="📱" title="Цифровой маркетинг" description="Продвижение вашего бренда через интернет-рекламу, SMM, SEO и контент-маркетинг для привлечения целевой аудитории." />
            <ServiceCard icon="🎨" title="Графический дизайн" description="Разработка логотипов, фирменного стиля, рекламных материалов и визуальных элементов вашего бренда." />
            <ServiceCard icon="📊" title="Медиапланирование" description="Стратегическое планирование размещения рекламы на различных площадках для достижения максимального охвата." />
            <ServiceCard icon="📹" title="Видеопродакшн" description="Создание рекламных роликов, корпоративных фильмов и видеоконтента для всех платформ." />
            <ServiceCard icon="📢" title="Наружная реклама" description="Разработка и размещение эффективной наружной рекламы: билборды, вывески, баннеры и другие форматы." />
            <ServiceCard icon="🌐" title="Веб-разработка" description="Создание современных адаптивных сайтов и лендингов для вашего бизнеса с учетом SEO-требований." />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
