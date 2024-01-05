import { NavLink } from "react-router-dom";
import "./Sidelinks.css";
import { useState } from "react";

function Sidelinks(props) {
  const [active, setActive] = useState(
    props.name === "Dashboard" ? true : false
  );

  function makeActive(e) {
    const image = e.currentTarget.querySelector("img")
  
    const allNavigations = document.querySelectorAll(".sidelink");
    allNavigations.forEach((nav) => {
      nav.classList.remove("active");
    });

    const allSidebarImages = document.querySelectorAll(".sidebar-logo-image");
    allNavigations.forEach((nav) => {
      nav.classList.remove("active");
    });

    image.classList.add("active")
    e.currentTarget.classList.add("active");
  }

  return (
    <div
      className={props.name === "Dashboard" ? "sidelink active" : "sidelink"}
      onClick={makeActive}
    >
      <NavLink to={"/" + props.navigate}>
        <img src={props.icon} className={props.name === "Dashboard" ? "sidebar-logo-image active" : "sidebar-logo-image"}/>
        <span>{props.name}</span>
      </NavLink>
    </div>
  );
}

export default Sidelinks;
