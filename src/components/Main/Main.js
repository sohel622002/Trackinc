import "./Main.css";

import searchIcon from "../../Assets/Icons/search.svg";
import notificationIcon from "../../Assets/Icons/notifications.svg";
import avatar from "../../Assets/Avatar01.png";
import avatar2 from "../../Assets/Avatar02.png";
import avatar3 from "../../Assets/Avatar03.png";
import avatar4 from "../../Assets/Avatar04.png";

import salesImage from "../../Assets/sales-card-logo.png";
import expancesImage from "../../Assets/Expense-card-logo.png";
import progitImage from "../../Assets/Profit-card-logo.png";
import incomeImage from "../../Assets/Income-card-logo.png";
import Projectstabel from "../Projectstabel/Projectstabel";
import threeDots from '../../Assets/Icons/more_vert.svg';

import Mobilecard from "../MobileCards/Mobilecard";

function Main({ setOpenModal, projects }) {

  function opensidebar(){
    const sidebar = document.querySelector('.sidebar-wrapper')
    if(sidebar.classList.contains("show")){
      sidebar.style.transform = "translate(-102%)"
      sidebar.classList.remove("show")
    } else {
      sidebar.style.transform = "translate(0)"
      sidebar.classList.add("show")
    }
  }

  return (
    <div className="main-section">
      <div className="dashboard-header-wrapper">
        <div className="dashboard-header">
          <p className="welcome-msg">
            Hi, Welcome back <span>Robert!</span>
          </p>
          <div className="search-avatar-wrapper">
            <label className="search-label">
              <img src={searchIcon} />
              <input placeholder="Search..." />
            </label>
            <span className="notificatio-icon">
              <img src={notificationIcon} />
              <span className="have-message"></span>
            </span>
            <img src={avatar} />
            <img className="threeDots" src={threeDots} onClick={opensidebar}/>
          </div>
        </div>
        <div className="finance-overview">
          <h2>Finance Overview</h2>
          <div className="finance-grid">
            <div className="finance-wrapper">
              <p className="money">$2,77,120</p>
              <p className="finance-name">Sales</p>
              <img src={salesImage} />
            </div>
            <div className="finance-wrapper">
              <p className="money">$60,100</p>
              <p className="finance-name">Expense</p>
              <img src={expancesImage} />
            </div>
            <div className="finance-wrapper">
              <p className="money">$57,230</p>
              <p className="finance-name">Profit</p>
              <img src={progitImage} />
            </div>
            <div className="finance-wrapper">
              <p className="money">$1,60,124</p>
              <p className="finance-name">Income</p>
              <img src={incomeImage} />
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="projects-table-wrapper">
          <div className="proects-header-wrapper">
            <p className="project-header">Current Projects</p>
            <button className="create-btn" onClick={() => setOpenModal(true)}>
              Create
            </button>
          </div>
          <div className="mobile-cards">
            <Mobilecard projects={projects}/>
          </div>
          <div className="projects-table">
            <Projectstabel projects={projects}/>
          </div>
        </div>
        <div className="events-wrapper">
          <p>Events</p>
          <div className="event-list">
            <div className="event">
              <div className="event-data">
                <img src={avatar} />
                <div>
                  <p className="event-employee_name">Wade Warren</p>
                  <p className="event-name">
                    🎂 <span className="tag">Birthday</span> .
                    <span className="time">Today</span>
                  </p>
                </div>
              </div>
              <button className="event-button">Wish</button>
            </div>

            <div className="event">
              <div className="event-data">
                <img src={avatar2} />
                <div>
                  <p className="event-employee_name">Wade Warren</p>
                  <p className="event-name">
                    🎉 <span className="tag">Joining Us</span> .
                    <span className="time">Today</span>
                  </p>
                </div>
              </div>
              <button className="event-button">Congratulations</button>
            </div>

            <div className="event">
              <div className="event-data">
                <img src={avatar3} />
                <div>
                  <p className="event-employee_name">Wade Warren</p>
                  <p className="event-name">
                    💼 <span>Work Anniversary</span> .<span>10 Sept, 2022</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="event">
              <div className="event-data">
                <img src={avatar4} />
                <div>
                  <p className="event-employee_name">Wade Warren</p>
                  <p className="event-name">
                    💼 <span>Work Anniversary</span> .<span>20 Sept, 2022</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="event">
              <div className="event-data">
                <img src={avatar} />
                <div>
                  <p className="event-employee_name">Wade Warren</p>
                  <p className="event-name">
                    💼 <span>Work Anniversary</span> .<span>16 Sept, 2022</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
