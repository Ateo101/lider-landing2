import s from "./Payback.module.css"
import payback from '../SectionImage.jpg'

export const Payback = () => {

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
                        <img src={payback}/>
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
                        <img src={payback}/>
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