import "./Createproject.css";

import cancelIcon from "../../Assets/Icons/cross.svg";
import { useEffect, useState } from "react";

function Createproject({ setOpenModal, setProjects, projects }) {
    
  const [error, setError] = useState("");
  const [projectname, setProjectname] = useState("");
  const [customer, setCustomer] = useState("");
  const [sentDate, setSentDate] = useState("");
  const [amount, setAmount] = useState("");
  const [projectState, setProjectState] = useState("sent");

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);

  const days = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  function closeModal(e) {
    if (e.target.classList.contains("add-project-backdrop")) {
      setOpenModal(false);
    }
  }

  function formateDate(date) {
    const datearray = date.split("-");
    const textDate =
      datearray[2] + " " + days[Number(datearray[1]) - 1] + " " + datearray[0];
    return textDate;
  }

  function addProject() {
    if (!projectname || !customer || !amount || !projectState || !sentDate) {
      setError("Field is Empty !");
      return;
    }
    const data = {
      id: Math.floor(Math.random() * 999999),
      projectname: projectname,
      customer: customer,
      date: formateDate(sentDate),
      amount: amount,
      status: projectState,
    };

    const dummyProjects = [...projects]
    dummyProjects.push(data)
    setProjects(dummyProjects)

    setOpenModal(false)
  }

  return (
    <div className="add-project-backdrop" onClick={closeModal}>
      <div className="add-project-modal">
        {error && <span className="error-message">{error}</span>}
        <div className="add-project-header">
          <h2>Create New Project</h2>
          <span className="cancel-btn" onClick={() => setOpenModal(false)}>
            <img src={cancelIcon} />
          </span>
        </div>

        <div className="project-form">
          <div className="input-wrapper">
            <label>Project Name</label>
            <input
              type="text"
              placeholder="e.g. web project"
              value={projectname}
              onChange={(e) => setProjectname(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label>Customer</label>
            <input
              type="text"
              placeholder="e.g. john doe"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label>Sent Date</label>
            <input
              type="date"
              value={sentDate}
              onChange={(e) => setSentDate(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label>Amount ($)</label>
            <input
              type="number"
              placeholder="000.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label>Project Status</label>
            <select
              defaultValue={projectState}
              onChange={(e) => setProjectState(e.target.value)}
            >
              <option value="sent">Sent</option>
              <option value="draft">Draft</option>
              <option value="rejected">Rejected</option>
              <option value="paid">Paid</option>
            </select>
          </div>
          <div className="button">
            <button className="add-btn" onClick={addProject}>
              Add Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createproject;
