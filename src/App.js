import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './components/categories';
import Books from './components/books';
import { Navbar } from './components/nav';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
