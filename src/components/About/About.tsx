import s from "./About.module.css"
import about from '../../assets/commonAssets/sample-image.jpg'
import left from '../../assets/about/left/1.jpg'
import rightSert1 from '../../assets/about/right/sert1.jpg'
import rightSert2 from '../../assets/about/right/sert2.jpg'
import rightSert3 from '../../assets/about/right/sert3.jpg'
import rightSert4 from '../../assets/about/right/sert4.jpg'
import rightFeedback1 from '../../assets/about/right/feedback1.webp'
import ModalFunc from "../../common/Modal/Modal";

export const About = () => {

    const imagesRight2 = [
        {
            "text": "Description of image",
            "link": rightSert1,
        },
        {
            "text": "Description of image",
            "link": rightSert2,
        },
        {
            "text": "Description of image",
            "link": rightSert3,
        },
        {
            "text": "Description of image",
            "link": rightSert4,
        },
    ]

    const imagesRight1 = [
        {
            "text": "Description of image",
            "link": rightFeedback1,
        },
        {
            "text": "Description of image",
            "link": rightSert2,
        },
        {
            "text": "Description of image",
            "link": rightSert3,
        },
        {
            "text": "Description of image",
            "link": rightSert4,
        },
    ]

    return (
        <div className={s.about} id="about">

            <div className={s.secondTitle}>
                <h2>Давайте знакомиться!</h2>
            </div>

            <div className={s.aboutContent}>

                <div className={s.aboutLeft}>
                    <div className={s.container}>
                        <p>Мы работаем с 2014 года и за последние 9 лет поставили более 700
                            единиц оборудования и запчастей по всей России</p>
                        <img src={left}/>
                    </div>
                </div>

                <div className={s.aboutRight}>
                    <div className={s.container}>
                        <ul>
                            <li data-emoji="🔰">Что говорят о нас клиенты</li>
                        </ul>
                        <ModalFunc images={imagesRight1} isGrid={false}/>
                        <ul>
                            <li data-emoji="🔰">Сертификаты</li>
                        </ul>
                        <ModalFunc images={imagesRight2} isGrid={false}/>
                    </div>
                </div>

            </div>

        </div>
    )
}