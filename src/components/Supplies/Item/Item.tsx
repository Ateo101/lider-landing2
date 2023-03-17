import s from "../Supplies.module.css"

export type ItemPropsType = {
    city: string,
    description: string[],
    img: string,
    features: string,
}

const Item = (props: ItemPropsType) => {
    return (
        <div className={s.suppliesItem}>
            <img src={props.img} className={s.suppliesImg}/>
            <h3>Спецификация</h3>
            <ul>
                <span>{props.city}</span>
                {props.description.map((d, i) => <li key={i} data-emoji="•">{d}</li>)}
            </ul>
            <div className={s.features}>
                <h3>Особенности</h3>
                {props.features}
            </div>
        </div>
    )
}

export default Item;