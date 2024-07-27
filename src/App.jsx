import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";

import { Home, Patients, Appointments, Plans, Medicines, Settings, Info } from "./assets/Pages"
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
            {/* <Route path={["/", "/Dashboard"]}   element={<Home/>} /> */}
            {homePaths.map((path) => (
              <Route key={Math.random() * 10} path={path}             element={<Home/>} />
            ))}
            <Route path="/Patients"             element={<Patients/>} />
            <Route path="/Appointments"         element={<Appointments/>} />
            <Route path="/Plans"                element={<Plans/>} />
            <Route path="/Medicines"            element={<Medicines/>} />
            <Route path="/Settings"             element={<Settings/>} />
            <Route path="/Info"                 element={<Info/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
