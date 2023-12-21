import { Route, Routes } from "react-router";
import "./App.css";

import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import Nopage from "./components/Nopage/Nopage";
import Createproject from "./components/Createproject/Createproject";
import { useState } from "react";

function App() {
  const [openmodal, setOpenModal] = useState(false);

  const [projects, setProjects] = useState([
    {
      id: 1,
      projectname: "Travel app Design",
      customer: "Jacob Jones",
      date: "28 Oct 2022",
      amount: 240.9,
      status: "sent",
    },
    {
      id: 2,
      projectname: "UX Research for Event management app",
      customer: "Wade Warren",
      date: "18 Oct 2022",
      amount: 120.0,
      status: "draft",
    },
    {
      id: 3,
      projectname: "Redesign - Food delivery app",
      customer: "Annette Black",
      date: "15 Oct 2022",
      amount: 351.0,
      status: "paid",
    },
    {
      id: 4,
      projectname: "Web App - Online Learning",
      customer: "Cameron Williamson",
      date: "15 Oct 2022",
      amount: 240.0,
      status: "paid",
    },
    {
      id: 5,
      projectname: "Railway web casestudy",
      customer: "Robert Fox",
      date: "13 Oct 2022",
      amount: 120.0,
      status: "sent",
    },
    {
      id: 6,
      projectname: "Responsive web design",
      customer: "Floyd Miles",
      date: "06 Oct 2022",
      amount: 120.0,
      status: "rejected",
    },
    {
      id: 7,
      projectname: "Music app design",
      customer: "Theresa Webb",
      date: "04 Oct 2022",
      amount: 120.0,
      status: "draft",
    },
  ]);

  return (
    <div className="App">
      <div className="app-wrapper">
        <Sidebar />
        <div className="main-section">
          <Routes>
            <Route
              path="/"
              element={<Main setOpenModal={setOpenModal} projects={projects}/>}
            />
            <Route path="/notbuild" element={<Nopage />} />
          </Routes>
        </div>
        {openmodal && <Createproject setOpenModal={setOpenModal} projects={projects} setProjects={setProjects}/>}
      </div>
    </div>
  );
}

export default App;
