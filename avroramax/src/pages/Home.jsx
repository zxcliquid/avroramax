// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';  

const Home = () => {
  return (
    <div>
      <Header />
      <section id="testimonials">
        <div className="container">
          <h2 className="section-title">Отзывы наших клиентов</h2>
          <Testimonials /> {/* компонент с отзывами */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
