import s from "./Selection.module.css"
import React from "react";
import {Form} from "../../common/Form/Form";

export const Selection = () => {

    return (
        <div className={s.selection} id="selection">
            <div className={s.selectionContent}>

                <div className={s.selectionLeft}>

                    <div className={s.container}>
                        <div className={s.secondTitle}>
                            <h3>Закажите подбор оборудования для ваших целей</h3>
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

                <div className={s.selectionRight}>
                    <Form/>
                </div>

            </div>
        </div>
    )
}