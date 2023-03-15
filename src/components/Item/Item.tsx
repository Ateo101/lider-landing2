import s from "../Section.module.css"

export type ItemPropsType = {
    title: string,
    description: string,
    img: string,
}

const Item = (props: ItemPropsType) => {
    return (
        <div className={s.sectionItem}>
            <div><img src={props.img} className={s.sectionImg}/></div>
            <div>{props.title}</div>
            <div>{props.description}</div>
        </div>
    )
}

export default Item;