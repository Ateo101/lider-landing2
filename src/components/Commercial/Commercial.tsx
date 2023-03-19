import s from "./Commercial.module.css"
import React from "react";
import {Form} from "../../common/Form/Form";

export const Commercial = () => {

    return (
        <div className={s.commercial} id="commercial">
            <div className={s.commercialContent}>

                <div className={s.commercialLeft}>

                    <div className={s.container}>
                        <div className={s.secondTitle}>
                            <h3>Закажите коммерческое предложение прямо сейчас</h3>
                            <p>И получите скидку при подписании договора в течение<br/>2 недель до 200 000 руб, а также:</p>
                        </div>
                        <ul>
                            <li data-emoji="•">2-3 варианта оборудования для резиновой крошки</li>
                            <li data-emoji="•">сроки поставки</li>
                            <li data-emoji="•">запрос лизинга в 12 компаниях</li>
                            <li data-emoji="•">5 площадок для поиска выгодных тендеров</li>
                        </ul>
                    </div>

                </div>

                <div className={s.commercialRight}>
                    <Form/>
                </div>

            </div>
        </div>
    )
}