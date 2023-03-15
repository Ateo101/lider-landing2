import s from "./Home.module.css"
import {linear, Scrollchor} from "react-scrollchor";

const Home = () => {
    return (
        <div className={s.home} id="home">
            <div className={s.overlay}/>
            <div className={s.homeContent}>
                <div className={s.homePhotoWrap}>
                    <div className={s.homePhoto}/>
                </div>
                <p className={s.homeName}>
                    NIKITA <span className={s.surname}>MIKHAILOV</span>
                </p>
                <p className={s.homeProf}>
                    Frontend Developer
                </p>
                <Scrollchor to="about" animate={{duration: 500, easing: linear}}>
                    <div className={s.bounceArrow}/>
                </Scrollchor>
            </div>
        </div>
    )
}

export default Home;