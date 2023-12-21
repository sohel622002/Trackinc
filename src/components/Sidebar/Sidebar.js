import logo from "../../Assets/tracking-logo.png";
import Sidelinks from "../Sidelinks/Sidelinks";
import DashboardIconOn from '../../Assets/dashboard-on.svg';
import InvoicesIconOf from '../../Assets/invoice-off.svg';
import ProposolsIconOf from '../../Assets/projects-off.svg';
import ServicesIconOf from '../../Assets/services-off.svg';
import TransactionsIconOf from '../../Assets/transactions-off.svg';
import ProjectsIconOf from '../../Assets/projects-off.svg';
import CustomersIconOf from '../../Assets/customers.svg';
import SettingIconOf from '../../Assets/settings-off.svg';
import LogoutIconOf from '../../Assets/logout-off.svg';

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-top-sec">
        <div className="app-logo">
          <img src={logo} />
        </div>
        <div className="sidebar-links">
          <Sidelinks icon={DashboardIconOn} name="Dashboard" navigate=""/>
          <Sidelinks icon={InvoicesIconOf} name="Invoices" navigate="notbuild"/>
          <Sidelinks icon={ProposolsIconOf} name="Proposals" navigate="notbuild"/>
          <Sidelinks icon={ServicesIconOf} name="Services" navigate="notbuild"/>
          <Sidelinks icon={TransactionsIconOf} name="Transactions" navigate="notbuild"/>
          <Sidelinks icon={ProjectsIconOf} name="Projects" navigate="notbuild"/>
          <Sidelinks icon={CustomersIconOf} name="Customers" navigate="notbuild"/>
        </div>
      </div>
      <div className="sidebar-bottom-sec">
        <Sidelinks icon={SettingIconOf} name="Setting" navigate="notbuild"/>
        <Sidelinks icon={LogoutIconOf} name="Log out" navigate="notbuild"/>
      </div>
    </div>
  );
}

export default Sidebar;
