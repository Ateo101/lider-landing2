import s from "./Payback.module.css"
import payback from '../SectionImage.jpg'
import leftPhoto from '../../assets/payback/price.jpg'
import rightPhoto1 from '../../assets/payback/photo1.jpg'
import rightPhoto2 from '../../assets/payback/photo2.jpg'
import rightPhoto3 from '../../assets/payback/photo3.jpg'
import rightPhoto4 from '../../assets/payback/photo4.jpg'
import rightPhoto5 from '../../assets/payback/photo5.jpg'
import ModalFunc from "../Modal";

export const Payback = () => {

    const imagesLeft = [
        {
            "text": "Description of image",
            "link": leftPhoto,
        },
    ];
    const imagesRight = [
        {
            "text": "Description of image",
            "link": rightPhoto1,
        },
        {
            "text": "Description of image",
            "link": rightPhoto2,
        },
        {
            "text": "Description of image",
            "link": rightPhoto3,
        },
        {
            "text": "Description of image",
            "link": rightPhoto4,
        },
        {
            "text": "Description of image",
            "link": rightPhoto5,
        },
    ];

    return (
        <div className={s.payback} id="payback">

            <div className={s.secondTitle}>
                <h2>Окупаемость завода в среднем <span>1 месяц</span>, <br/>
                    <span>от 7 до 14 дней</span> — срок запуска производства</h2>
            </div>

            <div className={s.paybackContent}>

                <div className={s.paybackLeft}>
                    <div className={s.container}>
                        <p>Мы отправим подробный расчет в Вашем регионе</p>
                        <ModalFunc images={imagesLeft} isGrid={false}/>
                        <ul>
                            <li data-emoji="🔰">Планируемые данные по производству</li>
                            <li data-emoji="🔰">Ежемесячные затраты</li>
                            <li data-emoji="🔰">Материалы</li>
                            <li data-emoji="🔰">Инвестиционные расходы</li>
                            <li data-emoji="🔰">Расчет окупаемости</li>
                        </ul>
                    </div>
                </div>

                <div className={s.paybackRight}>
                    <div className={s.container}>
                        <p>Доставим и настроим "под ключ", подписание акта
                            ввода только после пробной партии</p>
                        <ModalFunc images={imagesRight} isGrid={true}/>
                        <ul>
                            <li data-emoji="🔰">Собственные выездные инженеры</li>
                            <li data-emoji="🔰">Собственная система обучения вашего персонала</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}