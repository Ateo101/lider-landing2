import Item from "../Item/Item";
import s from "../Section.module.css"
import img from "../SectionImage.jpg"
import {linear, Scrollchor} from "react-scrollchor";

const Portfolio = () => {

    const portfolioData = [
        {id: "00", title: "Project 1", description: "Project 1 Description", img},
        {id: "01", title: "Project 2", description: "Project 2 Description", img},
        {id: "02", title: "Project 3", description: "Project 3 Description", img},
        {id: "03", title: "Project 4", description: "Project 4 Description", img},
        {id: "04", title: "Project 5", description: "Project 5 Description", img},
    ]

    return (
        <div className={s.section} id="portfolio" style={{backgroundColor:'white'}}>
            <div className="secondTitle">
                <span>PORTFOLIO</span>
                <h2>Recent Works</h2>
            </div>
            <div className={s.sectionContent}>
                {portfolioData.map(p => <Item key={p.id}
                                              title={p.title}
                                              description={p.description}
                                              img={p.img}/>
                )}
            </div>
            <div className={s.fadeInLeftContainer}>
                <p className={s.fadeInLeft}>{`Are you interested in working with me? `}
                    <Scrollchor to="contacts" animate={{duration: 500, easing: linear}}>Let's start now</Scrollchor></p>
            </div>
        </div>
    )
}

export default Portfolio;