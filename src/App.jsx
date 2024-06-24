import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./component/header/Header";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { Support } from "./pages/Support";
import { JobList } from "./component/job-list/JobList";
import { JoblistDetails } from "./component/job-list-details/JoblistDetails";
import { About } from "./pages/About";

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="about" Component={About} />
          <Route path="contact" Component={Contact} />
          <Route path="service" Component={Services} />
          <Route path="support" Component={Support} />
          <Route path="joblist" Component={JobList} />
          <Route path="jobdetails" Component={JoblistDetails} />
        
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
