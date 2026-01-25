import { NAV_ITEMS } from "./components/header/data/navData"
import Header from "./components/header/Header"
import "./styles/index.css"
import "./styles/reset.css"
import "./styles/global.css"
import Footer from "./components/footer/Footer"
import PlaygroundPage from "./components/playground/PlaygroundPage"
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import ScrollToHash from "./helpers/scrollToHash"

function App() {

  return (
    <>
      <Header items={NAV_ITEMS} />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="playground" element={<PlaygroundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
