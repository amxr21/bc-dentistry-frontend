import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";

import { Home, Patients, Appointments, Plans, LabResults, Settings, Info, Patient } from "./assets/Pages"
import Navbar from "./assets/Sections/Navbar.jsx"
import Topbar from "./assets/Sections/Topbar.jsx"


function App() {
  const homePaths = ["/", "/Dashboard"]


  return (
    <div className="flex">
      <Router>
        <Navbar />
        <div className="ml-[14em] flex w-full">
          <Topbar />
          <Routes>
            {homePaths.map((path) => (
              <Route key={Math.random() * 10} path={path} element={<Home/>} />
            ))}
            <Route path="/Appointments"         element={<Appointments/>} />
            <Route path="/Patients"             element={<Patients/>} />
            <Route path="/Patients/:id"         element={<Patient/>} />
            <Route path="/Plans"                element={<Plans/>} />
            <Route path="/LabResults"            element={<LabResults/>} />
            <Route path="/Settings"             element={<Settings/>} />
            <Route path="/Info"                 element={<Info/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
