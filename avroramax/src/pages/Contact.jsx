// src/pages/Contact.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap'; 

const Contact = () => {
  return (
    <div>
      <Header />
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Связаться с нами</h2>
          <div className="contact-form">
            <ContactForm />
          </div>
          <div className="contact-info">
            <div className="contact-item">
                <div className="contact-icon">
                    📍
                </div>
                <div>
                    <h4>Адрес</h4>
                    <p>Караганда, ул. Ержанова, 18/2</p>
                </div>
            </div>
            <div className="contact-item">
                <div className="contact-icon">
                📞
                </div>
                <div>
                    <h4>Телефон</h4>
                    <p>+7 700 138 51 50</p>
                </div>
            </div><div className="contact-item">
                <div className="contact-icon">
                ✉️  
                </div>
                <div>
                    <h4>Email</h4>
                    <p>avrora-max@mail.ru</p>
                </div>
            </div>
          </div>
        </div>
      </section>
      <ContactMap />
      <Footer />
    </div>
  );
};

export default Contact;
