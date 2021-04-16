import "./navbar.css";


const Navbar = ({sidebarOpen,openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                
            </div>
            <div className="navbar__right">
                <a href="#"> Kishore</a>
                <a href="#">
                    <i className="fa fa-bell"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>
                
            </div>
        </nav>
    )
}

export default Navbar;