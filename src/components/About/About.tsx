import s from "./About.module.css"
import about from '../../assets/commonAssets/sample-image.jpg'
import left from '../../assets/about/left/1.jpg'
import rightSert1 from '../../assets/about/right/sert1.jpg'
import rightSert2 from '../../assets/about/right/sert2.jpg'
import rightSert3 from '../../assets/about/right/sert3.jpg'
import rightSert4 from '../../assets/about/right/sert4.jpg'
import rightFeedback1 from '../../assets/about/right/feedback1.jpg'
import rightFeedback2 from '../../assets/about/right/feedback2.jpg'
import rightFeedback3 from '../../assets/about/right/feedback3.jpg'
import rightFeedback4 from '../../assets/about/right/feedback4.jpg'
import ModalFunc from "../../common/Modal/Modal";

export const About = () => {

    const imagesRight2 = [
        {
            "text": "Certificate 1",
            "link": rightSert1,
        },
        {
            "text": "Certificate 2",
            "link": rightSert2,
        },
        {
            "text": "Certificate 3",
            "link": rightSert3,
        },
        {
            "text": "Certificate 5",
            "link": rightSert4,
        },
    ]

    const imagesRight1 = [
        {
            "text": "Feedback 1",
            "link": rightFeedback1,
        },
        {
            "text": "Feedback 2",
            "link": rightFeedback2,
        },
        {
            "text": "Feedback 3",
            "link": rightFeedback3,
        },
        {
            "text": "Feedback 4",
            "link": rightFeedback4,
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