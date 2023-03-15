import React, {useEffect, useState} from "react";
import s from "./Menu.module.css"
import {linear, Scrollchor} from "react-scrollchor";
import logo from './header-logo.svg'
import guarantee from './header-garanty.svg'

const Menu = () => {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 200);
        });
    }, []);

    return (
        <>
            <div className={s.top}>
                <div className={s.logoContainer}>
                    <img src={logo} alt=""/>
                    <p className={s.logoText}>Оборудование для укладки резинового покрытия</p>
                </div>
                <div className={s.btnContainer}>
                    <button className={s.topBtn}>Получить коммерческое предложение</button>
                </div>
                <div className={s.topPros}>
                    <div className={s.topGuaranty}><img src={guarantee}/>Мощные БРУ в наличии</div>
                    <div className={s.topGuaranty}><img src={guarantee}/>Тройная гарантия</div>
                </div>
                <div className={s.topPhone}>
                    <a href=''>
                        <p>Закажите звонок</p>
                    </a>
                </div>
            </div>



            <header className={s.topNavigation}>
                <nav className={s.menu}>
                    <li><Scrollchor to="payback" animate={{duration: 500, easing: linear}}>Окупаемость</Scrollchor></li>
                    <li><Scrollchor to="selection" animate={{duration: 500, easing: linear}}>Подбор</Scrollchor></li>
                    <li><Scrollchor to="skills" animate={{duration: 500, easing: linear}}>Схема</Scrollchor></li>
                    <li><Scrollchor to="portfolio" animate={{duration: 500, easing: linear}}>О компании</Scrollchor></li>
                    <li><Scrollchor to="contacts" animate={{duration: 500, easing: linear}}>Поставки</Scrollchor></li>
                    <li><Scrollchor to="contacts" animate={{duration: 500, easing: linear}}>Гарантия</Scrollchor></li>
                </nav>
            </header>
            <header className={scroll ? s.scrollNavigation + ' ' + s.scroll : s.scrollNavigation}>
                <nav className={s.menu}>
                    <li><Scrollchor to="payback" animate={{duration: 500, easing: linear}}>Окупаемость</Scrollchor></li>
                    <li><Scrollchor to="selection" animate={{duration: 500, easing: linear}}>Подбор</Scrollchor></li>
                    <li><Scrollchor to="skills" animate={{duration: 500, easing: linear}}>Схема</Scrollchor></li>
                    <li><Scrollchor to="portfolio" animate={{duration: 500, easing: linear}}>О компании</Scrollchor></li>
                    <li><Scrollchor to="contacts" animate={{duration: 500, easing: linear}}>Поставки</Scrollchor></li>
                    <li><Scrollchor to="contacts" animate={{duration: 500, easing: linear}}>Гарантия</Scrollchor></li>
                </nav>
            </header>
        </>
    )

}

export default Menu;