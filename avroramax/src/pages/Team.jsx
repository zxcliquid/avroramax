// src/pages/Team.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamMember from '../components/TeamMember';

const Team = () => {
  return (
    <div>
      <Header />
      <section id="team" style={{ backgroundColor: '#f0f4f8' }}>
        <div className="container">
          <h2 className="section-title">Наша команда</h2>
          <div className="team">
            <TeamMember name="Сергей Андреев" position="Генеральный директор" description="Более 15 лет опыта в маркетинге и рекламе. Эксперт в области стратегического планирования и развития брендов." />
            <TeamMember name="Мария Соколова" position="Креативный директор" description="Специалист с международным опытом работы. Создает уникальные концепции, которые выделяют бренды среди конкурентов." />
            <TeamMember name="Дмитрий Волков" position="Digital-маркетолог" description="Эксперт в области цифрового маркетинга, SEO и SMM. Помогает клиентам достигать максимальных результатов в онлайн-среде." />
            <TeamMember name="Екатерина Петрова" position="Ведущий дизайнер" description="Талантливый дизайнер с богатым портфолио. Создает визуальные решения, которые запоминаются и работают на результат." />
            <TeamMember name="Анна Орлова" position="Копирайтер" description="Креативный копирайтер с опытом работы в разных нишах. Пишет тексты, которые убеждают и привлекают внимание." />
            <TeamMember name="Даниил Морозов" position="Аналитик" description="Специалист по сбору и анализу данных. Обеспечивает точные данные для оценки эффективности рекламных кампаний и улучшения стратегий." />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Team;
