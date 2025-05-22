// src/components/Testimonials.jsx
import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css'; // Импортируем стили

const testimonialsData = [
  {
    text: "Сотрудничество с AVRORA-MAX стало для нас настоящим открытием. Их подход к цифровому маркетингу позволил нам значительно повысить нашу онлайн-видимость и привлечь больше клиентов.",
    name: "Галкин Артемий",
    avatar: "/images/avatar1.jpg" // Добавим аватарку для клиента
  },
  {
    text: "Команда AVRORA-MAX помогла нам создать потрясающий бренд и эффективную рекламную кампанию, которая быстро привлекла внимание нашей целевой аудитории. Мы на 100% довольны результатами.",
    name: "Султангазиев Марат",
    avatar: "/images/avatar2.jpg" // Вторая аватарка
  },
  {
    text: "Наша компания никогда не работала с таким креативным агентством, как AVRORA-MAX. Они внедрили множество инновационных методов, которые быстро привели к росту продаж и узнаваемости бренда.",
    name: "Никулина Ульяна",
    avatar: "/images/avatar3.jpg" // Третья аватарка
  },
  {
    text: "Мы начали работать с AVRORA-MAX для продвижения нашего стартапа, и это было лучшим решением. Они предложили креативный подход, который дал реальный результат.",
    name: "Кошербаев Ермек",
    avatar: "/images/avatar4.jpg" // Вторая аватарка
  },
  {
    text: "AVRORA-MAX — настоящие профессионалы в своем деле! Их внимание к деталям и стратегический подход помогли нам значительно повысить конверсию на сайте и привлечь новых клиентов.",
    name: "Яковлева Алия",
    avatar: "/images/avatar5.jpg" // Вторая аватарка
  },
];

const Testimonials = () => {
  const settings = {
    dots: true, // Показывать точки для слайдера
    infinite: true, // Бесконечная прокрутка
    speed: 500, // Скорость перехода
    autoplay: true, // Включаем автоматическую прокрутку
    autoplaySpeed: 3000, // Интервал между прокрутками
    slidesToShow: 1, // Количество отображаемых слайдов
    slidesToScroll: 1, // Количество прокручиваемых слайдов за один раз
    pauseOnHover: true, // Приостанавливаем прокрутку при наведении
  };

  return (
    <div className="testimonials">
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-avatar">
              <img src={testimonial.avatar} alt={testimonial.name} />
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <span className="testimonial-name">{testimonial.name}</span>
            <span className="testimonial-position">{testimonial.position}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
