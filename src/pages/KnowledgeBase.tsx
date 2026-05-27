export default function KnowledgeBase() {
  const articles = [
    {
      tag: 'Гайды',
      title: 'Как поступить на курс: пошаговая инструкция',
      desc: 'Подробное руководство по записи на курс, оплате и началу обучения на платформе.',
      time: '5 минут',
      image: './images/learnbase/lb1.jpg',
    },
    {
      tag: 'Обзоры профессий',
      title: 'Data Scientist: профессия будущего',
      desc: 'Что делает Data Scientist, сколько зарабатывает и какие навыки нужны для старта.',
      time: '8 минут',
      image: './images/learnbase/lb2.png  ',
    },
    {
      tag: 'Обзоры профессий',
      title: 'Frontend-разработчик: путь от новичка до профи',
      desc: 'Как стать Frontend-разработчиком, какие технологии изучать и где искать работу.',
      time: '10 минут',
      image: './images/learnbase/lb3.jpg',
    },
    {
      tag: 'Гайды',
      title: 'Как эффективно учиться онлайн: 10 советов',
      desc: 'Проверенные методики для эффективного онлайн-обучения и достижения результатов.',
      time: '6 минут',
      image: './images/learnbase/lb4.png',
    },
    {
      tag: 'Обзоры профессий',
      title: 'Digital-маркетолог: навыки и карьера',
      desc: 'Что входит в работу digital-маркетолога и как начать карьеру в маркетинге.',
      time: '7 минут',
      image: './images/learnbase/lb5.png',
    },
    {
      tag: 'Обзоры профессий',
      title: 'Графический дизайнер: творчество и технологии',
      desc: 'Обзор профессии графического дизайнера, необходимых инструментов и навыков.',
      time: '9 минут',
      image: './images/learnbase/lb6.jpg',
    },
  ];

  const glossary = [
    { term: 'API', category: 'IT', desc: 'Application Programming Interface - набор методов и инструментов для взаимодействия программ.' },
    { term: 'Machine Learning', category: 'Data Science', desc: 'Машинное обучение - раздел искусственного интеллекта, изучающий методы построения алгоритмов, способных обучаться.' },
    { term: 'UX/UI Design', category: 'Дизайн', desc: 'User Experience/User Interface Design - проектирование пользовательского опыта и интерфейсов.' },
    { term: 'SEO', category: 'Маркетинг', desc: 'Search Engine Optimization - поисковая оптимизация сайтов для улучшения видимости в поисковых системах.' },
  ];

  const webinars = [
    {
      title: 'Введение в Data Science',
      author: 'Александр Иванов',
      date: '20 марта 2026',
      views: 2400,
      image: './images/webin/p1.jpg',
    },
    {
      title: 'Тренды веб-разработки в 2026',
      author: 'Дмитрий Козлов',
      date: '15 марта 2026',
      views: 3100,
      image: './images/webin/p2.png',
    },
    {
      title: 'Как начать карьеру в IT',
      author: 'Елена Новикова',
      date: '10 марта 2026',
      views: 4200,
      image: './images/webin/p3.jpg',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#3B82F6] mb-4 animate-fade-in-up">
            База знаний
          </h1>
          <p className="text-lg text-[#3B82F6] animate-fade-in-up delay-100">
            Полезные материалы для успешного обучения и развития карьеры
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-[#1A1F2E] mb-8">Статьи и гайды</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-[#F0F4FF] card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[#F0F4FF] text-[#3B82F6] text-xs rounded-full">
                      {article.tag}
                    </span>
                    <span className="text-xs text-gray-400">{article.time}</span>
                  </div>
                  <h3 className="text-lg font-medium text-[#1A1F2E] mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {article.desc}
                  </p>
                  <button className="text-[#3B82F6] text-sm font-medium hover:text-[#1E40AF] transition-colors flex items-center">
                    Читать
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-[#1A1F2E] mb-8">Глоссарий терминов</h2>
          <div className="space-y-4">
            {glossary.map((item, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-[#F0F4FF] rounded-xl border-l-4 border-[#3B82F6] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-medium text-[#1A1F2E]">{item.term}</h3>
                    <span className="ml-3 px-2 py-0.5 bg-white text-xs text-gray-500 rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="text-[#3B82F6] font-medium hover:text-[#1E40AF] transition-colors">
              Показать все термины
            </button>
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-[#1A1F2E] mb-8">Архив вебинаров</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {webinars.map((webinar, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-[#F0F4FF] card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={webinar.image}
                    alt={webinar.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <img src="./images/play.png" alt="Play" className="w-4 h-6" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium text-[#1A1F2E] mb-2">
                    {webinar.title}
                  </h3>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>{webinar.author} • {webinar.date}</p>
                    <p>{webinar.views.toLocaleString()} просмотров</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
