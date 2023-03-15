import s from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={s.footer} id="footer">
            <div className={s.footerItem}>
                Nikita Mikhailov
            </div>
            <div className={s.footerItem}>
                nikmail242@gmail.com
            </div>
            <div className={s.footerItem}>
                <button>Download CV</button>
            </div>
        </div>
    )
}

export default Footer;