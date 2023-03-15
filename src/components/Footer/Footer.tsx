import s from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={s.footer} id="contacts">
            <div className={s.footerItem}>
                Footer
            </div>
            <div className={s.footerItem}>
                Footer
            </div>
            <div className={s.footerItem}>
                <button>Footer</button>
            </div>
        </div>
    )
}

export default Footer;