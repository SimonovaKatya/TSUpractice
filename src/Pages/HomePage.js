import React from "react";
import {Navbar,NavDropdown, Nav, Link, Button, Form, FormControl} from "react-bootstrap";
import Bootstrap, { Carousel, BImg } from 'bootstrap-4-react';
import NavbarSkat from '../Components/NavbarSkat'



const first_src = 'https://moiextrim.ru/wp-content/uploads/2019/08/dayving.jpg';
const second_src = 'https://interessno.ru/wp-content/uploads/2019/12/2d23fc07a341fab33e7d7-1024x683.jpg';
const third_src = 'https://static.360tv.ru/media/article_media/20150717/beefd7cf.jpg';

export default  function HomePage(){
    return(
        <div style={{height:"10rem"}}>
            <NavbarSkat/>
            <Carousel w="50"  id="carouselExampleCaptions">
                <Carousel.Indicators>
                    <Carousel.Indicator target="#carouselExampleCaptions" to="0" active />
                    <Carousel.Indicator target="#carouselExampleCaptions" to="1" />
                    <Carousel.Indicator target="#carouselExampleCaptions" to="2" />
                </Carousel.Indicators>
                <Carousel.Inner>
                    <Carousel.Item active>
                        <BImg display="block" w="100" src={first_src} />
                        <Carousel.Caption display="none md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item><BImg display="block" w="100" src={second_src} /></Carousel.Item>
                    <Carousel.Item><BImg display="block" w="100" src={third_src} /></Carousel.Item>
                </Carousel.Inner>
                <Carousel.Prev href="#carouselExampleCaptions">
                    <Carousel.Prev.Icon />
                </Carousel.Prev>
                <Carousel.Next href="#carouselExampleCaptions">
                    <Carousel.Next.Icon />
                </Carousel.Next>
            </Carousel>
        </div>
    );
}
