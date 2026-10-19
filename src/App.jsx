import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import GameCard from './components/GameCard.jsx'
import Footer from './components/Footer.jsx'
import Contato from './pages/Contato.jsx'
import Error from './pages/Error.jsx'
import Home from './pages/Home.jsx'
import Jogos from './pages/Jogos.jsx'
import Login from './pages/Login.jsx'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jogos' element={<Jogos />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
