import "./sidebar.css";
import avatar from "../../assets/mysite.png";

const Sidebar = ({sidebarOpen,closeSidebar}) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
               <a href="#">
                    <img width="200" src={avatar} alt="avatar" />
            </a> 
        </div>
        &nbsp;
        <div className="sidebar_menu">
            
            <div className="sidebar__link">
                <i className="fa fa-square"></i>
                <a href="#">Projects</a>
            </div>
            <div className="sidebar__link">
                <i className="fa fa-suitcase"></i>
                <a href="#">Organization</a>
            </div>
            <div className="sidebar__link active_menu_link">
                <i className="fa fa-shield"></i>
                <a href="#">Access Control</a>
            </div>
        </div>
        </div>
    );
};

export default Sidebar;