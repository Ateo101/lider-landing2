import s from "../../Section.module.css"

export type ItemPropsType = {
    city: string,
    description: string[],
    img: string,
    features: string,
}

const Item = (props: ItemPropsType) => {
    return (
        <div className={s.sectionItem}>
            <div><img src={props.img} className={s.sectionImg}/></div>
            <div>{props.city}</div>
            <ul>
                {props.description.map(d => <li>{d}</li>)}
            </ul>
            <div>{props.features}</div>
        </div>
    )
}

export default Item;