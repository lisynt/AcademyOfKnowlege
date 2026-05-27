import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Catalog() {
  const [showToast, setShowToast] = useState(false);

  const handleEnroll = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const courses = [
    {
      id: 1,
      title: 'Data Science: от основ машинного обучения',
      category: 'IT и программирование',
      hours: 320,
      rating: 4.9,
      students: 1240,
      teacher: 'Иванов А.С.',
      price: 65000,
      format: 'Полностью дистанционно',
      image: './images/courses/data.jpg',
      diploma: 'Диплом о профессиональной переподготовке',
    },
    {
      id: 2,
      title: 'Графический дизайн и визуальные коммуникации',
      category: 'Дизайн',
      hours: 256,
      rating: 4.8,
      students: 890,
      teacher: 'Петрова М.И.',
      price: 48000,
      format: 'Очно-заочно',
      image: './images/courses/graphic.jpg',
      diploma: 'Диплом о профессиональной переподготовке',
    },
    {
      id: 3,
      title: 'Управление проектами (Project Management)',
      category: 'Управление',
      hours: 144,
      rating: 4.7,
      students: 1560,
      teacher: 'Сидоров В.П.',
      price: 35000,
      format: 'Полностью дистанционно',
      image: './images/courses/pm.png',
      diploma: 'Удостоверение о повышении квалификации',
    },
    {
      id: 4,
      title: 'Frontend-разработка: React и современный JavaScript',
      category: 'IT и программирование',
      hours: 288,
      rating: 4.9,
      students: 2100,
      teacher: 'Киселев М.В.',
      price: 58000,
      format: 'Полностью дистанционно',
      image: './images/courses/front.png',
      diploma: 'Диплом о профессиональной переподготовке',
    },
    {
      id: 5,
      title: 'Строительство и техническая экспертиза',
      category: 'Строительство',
      hours: 360,
      rating: 4.6,
      students: 450,
      teacher: 'Малафеев Б.А.',
      price: 72000,
      format: 'Очно-заочно',
      image: './images/courses/build.png',
      diploma: 'Диплом о профессиональной переподготовке',
    },
    {
      id: 6,
      title: 'Digital-маркетинг и SMM',
      category: 'Маркетинг',
      hours: 180,
      rating: 4.8,
      students: 1780,
      teacher: 'Новикова Е.С.',
      price: 42000,
      format: 'Полностью дистанционно',
      image: './images/courses/smm.png',
      diploma: 'Удостоверение о повышении квалификации',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-[#3B82F6] mb-4 animate-fade-in-up">
            Каталог курсов
          </h1>
          <p className="text-lg text-gray-600 animate-fade-in-up delay-100">
            Найдите идеальную программу для своего развития
          </p>

          {/* Search */}
          <div className="mt-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Поиск курсов..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-[#F0F4FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Link to="/course-detail" key={course.id}>
                <div
                  className="bg-white rounded-xl overflow-hidden border border-[#F0F4FF] card-hover animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 text-[#3B82F6] text-xs rounded-full">
                      {course.format}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-[#3B82F6] font-medium">
                      {course.category}
                    </span>
                    <h3 className="text-lg font-medium text-[#1A1F2E] mt-2 mb-3 line-clamp-2">
                      {course.title}
                    </h3>
                  
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.hours} часов
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {course.rating} ({course.students} студентов)
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {course.teacher}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#F0F4FF]">
                    <div>
                      <p className="text-xl font-semibold text-[#1A1F2E]">
                        {course.price.toLocaleString()}₽
                      </p>
                      <p className="text-xs text-gray-500">или рассрочка</p>
                    </div>
                    <button 
                      onClick={handleEnroll}
                      className="px-5 py-2.5 bg-[#3B82F6] text-white text-sm font-medium rounded-full btn-primary hover:bg-[#2563EB]"
                    >
                      Записаться
                    </button>
                  </div>

                  <p className="text-xs text-gray-400 mt-3">{course.diploma}</p>
                </div>
              </div>
              </Link>
            ))}
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
