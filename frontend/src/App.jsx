import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage'; 

function App() {
  return (
    <div>
      <h1 className="min-h-screen bg-base-200 transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </h1>
    </div>
  );
}

export default App;
