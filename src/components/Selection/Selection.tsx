import s from "./Selection.module.css"
import React from "react";
import {FormCalc} from "../FormCalc/FormCalc";

export const Selection = () => {

    return (
        <div className={s.about} id="selection">
            <div className={s.aboutContent}>

                <div className={s.aboutLeft}>

                    <div className={s.container}>
                        <div className={s.secondTitle}>
                            <h3>Закажите подбор оборудования для ваших целей</h3>
                        </div>
                        <ul>
                            <li data-emoji="•">расчет рентабельности в вашем регионе</li>
                            <li data-emoji="•">2-3 варианта бетонных заводов с ценами</li>
                            <li data-emoji="•">сроки поставки</li>
                            <li data-emoji="•">просчет лизинга в 12 компаниях</li>
                        </ul>
                    </div>

                </div>

                <div className={s.aboutRight}>
                    <FormCalc/>
                </div>

            </div>
        </div>
    )
}