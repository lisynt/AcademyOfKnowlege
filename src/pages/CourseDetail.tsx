import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CourseDetail() {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const handleEnroll = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const modules = [
    {
      id: 1,
      title: 'Модуль 1: Введение в Data Science',
      topics: [
        'Основы программирования на Python',
        'Работа с Jupyter Notebook',
        'Библиотеки NumPy и Pandas',
        'Визуализация данных с Matplotlib и Seaborn',
      ],
    },
    {
      id: 2,
      title: 'Модуль 2: Математика для Data Science',
      topics: [
        'Линейная алгебра',
        'Математический анализ',
        'Теория вероятностей',
        'Статистика и статистические тесты',
      ],
    },
    {
      id: 3,
      title: 'Модуль 3: Машинное обучение',
      topics: [
        'Supervised Learning: регрессия и классификация',
        'Unsupervised Learning: кластеризация',
        'Работа с библиотекой Scikit-learn',
        'Оценка качества моделей',
      ],
    },
    {
      id: 4,
      title: 'Модуль 4: Глубокое обучение',
      topics: [
        'Нейронные сети и их архитектуры',
        'Работа с TensorFlow и Keras',
        'Компьютерное зрение',
        'Обработка естественного языка (NLP)',
      ],
    },
    {
      id: 5,
      title: 'Модуль 5: Практические проекты',
      topics: [
        'Анализ реальных датасетов',
        'Построение предсказательных моделей',
        'Деплой ML-моделей',
        'Итоговый проект',
      ],
    },
  ];

  const benefits = [
    'Доступ к платформе на время обучения и 1 год после',
    'Библиотека материалов и датасетов',
    'Личный куратор и поддержка',
    'Помощь в трудоустройстве',
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-sm text-[#3B82F6]">IT и программирование</span>
            <h1 className="text-4xl md:text-5xl font-serif text-[#3B82F6] mt-2 mb-4">
              Data Science: от основ до машинного обучения
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Комплексная программа обучения аналитике данных и машинному обучению. Вы изучите Python, библиотеки для анализа данных, статистику, алгоритмы машинного обучения и нейронные сети.
            </p>
            <div className="flex items-center justify-center space-x-6 mt-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-[#3B82F6]">4.9 (1240 студентов)</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#3B82F6] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-[#3B82F6]">320 часов</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#3B82F6] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-[#3B82F6]">Иванов А.С.</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => navigate(-1)}
            className="text-gray-500 hover:text-[#3B82F6] transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Назад
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Teacher */}
              <div className="bg-white rounded-xl p-6 border border-[#F0F4FF] card-hover">
                <h2 className="text-2xl font-serif text-[#1A1F2E] mb-4">Преподаватель</h2>
                <div className="flex items-start space-x-4">
                  <img
                    src="./images/teachers/ivanoval.jpg"
                    alt="Иванов Александр Сергеевич"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-[#1A1F2E]">Иванов Александр Сергеевич</h3>
                    <p className="text-[#3B82F6] mb-2">практикующий Data Scientist</p>
                    <p className="text-gray-600 text-sm">
                      Более 10 лет опыта в анализе данных и машинном обучении. Работал в ведущих IT-компаниях.
                    </p>
                  </div>
                </div>
              </div>

              {/* Program */}
              <div className="bg-white rounded-xl p-6 border border-[#F0F4FF] card-hover">
                <h2 className="text-2xl font-serif text-[#1A1F2E] mb-6">Программа курса</h2>
                <div className="space-y-4">
                  {modules.map((module) => (
                    <div
                      key={module.id}
                      className="border border-[#F0F4FF] rounded-xl overflow-hidden"
                    >
                      <div className="w-full flex items-center p-4 bg-white">
                        <span className="w-8 h-8 rounded-full bg-[#F0F4FF] text-[#3B82F6] flex items-center justify-center font-medium mr-4 flex-shrink-0">
                          {module.id}
                        </span>
                        <span className="text-lg font-medium text-[#1A1F2E] flex-1 text-left">
                          {module.title}
                        </span>
                      </div>
                      <div className="p-4 bg-[#F0F4FF]">
                        <ul className="space-y-2">
                          {module.topics.map((topic, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                              <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-xl p-6 border border-[#F0F4FF] card-hover">
                <h2 className="text-2xl font-serif text-[#1A1F2E] mb-4">Что вы получите</h2>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-xl p-6 border border-[#F0F4FF] card-hover">
                <img
                  src="./images/courses/data.jpg"
                  alt="Data Science"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <div className="mb-4">
                  <p className="text-2xl font-bold text-[#1A1F2E]">65 000 ₽</p>
                  <p className="text-sm text-gray-600">или 5 417 ₽ / мес</p>
                </div>
                <button 
                  onClick={handleEnroll}
                  className="w-full py-3 bg-[#3B82F6] text-white font-medium rounded-full btn-primary hover:bg-[#2563EB] mb-3 flex items-center justify-center"
                >
                  Записаться на курс
                </button>
                <button className="ask-btn w-full py-3 bg-[#F0F4FF] text-[#1A1F2E] font-medium rounded-full flex items-center justify-center">
                  Задать вопрос
                </button>

                <div className="border-t border-[#F0F4FF] mt-6 pt-6 space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-[#3B82F6] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex-1">
                      <p className="font-medium text-[#1A1F2E]">Документ</p>
                      <p className="text-sm text-gray-600">Диплом о профессиональной переподготовке государственного образца</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-[#3B82F6] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div className="flex-1">
                      <p className="font-medium text-[#1A1F2E]">Формат</p>
                      <p className="text-sm text-gray-600">Полностью дистанционно</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-[#3B82F6] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div className="flex-1">
                      <p className="font-medium text-[#1A1F2E]">Студентов</p>
                      <p className="text-sm text-gray-600">1240</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Help Card */}
              <div className="bg-[#D6E4FF] rounded-xl p-6">
                <h3 className="text-lg font-medium text-[#1A1F2E] mb-2">Нужна помощь с выбором?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Наши специалисты помогут подобрать подходящую программу
                </p>
                <button className="flex items-center text-[#3B82F6] font-medium hover:text-[#1E40AF] transition-colors">
                  Подобрать программу
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 toast z-50">
          <div className="bg-[#1A1F2E] text-white px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3">
            <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">Вы записаны!</span>
          </div>
        </div>
      )}
    </div>
  );
}
