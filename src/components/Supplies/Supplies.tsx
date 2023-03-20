import s from "./Supplies.module.css"
import photo1 from '../../assets/commonAssets/paver-supplies2.jpg'
import photo2 from '../../assets/payback/left/2.jpg'
import photo3 from '../../assets/payback/left/3.jpg'
import photo4 from '../../assets/payback/left/4.jpg'
import Item from "./Item/Item";

export const Supplies = () => {

    const suppliesData = [
        {
            city: "Улан-Удэ", equipment: 'Укладчик резиновой крошки CCG TPJ-2.5',
            description: [
                'Фактическая ширина - 2800 мм',
                'Рабочая ширина укладки - 2500 мм',
                'Производительность - 300м2/ч',
                'Регул. темп. для электронагрев. плиты - 120°C',
                'Габариты, ДШВ - 3000 х 1800 х 720 мм',
                'Вес - 850 кг',
            ],
            img: photo1,
            features: 'Клиент успешно прошел экспертизу покрытия детской площадки'
        },
        {
            city: "Владивосток", equipment: 'Миксер для рабочей смеси CCG M-100',
            description: [
                'Объём бункера - 300л',
                'Макс. производительность - 200кг/цикл',
                'Цикл одного замеса - 0,2 мин.',
                'Мощность электродвигателя - 3 кВт',
                'Габариты, ДШВ - 1270 х 920 х 1270 мм',
                'Вес - 190 кг',
            ],
            img: photo3,
            features: 'Доставили в сжатые сроки, несмотря на закрытие таможни и эпидемию'
        },
        {
            city: "Красноярск", equipment: 'Машина для нанесения дорожной разметки CCG LJ-HXJ',
            description: [
                'Мощность двигателя Honda - 9,5л.с. / 7кВт',
                'Скорость маркировки - 0,5-3 км/ч',
                'Рабочее давление - 10-20 МПа',
                'Максимальный расход краски - 11,4 л/мин',
                'Габариты, ДxШxВ - 750 х 420 х 660 мм',
                'Вес - 90кг',
            ],
            img: photo4,
            features: 'Оборудование окупилось за участие в 1 тендере'
        },
        {
            city: "Благовещенск", equipment: 'Распылитель резиновой крошки CCG PTJ-120 ',
            description: [
                'Объём бункера - 60л',
                'Объём распыления крошки - 12-15 кг/мин',
                'Мощность электродвигателя - 7 кВт',
                'Давление воздуха - 0.8 МПа',
                'Габариты, ДШВ - 1100 х 750 х 950 мм',
                'Вес - 260 кг',
            ],
            img: photo2,
            features: 'Помогли клиенту выгодно приобрести оборудование в лизинг'
        },
    ]

    return (
        <div className={s.supplies} id="supplies">

            <div className={s.secondTitle}>
                <h2>Примеры поставок оборудования</h2>
            </div>

            <div className={s.suppliesContent}>
                        {suppliesData.map((s, i) => <Item key={i}
                                                                       city={s.city}
                                                                       equipment={s.equipment}
                                                                       description={s.description}
                                                                       img={s.img}
                                                                       features={s.features}/>
                        )}
            </div>

        </div>
    )
}