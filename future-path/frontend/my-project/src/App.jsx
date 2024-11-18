import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Faq from './pages/FaqPage';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import NewsPage from './pages/NewsPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import LandPage from './pages/LandPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/Home' element={<HomePage />} />
        <Route path='/list' element={<ListPage />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/news' element={<NewsPage />} />
      </Routes>
    </Router>
  );
};

export default App;