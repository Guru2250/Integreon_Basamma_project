import React,{useState} from 'react';
import LoginPage from './Components/LoginPage';
import Logobar from './Components/Logobar';
import Profile from "./Components/Profile";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from "./Components/Dashboard";
import TeamManagement from './Components/TeamManagement';
import "./App.css";
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>


function App() {
  const [visible, SetVisible]=useState(false);
  

 
  
  const visibleHandle=(data)=>{
    SetVisible(data)
  }
  
  return (
    <div >
      <Logobar visible={visible}/>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LoginPage visibleHandle = {visibleHandle}/>}/>
        <Route path="/profile" exact element={<Profile/>}/>
        <Route path="/dashboard" exact element={<Dashboard/>}/>
        <Route path="/teammanagement" exact element={<TeamManagement />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
