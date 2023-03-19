import s from "./Payback.module.css"
import leftPhoto1 from '../../assets/commonAssets/paver-home.png'
import leftPhoto2 from '../../assets/payback/left/2.jpg'
import leftPhoto3 from '../../assets/payback/left/3.jpg'
import leftPhoto4 from '../../assets/payback/left/4.jpg'
import leftPhoto5 from '../../assets/payback/left/5.png'
import rightPhoto1 from '../../assets/payback/photo1.jpg'
import rightPhoto2 from '../../assets/payback/photo2.jpg'
import rightPhoto3 from '../../assets/payback/photo3.jpg'
import rightPhoto4 from '../../assets/payback/photo4.jpg'
import rightPhoto5 from '../../assets/payback/photo5.jpg'
import ModalFunc from "../../common/Modal/Modal";
import Carousel from "../../common/Carousel/Carousel";

export const Payback = () => {

    const imagesLeft = [
        {
            "text": "Description of image",
            "link": leftPhoto2,
        },
        {
            "text": "Description of image",
            "link": leftPhoto1,
        },
        {
            "text": "Description of image",
            "link": leftPhoto3,
        },
        {
            "text": "Description of image",
            "link": leftPhoto4,
        },
        {
            "text": "Description of image",
            "link": leftPhoto5,
        },
    ];
    const slides = [
        'https://i.ibb.co/ncrXc2V/1.png',
        'https://i.ibb.co/B3s7v4h/2.png',
        'https://i.ibb.co/XXR8kzF/3.png',
        'https://i.ibb.co/yg7BSdM/4.png',
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
                <h2>Наше оборудование проходит <span>любую экспертизу</span><br/>на соответствие нормам</h2>
            </div>

            <div className={s.paybackContent}>

                <div className={s.paybackLeft}>
                    <div className={s.container}>
                        <p>К вашему выбору несколько видов оборудования</p>
                        {/*<ModalFunc images={imagesLeft} isGrid={false}/>*/}
                        <Carousel images={imagesLeft}/>
                        {/*<Carousel>
                            {[
                                ...slides.map((img) => <img src={img}/>)
                            ]}
                        </Carousel>*/}
                        <ul>
                            <li data-emoji="🔰">Распылители</li>
                            <li data-emoji="🔰">Укладчики резиновой крошки</li>
                            <li data-emoji="🔰">Миксеры</li>
                            <li data-emoji="🔰">Машины для нанесения дорожной разметки</li>
                            <li data-emoji="🔰">Термовалики</li>
                        </ul>
                    </div>
                </div>

                <div className={s.paybackRight}>
                    <div className={s.container}>
                        <p>Доставим и настроим "под ключ", подписание акта
                            ввода только после пробного включения</p>
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