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


const App = () => {
  return (
    <div className="App">
        {/*<Button variant="primary">WEB DEV</Button>
       ddsfdsfsd*/}
       {/* <NavbarSkat/>*/}
        <HomePages/>
        {/*<select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
       <MyAlert text={'оно работает'}/>
        <MyAlert text={'оно работает 2'}/>  потому что реакт - это js
        <SomeComponent/>
        <SomeComponent/>
        <Stres/>*/}
    </div>
  );
}


export default App;
