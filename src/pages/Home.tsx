import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [clickedButton, setClickedButton] = useState<'prev' | 'next' | null>(null);

  const handlePhoneClick = () => {
    navigator.clipboard.writeText('+79461234567');
  };

  const slides = [
    {
      image: './images/slider/sl1.png',
      title: 'АКАДЕМИЯ ЗНАНИЙ',
    },
    {
      image: './images/slider/sl2.png',
      title: 'Образование будущего',
    },
    {
      image: './images/slider/sl3.png',
      title: 'Учитесь в своём темпе',
    },
    {
      image: './images/slider/sl4.png',
      title: 'Сертифицированные курсы',
    },
  ];

  const features = [
    { title: 'Государственная аккредитация', desc: 'Дипломы государственного образца, признаваемые по всей России' },
    { title: 'Современная онлайн-платформа', desc: 'Удобная платформа для обучения с любого устройства в любое время' },
    { title: 'Практико-ориентированные курсы', desc: 'Программы, разработанные с учетом требований работодателей' },
    { title: 'Библиотека материалов', desc: 'Пожизненный доступ к учебным материалам после завершения обучения' },
    { title: 'Поддержка кураторов', desc: 'Персональное сопровождение на протяжении всего обучения' },
    { title: 'Опытные преподаватели', desc: 'Кандидаты и доктора наук, практикующие специалисты' },
  ];

  const programs = [
    { title: 'Программы профессиональной переподготовки', desc: 'Получите новую специальность за 3-6 месяцев с выдачей диплома государственного образца', image: './images/learnway/ca1.png' },
    { title: 'Курсы повышения квалификации', desc: 'Актуализируйте знания и получите удостоверение о повышении квалификации', image: './images/learnway/ca2.png' },
    { title: 'Высшее образование', desc: 'Бакалавриат и магистратура по актуальным направлениям подготовки', image: './images/learnway/ca3.png' },
    { title: 'Дополнительное образование', desc: 'Разнообразные курсы для взрослых и детей по развитию навыков и хобби', image: './images/learnway/ca4.png' },
  ];

  const faqs = [
    { q: 'Как начать обучение?', a: 'Для начала обучения выберите подходящий курс в каталоге, заполните заявку и оплатите обучение. После этого вы получите доступ к личному кабинету и всем материалам курса.' },
    { q: 'Как проходит аттестация?', a: 'Аттестация проходит в онлайн-формате. Вы выполняете практические задания и проекты, которые проверяют преподаватели. По итогам выдается сертификат или диплом.' },
    { q: 'Выдается ли диплом государственного образца?', a: 'Да, наши программы профессиональной переподготовки и повышения квалификации аккредитованы и по их окончании выдается диплом государственного образца.' },
    { q: 'Можно ли учиться с мобильного телефона?', a: 'Да, наша платформа адаптирована для всех устройств. Вы можете учиться со смартфона, планшета или компьютера в любое удобное время.' },
  ];

  const news = [
    { tag: 'Новости', title: 'Новые программы повышения квалификации в области IT', desc: 'Мы запустили 5 новых программ для IT-специалистов: Python-разработка, Data Science, Кибербезопасность и другие...', date: '28 марта 2026', image: './images/news/news1.jpg' },
    { tag: 'События', title: 'Расписание вебинаров на май 2026', desc: 'Приглашаем на бесплатные вебинары для абитуриентов. Узнайте больше о наших программах, задайте вопросы...', date: '20 апреля 2026', image: './images/news/news2.jpg' },
    { tag: 'Статьи', title: 'Как онлайн-образование меняет карьерные возможности', desc: 'Статья от нашего ректора о том, как дистанционное обучение открывает новые горизонты для профессионального развития...', date: '20 марта 2026', image: './images/news/news3.jpg' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="pt-20">
      {/* Academy Title */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-serif text-[#1A1F2E]">
              АКАДЕМИЯ ЗНАНИЙ
            </h1>
            <img src="./images/logo.png" alt="Logo" className="w-20 h-20" />
          </div>
        </div>
      </section>
      {/* Hero Slider */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <button
              onClick={() => {
                prevSlide();
                setClickedButton('prev');
                setTimeout(() => setClickedButton(null), 300);
              }}
              className={`slider-btn absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center ${
                clickedButton === 'prev' ? 'clicked' : ''
              }`}
            >
              <svg className="w-6 h-6 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => {
                nextSlide();
                setClickedButton('next');
                setTimeout(() => setClickedButton(null), 300);
              }}
              className={`slider-btn absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center ${
                clickedButton === 'next' ? 'clicked' : ''
              }`}
            >
              <svg className="w-6 h-6 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-[#3B82F6]' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1A1F2E] mb-12">
            Образование, доступное 24/7
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card p-6 bg-[#F0F4FF] rounded-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-medium text-[#1A1F2E] mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1A1F2E] mb-2">
            Направления обучения
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Выберите программу, которая соответствует вашим целям и амбициям
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-[#3B82F6]/30 card-hover"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-medium text-[#1A1F2E] mb-2">{program.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{program.desc}</p>
                  <button className="more-btn w-full py-2 bg-[#F0F4FF] text-[#3B82F6] rounded-full text-sm font-medium flex items-center justify-center">
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1A1F2E] mb-12">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#F0F4FF] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-[#F0F4FF] transition-colors"
                >
                  <span className="text-lg text-[#1A1F2E]">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-[#3B82F6] transition-transform ${
                      openFaq === index ? 'rotate-45' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <div
                  className={`accordion-content ${openFaq === index ? 'open' : ''}`}
                >
                  <p className="p-4 text-gray-600 bg-[#F0F4FF]">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1A1F2E] mb-2">
                Новости и статьи
              </h2>
              <p className="text-lg text-gray-600">
                Следите за последними новостями института
              </p>
            </div>
            <button className="hidden md:block px-6 py-2 border border-[#3B82F6] text-[#3B82F6] rounded-full hover:bg-[#3B82F6] hover:text-white transition-colors">
              Все новости
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <a href="#" key={index} className="block">
                <div
                  className="group card-hover rounded-xl overflow-hidden bg-white border border-[#F0F4FF] h-full flex flex-col"
                >
                  <div className="relative">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-[#3B82F6] text-white text-xs rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-medium text-[#1A1F2E] group-hover:text-[#3B82F6] transition-colors mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">{item.desc}</p>
                    <div className="flex items-center text-xs text-gray-400">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.date}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1A1F2E] mb-8">
            Контакты
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <p className="text-lg text-[#1A1F2E] font-medium">
                  443111, г. Самара, Московское шоссе, 125А
                </p>
              </div>
              <div>
                <h4 className="text-gray-500 mb-2">Режим работы</h4>
                <p className="text-[#1A1F2E]">
                  Понедельник–пятница с 8:30 до 17:00,<br />
                  перерыв на обед с 13:00 до 13:30
                </p>
              </div>
              <div>
                <h4 className="text-gray-500 mb-2">Email</h4>
                <p className="text-[#1A1F2E]">AcademyofKnowledge@mail.ru</p>
              </div>
              <div>
                <h4 className="text-gray-500 mb-2">Телефон</h4>
                <a href="tel:+79461234567" className="text-[#1A1F2E] hover:text-[#3B82F6] transition-colors">
                  +7 (946) 123-45-67
                </a>
              </div>
              <div>
                <h4 className="text-gray-500 mb-2">Есть вопросы?</h4>
                <p className="text-[#1A1F2E] mb-4">
                  За консультацией по образовательным услугам обращаться по телефону:
                </p>
                <a href="tel:+79461234567">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      handlePhoneClick();
                    }}
                    className="px-6 py-3 bg-[#F0F4FF] text-[#3B82F6] rounded-full font-medium hover:bg-[#3B82F6] hover:text-white transition-colors"
                  >
                    +7 (946) 123-45-67
                  </button>
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden h-[400px]">
              <iframe
              
                src="https://yandex.ru/map-widget/v1/?ll=50.209024%2C53.239294&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzM4MDYwNxJC0KDQvtGB0YHQuNGPLCDQodCw0LzQsNGA0LAsINCc0L7RgdC60L7QstGB0LrQvtC1INGI0L7RgdGB0LUsIDEyNdCQIgoNCtZIQhUJ9VRC&z=17.05"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
