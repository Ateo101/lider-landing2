import s from './HamburgerMenu.module.css'

export const HamburgerMenu = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.navbarContainer}>
                <input type="checkbox" name="" id=""/>
                    <div className={s.hamburgerLines}>
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className={s.menuItems}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#food">Category</a></li>
                        <li><a href="#food-menu">Menu</a></li>
                        <li><a href="#testimonials">Testimonial</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <h1 className={s.logo}>RS</h1>
            </div>
        </nav>
    )
}