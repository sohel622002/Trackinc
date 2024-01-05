import React from "react";

import "./Mobileacard.css";

function Mobilecard({ projects }) {
  console.log(projects);
  return projects.map((project) => (
    <div className="card-wrapper" key={project.id}>
      <div className="card-details">
        <span>{project.projectname}</span>
        <span>{project.customer}</span>
        <span>{project.date}</span>
      </div>
      <div className="card-right">
        <span className="card-name">${project.amount}</span>
        <span className="projects-buttons">
          {project.status === "sent" && (
            <button className="sent-btn">SENT</button>
          )}
          {project.status === "draft" && (
            <button className="draft-btn">DRAFT</button>
          )}
          {project.status === "paid" && (
            <button className="paid-btn">PAID</button>
          )}
          {project.status === "rejected" && (
            <button className="rejected-btn">REJECTED</button>
          )}
        </span>
      </div>
    </div>
  ));
}

export default Mobilecard;
