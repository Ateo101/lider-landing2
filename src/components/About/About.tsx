import s from "./About.module.css"
import {useState} from "react";

const About = () => {

    const [time, setTime] = useState<string>(calcTime('-3'))

    function calcTime(offset: string) {
        const d = new Date();
        const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        const nd = new Date(utc + (3600000 * (+offset)));
        return nd.toLocaleString().slice(-8, -3);
    }

    setInterval(() => {
        setTime(calcTime('-3'))
    }, 10000)

    return (
        <div className={s.about} id="about">

            <div className="secondTitle">
                <span>ABOUT</span>
                <h2>About Me</h2>
            </div>

            <div className={s.aboutContent}>

                <div className={s.aboutLeft}>
                    <div className={s.aboutPhoto}>
                        <div className={s.aboutPhotoBorder}/>
                    </div>
                </div>

                <div className={s.aboutRight}>
                    <p>
                        Hi! I'm very passionate and dedicated to my work.
                        Thanks to
                        <a href="https://it-incubator.io/en"
                           style={{color: "rgb(230, 95, 120)", textDecoration: "none"}}> IT-Incubator </a>
                        I acquired the skills and knowledge necessary to be useful for your project.
                    </p>
                    <ul>
                        <li data-emoji="🥳"><span><label>Birthday:</label> 15.04.1998</span></li>
                        <li data-emoji="🚀"><span><label>Age:</label> 24</span></li>
                        <li data-emoji="🏠"><span><label>Location:</label> Argentina, Buenos-Aires (exact local time: <span
                            style={{color: "rgb(230, 95, 120)"}}>{time}</span>)</span></li>
                        <li data-emoji="🖅"><span><label>Email:</label> nikmail242@gmail.com</span></li>
                        <li data-emoji="📲"><span><label>Phone:</label> +7 999 166 21 81</span></li>
                    </ul>
                    <button>Download CV</button>
                </div>

            </div>

        </div>
    )
}

export default About;