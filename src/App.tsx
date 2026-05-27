import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CourseDetail from './pages/CourseDetail';
import KnowledgeBase from './pages/KnowledgeBase';
import CourseSelection from './pages/CourseSelection';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F7FAFF]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/course-detail" element={<CourseDetail />} />
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/course-selection" element={<CourseSelection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
