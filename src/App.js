import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {Button, Navbar} from "react-bootstrap";
import NavbarSkat from './Components/NavbarSkat'
import HomePages from './Pages/HomePage'
import {MyAlert} from "./Components/MyAlert";
import {SomeComponent} from "./Components/SomeComponent";
import {Stres} from "./Components/Stres";
import Header from "./Components/Header/Header";



const App = () => {
  return (
    <div className="App">

       <Header/>

    </div>
  );
}


export default App;
