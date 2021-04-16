import "./navbar2.css";

const Navbar = ({sidebarOpen,openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a href="#">
                    <i className="fa fa-wifi"></i>
                </a>
                <a href="#"> Permissions</a>
                <a href="#">
                    <i className="fa fa-matrix"></i>
                </a>
            </div>
            
        </nav>
    )
}

export default Navbar;