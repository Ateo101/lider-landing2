import s from "./About.module.css"
import about from '../SectionImage.jpg'

export const About = () => {

    return (
        <div className={s.about} id="about">

            <div className={s.secondTitle}>
                <h2>Давайте знакомиться!</h2>
            </div>

            <div className={s.aboutContent}>

                <div className={s.aboutLeft}>
                    <div className={s.container}>
                        <p>Мы отправим подробный расчет в Вашем регионе</p>
                            <img src={about} style={{width: '370px'}}/>
                    </div>
                </div>

                <div className={s.aboutRight}>
                    <div className={s.container}>
                        <p>Мы работаем с 2014 года и за последние 8 лет поставили более 128 бетонных заводов по всей России</p>

                        <ul>
                            <li data-emoji="🔰">Что говорят о нас клиенты</li>
                        </ul>
                        <img src={about} style={{width: '25%', border: '1px solid'}}/>
                        <img src={about} style={{width: '25%', border: '1px solid'}}/>
                        <img src={about} style={{width: '25%', border: '1px solid'}}/>
                        <ul>
                            <li data-emoji="🔰">Сертификаты</li>
                        </ul>
                        <img src={about} style={{width: '25%', border: '1px solid'}}/>
                        <img src={about} style={{width: '25%', border: '1px solid'}}/>
                        <img src={about} style={{width: '25%', border: '1px solid'}}/>
                    </div>
                </div>

            </div>

        </div>
    )
}