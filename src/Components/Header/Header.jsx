import React from 'react';
import './Header.scss';
/*import logo_header from './LogoSkat.png';*/
import logo_header from '../../Pictures/LogoSkat.png'

const Header = () => {
    return <header className ='header'>
        <nav id="main_nav">
            <div className="logo_holder">
                <img src={logo_header} alt="no image" className="logo_img"/>
            </div>
            <ul id="main_menu">
                <li className="main_menu_item"><a href="#">Главная</a></li>
                <li className="main_menu_item"><a href="#">Услуги</a></li>
                <li className="main_menu_item"><a href="#">Достижения</a></li>
                <li className="main_menu_item"><a href="#">Контакты</a></li>
                <li className="main_menu_item"><a href="#">Телефон</a></li>
            </ul>
        </nav>
       {/* section*/}
        <section className="cover">
            <div className="cover_dimmer">
                <h1>технологии будущего</h1>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                    вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
                    латинице с начала XVI века. В то время некий безымянный печатник создал
                    большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                    образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков,
                    но и перешагнул в электронный дизайн.</p>
                <button className="button_cover">Заказать</button>
            </div>
        </section>

      {/*  услуги*/}
        <section className="services">
            <h2>К Вашим услугам</h2>
            <p className="subheader">lorem loremloremloremloremloremloremloremloremloremlorem</p>
                <container className="container_a">
                   {/* //1*/}
                    <div className="service">
                        <h3>Планирование</h3>
                        <img className="img_service" src="https://pbs.twimg.com/media/DqLvJP7W4AAH0J-.jpg:large" alt="планирование"/>
                        <p className="serv_descr">
                            lorem loremloremloremloremloremloremloremloremloremlorem
                        </p>
                        <div className="btn_holder">
                            <button className="button_service">заказать</button>
                        </div>
                    </div>
                   {/* //2*/}
                    <div className="service">
                        <h3>Плавание</h3>
                        <img className="img_service" src="https://pbs.twimg.com/media/DqLvJP7W4AAH0J-.jpg:large" alt="планирование"/>
                        <p className="serv_descr">
                            loremloremloremloremloremloremloremloremloremloremlorem
                        </p>
                        <div className="btn_holder">
                            <button className="button_service">заказать</button>
                        </div>
                    </div>
                    {/*//3*/}
                    <div className="service">
                        <h3>Планирование</h3>
                        <img className="img_service" src="https://pbs.twimg.com/media/DqLvJP7W4AAH0J-.jpg:large" alt="планирование"/>
                        <p className="serv_descr">
                            loremloremloremloremloremloremloremloremloremloremlorem
                        </p>
                        <div className="btn_holder">
                            <button className="button_service">заказать</button>
                        </div>
                    </div>
                </container>

        </section>
    </header>
}
export default Header;
