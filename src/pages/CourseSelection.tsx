import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CourseSelection() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showToast, setShowToast] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // Load answers from localStorage on mount
  useEffect(() => {
    const savedAnswers = localStorage.getItem('courseSelectionAnswers');
    const savedStep = localStorage.getItem('courseSelectionStep');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10));
    }
    setIsLoaded(true);
  }, []);

  // Save answers to localStorage when they change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('courseSelectionAnswers', JSON.stringify(answers));
    }
  }, [answers, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('courseSelectionStep', currentStep.toString());
    }
  }, [currentStep, isLoaded]);

  const questions = [
    {
      id: 0,
      text: 'Какая область вас интересует?',
      options: [
        { value: 'it', label: 'IT и программирование' },
        { value: 'design', label: 'Дизайн' },
        { value: 'marketing', label: 'Маркетинг' },
        { value: 'management', label: 'Управление' },
      ],
    },
    {
      id: 1,
      text: 'Какой у вас уровень подготовки?',
      options: [
        { value: 'beginner', label: 'Начинающий' },
        { value: 'intermediate', label: 'Средний' },
        { value: 'advanced', label: 'Продвинутый' },
      ],
    },
    {
      id: 2,
      text: 'Сколько времени вы готовы уделять обучению?',
      options: [
        { value: 'short', label: 'До 3 месяцев' },
        { value: 'medium', label: '3-6 месяцев' },
        { value: 'long', label: 'Более 6 месяцев' },
      ],
    },
    {
      id: 3,
      text: 'Какой формат обучения предпочитаете?',
      options: [
        { value: 'online', label: 'Полностью онлайн' },
        { value: 'blended', label: 'Смешанный (онлайн + офлайн)' },
      ],
    },
  ];

  const courses = [
    {
      id: 1,
      title: 'Data Science: от основ до машинного обучения',
      format: 'Полностью дистанционно',
      price: 65000,
      duration: '8 месяцев',
      installment: 5417,
      match: 0,
      tags: ['it', 'advanced', 'long', 'online'],
    },
    {
      id: 2,
      title: 'Frontend-разработка: React и современный JavaScript',
      format: 'Полностью дистанционно',
      price: 58000,
      duration: '6 месяцев',
      installment: 4833,
      match: 0,
      tags: ['it', 'intermediate', 'medium', 'online'],
    },
    {
      id: 3,
      title: 'Python для начинающих',
      format: 'Полностью дистанционно',
      price: 28000,
      duration: '3 месяца',
      installment: 2333,
      match: 0,
      tags: ['it', 'beginner', 'short', 'online'],
    },
    {
      id: 4,
      title: 'Графический дизайн и визуальные коммуникации',
      format: 'Очно-заочно',
      price: 48000,
      duration: '6 месяцев',
      installment: 4000,
      match: 0,
      tags: ['design', 'beginner', 'medium', 'blended'],
    },
    {
      id: 5,
      title: 'Digital-маркетинг и SMM',
      format: 'Полностью дистанционно',
      price: 42000,
      duration: '4 месяца',
      installment: 3500,
      match: 0,
      tags: ['marketing', 'beginner', 'medium', 'online'],
    },
    {
      id: 6,
      title: 'Управление проектами (Project Management)',
      format: 'Полностью дистанционно',
      price: 35000,
      duration: '4 месяца',
      installment: 2917,
      match: 0,
      tags: ['management', 'intermediate', 'medium', 'online'],
    },
  ];

  const handleEnroll = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const calculateMatches = () => {
    return courses.map((course) => {
      let matchScore = 0;
      let maxScore = 0;

      Object.values(answers).forEach((answer) => {
        maxScore += 25; // Each question is worth 25%
        if (course.tags.includes(answer)) {
          matchScore += 25;
        }
      });

      return {
        ...course,
        match: maxScore > 0 ? Math.round((matchScore / maxScore) * 100) : 0,
      };
    }).sort((a, b) => b.match - a.match);
  };

      const matchedCourses = calculateMatches();
  const isComplete = currentStep === questions.length;

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#3B82F6] mb-8 animate-fade-in-up">
            Подбор программы обучения
          </h1>
          
          {!isComplete ? (
            <div className="animate-fade-in-up">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Вопрос {currentStep + 1} из {questions.length}</span>
                  <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-[#F0F4FF] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#3B82F6] transition-all duration-500"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="bg-white rounded-2xl p-8 border border-[#F0F4FF] shadow-sm">
                <h2 className="text-2xl font-medium text-[#1A1F2E] mb-6 text-center">
                  {questions[currentStep].text}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[currentStep].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(currentStep, option.value)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        answers[currentStep] === option.value
                          ? 'border-[#3B82F6] bg-[#F0F4FF]'
                          : 'border-[#F0F4FF] hover:border-[#3B82F6]/50'
                      }`}
                    >
                      <span className="text-[#1A1F2E] font-medium">{option.label}</span>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    className={`px-6 py-3 rounded-full font-medium transition-colors ${
                      currentStep === 0
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-[#3B82F6] hover:bg-[#F0F4FF]'
                    }`}
                    disabled={currentStep === 0}
                  >
                    Назад
                  </button>
                  <button
                    onClick={() => {
                      if (currentStep === questions.length - 1) {
                        setCurrentStep(questions.length);
                      } else {
                        setCurrentStep(currentStep + 1);
                      }
                    }}
                    disabled={!answers[currentStep]}
                    className={`px-8 py-3 rounded-full font-medium transition-all ${
                      answers[currentStep]
                        ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {currentStep === questions.length - 1 ? 'Показать результаты' : 'Далее'}
                  </button>
                </div>
              </div>
            </div>
          ) : (
           <div className="max-w-5xl py-8 mx-auto mb-8">
              <div className="text-left">
                <h2 className="text-3xl font-serif text-[#1A1F2E] mb-2">
                 Подходящие курсы для вас
                </h2>
                <p className="text-gray-600 text-lg">
                  Мы подобрали <span className="border-b-2 border-green-600 ">{matchedCourses.filter(c => c.match > 0).length} программ</span>, соответствующие вашим критериям
                </p>
              </div>
              </div>
            )}
        </div>
      </section>
      
      {/* Results */}
      {isComplete && (
        <section className="pt-0 pb-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {matchedCourses.filter(c => c.match > 0).map((course, index) => (
              <div
                key={course.id}
                className="bg-white rounded-xl p-6 border border-[#F0F4FF] card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-medium text-[#1A1F2E] text-left">
                    {course.title}
                  </h3>
                  <span className="px-3 py-1 bg-[#D6E4FF] text-[#3B82F6] text-sm rounded-full">
                    {course.match}% совпадение
                  </span>
                </div>
                
                <p className="text-gray-500 mb-6 text-left">{course.format}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Стоимость</p>
                    <p className="text-lg font-semibold text-[#1A1F2E]">
                      {course.price.toLocaleString()} ₽
                    </p>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Длительность</p>
                    <p className="text-lg font-semibold text-[#1A1F2E]">
                      {course.duration}
                    </p>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Рассрочка</p>
                    <p className="text-lg font-semibold text-[#1A1F2E]">
                      {course.installment.toLocaleString()} ₽/мес
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Link to="/course-detail" className="flex-1">
                    <button className="w-full py-3 bg-[#3B82F6] text-white font-medium rounded-full btn-primary hover:bg-[#2563EB] flex items-center justify-center">
                      Подробнее о курсе
                    </button>
                  </Link>
                  <button 
                    onClick={handleEnroll}
                    className="px-8 py-3 bg-green-500 text-white font-medium rounded-full btn-primary hover:bg-green-600 flex items-center justify-center"
                  >
                    Записаться
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Consultation Section */}
      {isComplete && (
        <section className="py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#D6E4FF] rounded-xl p-8 text-center animate-fade-in-up">
              <h2 className="text-2xl font-serif text-[#1A1F2E] mb-2">
                Нужна консультация?
              </h2>
              <p className="text-gray-600 mb-6">
                Наши специалисты помогут сделать окончательный выбор и ответят на все вопросы
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={handleEnroll}
                  className="px-8 py-3 bg-[#3B82F6] text-white font-medium rounded-full btn-primary hover:bg-[#2563EB]"
                >
                  Записаться на консультацию
                </button>
                <Link to="/catalog">
                  <button className="px-8 py-3 bg-white text-[#3B82F6] font-medium rounded-full border-2 border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-colors">
                    Перейти к каталогу
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Restart Button */}
      {isComplete && (
        <section className="py-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <button 
              onClick={() => {
                setCurrentStep(0);
                setAnswers({});
                localStorage.removeItem('courseSelectionAnswers');
                localStorage.removeItem('courseSelectionStep');
              }}
              className="px-8 py-3 bg-[#F0F4FF] text-[#1A1F2E] font-medium rounded-full hover:bg-[#E0E8FF] transition-colors"
            >
              Начать заново
            </button>
          </div>
        </section>
      )}

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
