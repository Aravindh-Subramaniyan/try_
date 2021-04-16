import {useState} from 'react';
import Navbar from './components/Navbar/navbar';
import Sidebar from './components/Sidebar/sidebar';
import Main from './components/Main/Main';


const App = () => {

  const[sidebarOpen, setSidebarOpen]=useState(false);

  const openSidebar = () => {
    setSidebarOpen=(true);
  }

  const closeSidebar = () => {
    setSidebarOpen=(false);
  }
  return (
    <div className="container">
    
    <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
    <Main/>
    <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    
    </div>
    );
}

export default App;
