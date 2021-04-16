import "./Main.css";
import StatTable from '../StatTable/Table';

const Main = () => {
    return (
    
        <main>
            <div className="main_container">
                <div className="main_left">
                   
                    <div className="active_menu">
                     <a href="#">
                       <i className="fa fa-wifi"></i>
                    </a>&nbsp;&nbsp;
                    <a href="#">Permissions</a>
                    &nbsp;&nbsp;&nbsp;
                    <i className="fa fa-line"></i>
                    </div>
                    <a href="#">
                       <i className="fa fa-id-card"></i>
                    </a>&nbsp;&nbsp;
                    <a href="#">Approval matrix</a>
                    
                </div>      
            </div>

            <div className="main_below">
                <br></br>
                <div className="main_side">
                <div className="add-role">
                   <a href="#"><i className="fa fa-plus"></i> &nbsp;&nbsp; Add Role</a>
                </div>
                 &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#"><i className="fa fa-pencil"></i></a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#"><i className="fa fa-trash"></i></a>
                </div>
            </div>
               <StatTable/>
        </main>
    )
}

export default Main;