import React from "react";
import {Navbar,NavDropdown, Nav, Link, Button, Form, FormControl} from "react-bootstrap";
import { Breadcrumb } from 'bootstrap-4-react';


const first_src = 'https://moiextrim.ru/wp-content/uploads/2019/08/dayving.jpg';

const second_src = 'https://interessno.ru/wp-content/uploads/2019/12/2d23fc07a341fab33e7d7-1024x683.jpg';
const third_src = 'https://static.360tv.ru/media/article_media/20150717/beefd7cf.jpg';

export default  function NavbarSkat(){
    return(
        <div style={{height:"9rem"}}>
            <Navbar light bg="dark" fixed="top" mb="3">
                <Navbar.Brand href="#">EN</Navbar.Brand>
                <Navbar.Brand href="#">РУС</Navbar.Brand>
            </Navbar>
            <Navbar light bg="light" fixed="bottom" mb="3">
                <Navbar.Brand href="#">Fixed bottom</Navbar.Brand>
            </Navbar>

            <React.Fragment>
                <nav aria-label="breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
                    </Breadcrumb>
                </nav>
                <nav aria-label="breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
                        <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
                    </Breadcrumb>
                </nav>
            </React.Fragment>


        </div>
    );
}
