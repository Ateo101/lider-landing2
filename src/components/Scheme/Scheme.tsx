import s from "./Scheme.module.css"
import payback from '../SectionImage.jpg'

export const Scheme = () => {

    return (
        <div className={s.scheme} id="scheme">

            <div className={s.secondTitle}>
                <h2><span>Современные</span> компоненты оборудования</h2>
            </div>

            <div className={s.schemeContent}>

                <div className={s.schemeLeft}>
                    <div>
                        <p><b>1.</b> Название детали оборудования</p>
                        <ul>
                            <li data-emoji="•">Планируемые данные по производству</li>
                            <li data-emoji="•">Ежемесячные затраты</li>
                            <li data-emoji="•">Материалы</li>
                        </ul>
                    </div>
                    <div>
                        <p><b>2.</b> Название детали оборудования</p>
                        <ul>
                            <li data-emoji="•">Планируемые данные по производству</li>
                            <li data-emoji="•">Ежемесячные затраты</li>
                            <li data-emoji="•">Материалы</li>
                        </ul>
                    </div>
                </div>

                <div className={s.middle}/>

                <div className={s.schemeRight}>
                    <div>
                        <p><b>3.</b> Название детали оборудования</p>
                        <ul>
                            <li data-emoji="•">Планируемые данные по производству</li>
                            <li data-emoji="•">Ежемесячные затраты</li>
                            <li data-emoji="•">Материалы</li>
                        </ul>
                    </div>
                    <div>
                        <p><b>4.</b> Название детали оборудования</p>
                        <ul>
                            <li data-emoji="•">Планируемые данные по производству</li>
                            <li data-emoji="•">Ежемесячные затраты</li>
                            <li data-emoji="•">Материалы</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}