import './css/App.css'
import Homepage from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Fav from './pages/Favorites';
import NavBar from './components/NavBar';

function App() {

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Fav" element={<Fav />} />
        </Routes>
      </main>
    </div>
  );

}


export default App;
