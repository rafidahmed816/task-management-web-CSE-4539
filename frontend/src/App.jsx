import { useState,useEffect } from 'react'
import './styles.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
function App() {
  const [user, setUser] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App
