import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'

function App() {

  return (
    <>
      <nav>
        <h1><Link to={"/home"}>Kalvium &#10084;&#65039;</Link></h1>
        <div id='container'>
          <h3><Link to={"/contacts"}>Contacts</Link></h3>
          <h3><Link to={"/about"}>About</Link></h3>
        </div>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
      
    </>
  )
}

export default App
