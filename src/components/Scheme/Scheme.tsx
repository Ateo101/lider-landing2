import s from "./Scheme.module.css"

export const Scheme = () => {

    return (
        <div className={s.scheme} id="scheme">

            <div className={s.secondTitle}>
                <h2><span>Современные</span> компоненты оборудования</h2>
            </div>

            <div className={s.schemeContent}>

                <div className={s.schemeLeft}>
                    <div>
                        <p><b>1.</b> Ящик управления</p>
                        <ul>
                            <li data-emoji="•">Бесступенчатая регулировка скорости от Siemens</li>
                            <li data-emoji="•">Русифицированная панель управления</li>
                            <li data-emoji="•">Регулировка клиренса, угла, температуры и вибрации</li>
                        </ul>
                    </div>
                    <div>
                        <p><b>2.</b> Подогревающая плита</p>
                        <ul>
                            <li data-emoji="•">Температура нагрева 120°C</li>
                            <li data-emoji="•">Производительность 300 м2/ч</li>
                            <li data-emoji="•">КПД 99%</li>
                        </ul>
                    </div>
                </div>

                <div className={s.middle}/>

                <div className={s.schemeRight}>
                    <div>
                        <p><b>3.</b> Водяной бак</p>
                        <ul>
                            <li data-emoji="•">Низкое потребление</li>
                            <li data-emoji="•">Защищенная конструкция</li>
                            <li data-emoji="•">Легкое обслуживание</li>
                        </ul>
                    </div>
                    <div>
                        <p><b>4.</b> Вибратор</p>
                        <ul>
                            <li data-emoji="•">Автоматизированная регулировка вибрации</li>
                            <li data-emoji="•">Сбалансированная амплитуда уплотнение крошки</li>
                            <li data-emoji="•">Итальянская технология дебалансиров</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}