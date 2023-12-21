import { NavLink } from "react-router-dom";
import "./Sidelinks.css";

function Sidelinks(props) {

  
  function makeActive(e) {
    const allNavigations = document.querySelectorAll(".sidelink");
    allNavigations.forEach((nav) => {
      nav.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  }


  return (
    <div
      className={props.name === "Dashboard" ? "sidelink active" : "sidelink"}
      onClick={makeActive}
    >
      <NavLink to={"/" + props.navigate}>
        <img src={props.icon} />
        <span>{props.name}</span>
      </NavLink>
    </div>
  );
}

export default Sidelinks;
