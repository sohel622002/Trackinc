import "./Projectstabel.css";

function Projectstabel({ projects }) {
  return (
    <div className="projects">
      <div className="row-header">
        <span>Project Name</span>
        <span>Customer</span>
        <span>Sent Date</span>
        <span className="project-amount">Amount</span>
        <span className="projects-buttons"></span>
      </div>

      {projects.map((project) => (
        <div className="row" key={project.id}>
          <span>{project.projectname}</span>
          <span>{project.customer}</span>
          <span>{project.date}</span>
          <span className="project-amount">${project.amount}</span>
          <span className="projects-buttons">
            {project.status === 'sent' && <button className="sent-btn">SENT</button>}
            {project.status === 'draft' && <button className="draft-btn">DRAFT</button>}
            {project.status === 'paid' && <button className="paid-btn">PAID</button>}
            {project.status === 'rejected' && <button className="rejected-btn">REJECTED</button>}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Projectstabel;
