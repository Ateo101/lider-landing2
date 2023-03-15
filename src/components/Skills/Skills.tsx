import Item from "../Item/Item";
import s from "../Section.module.css"
import img from "../SectionImage.jpg"
import {linear, Scrollchor} from "react-scrollchor";

const Skills = () => {

    const skillsData = [
        {id: "0", title: "React", description: "React Description", img},
        {id: "1", title: "Redux", description: "Redux Description", img},
        {id: "2", title: "TypeScript", description: "TypeScript Description", img},
        {id: "3", title: "JavaScript", description: "JavaScript Description", img},
        {id: "4", title: "HTML & CSS", description: "HTML & CSS Description", img},
    ]

    return (
        <div className={s.section} id="skills">
            <div className="secondTitle">
                <span>SKILLS</span>
                <h2>I worked with</h2>
            </div>
            <div className={s.sectionContent}>
                {skillsData.map(s => <Item key={s.id}
                                           title={s.title}
                                           description={s.description}
                                           img={s.img}/>
                )}
            </div>
            <div className={s.fadeInLeftContainer}>
                <p className={s.fadeInLeft}>{`Are you interested in working with me? `}
                    <Scrollchor to="contacts" animate={{duration: 500, easing: linear}}>Let's start now</Scrollchor></p>
            </div>
        </div>
    )
}

export default Skills;