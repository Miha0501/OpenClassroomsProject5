import './sass/App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Error from "./components/pages/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

