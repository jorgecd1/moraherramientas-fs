
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from './layout/Navbar';




import Home from './pages/Home';
import Tools from './pages/Tools';
import Screen from './pages/Screen';
import Tickets from './pages/Tickets';

import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

import EditTool from './tools/EditTool';
import AddTool from './tools/AddTool';
import ViewTool from './tools/ViewTool';

import AddTicket from './tickets/AddTicket';
import ViewTicket from './tickets/ViewTicket';
import EditTicket from './tickets/EditTicket';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Screen/>}/>

        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/addUser" element={<AddUser/>}/>
        <Route exact path="/edituser/:id" element={<EditUser/>}/>
        <Route exact path="/viewuser/:id" element={<ViewUser/>}/>

        <Route exact path="/tools" element={<Tools/>}/>
        <Route exact path="/addTool" element={<AddTool/>}/>
        <Route exact path="/viewTool/:id" element={<ViewTool/>}/>
        <Route exact path="/editTool/:id" element={<EditTool/>}/>

        <Route exact path="/tickets" element={<Tickets/>}/>
        <Route exact path="/addTicket/:id" element={<AddTicket/>}/>
        <Route exact path='/viewTicket/:id' element={<ViewTicket/>}/>
        <Route exact path='/editTicket/:id' element={<EditTicket/>}/>
      </Routes>
    </Router>
  </div>;
}

export default App;
