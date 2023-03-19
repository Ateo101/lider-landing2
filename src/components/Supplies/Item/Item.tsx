import s from "../Supplies.module.css"

export type ItemPropsType = {
    city: string,
    description: string[],
    img: string,
    equipment: string,
    features: string,
}

const Item = (props: ItemPropsType) => {
    return (
        <div className={s.suppliesItem}>
            <div className={s.imgContainer}>
                <img src={props.img}/>
            </div>
            <h3 style={{marginTop: '18px'}}>Спецификация</h3>
            <div className={s.description}>
                <ul>
                    <span style={{textAlign: 'center'}}>{props.city}</span>
                    <h4>{props.equipment}</h4>
                    {props.description.map((d, i) => <li key={i} data-emoji="•">{d}</li>)}
                </ul>
            </div>

            <div className={s.features}>
                <h3>Особенности</h3>
                {props.features}
            </div>
        </div>
    )
}

export default Item;