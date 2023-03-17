import s from "./Footer.module.css"
import logo from "../Menu/header-logo.svg";
import React from "react";
import {linear, Scrollchor} from "react-scrollchor";

const Footer = () => {
    return (
        <div className={s.footer} id="contacts">
            <img src={logo} alt=""/>
            <div className={s.footerItem}>
                <p style={{fontSize: '14px'}}>Оборудование для укладки<br/>резинового покрытия</p>
            </div>
            <div className={s.footerItem}>
                <p>ООО "СТК - ЛИДЕР"<br/>
                    Адрес: 675000, Амурская область,<br/>г. Благовещенск, ул. Краснофлотская, д. 49, оф. 5<br/>
                    ИНН 2801226116<br/>
                    КПП 280101001<br/>
                    ОГРН 1162801063150
                </p>
            </div>
            <div className={s.footerItem}>
                <Scrollchor to="selection" animate={{duration: 500, easing: linear}}>
                    <button>Закажите звонок</button>
                </Scrollchor>
            </div>
        </div>
    )
}

export default Footer;