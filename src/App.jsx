import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./component/header/Header"
import {About} from "./pages/About"
import {Contact} from "./pages/Contact"
import {Services} from "./pages/Services"
import { Support} from "./pages/Support"


function App() {
  return (
    <>
    <Router>
    <Header />
    <Routes>
    <Route exact path="/" Component={About} />
    <Route  path="contact" Component={Contact} />
    <Route  path="service" Component={Services} />
    <Route  path="support" Component={Support} />
   </Routes>
    </Router>


    </>
  )
}

export default App
