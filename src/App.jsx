import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./component/header/Header";
import { Index } from "./pages/Index";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { Support } from "./pages/Support";
import { JobList } from "./component/job-list/JobList";
import { JoblistDetails } from "./component/job-list-details/JoblistDetails";
import { About } from "./pages/About";
import { List } from "./component/job-list/List";
import { HrmService } from "./component/service-dropdown/HrmService/HrmService";
import { StockMgt } from "./component/service-dropdown/Stock-Mgt/StockMgt";
import { Pos } from "./component/service-dropdown/pos/Pos";
import { ProjectMGT } from "./component/service-dropdown/project-MGT/ProjectMgt";
import { Crm } from "./component/service-dropdown/crm/Crm";
import { Accounting } from "./component/service-dropdown/Accounting/Accounting";

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Index} />
          <Route exact path="about" Component={About} />
          <Route path="contact" Component={Contact} />
          <Route path="service" Component={Services} />
          <Route path="support" Component={Support} />
          <Route path="joblist" Component={JobList} />
          <Route path="jobdetails" Component={JoblistDetails} />
          <Route path="list" Component={List} />
          <Route path="hrmservices" Component={HrmService} />
          <Route path="stockmgt" Component={StockMgt} />
          <Route path="pos" Component={Pos} />
          <Route path="projectMgt" Component={ProjectMGT} />
          <Route path="crm" Component={Crm} />
          <Route path="accounting" Component={Accounting} />
        
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
