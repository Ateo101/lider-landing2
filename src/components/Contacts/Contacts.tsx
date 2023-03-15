import s from "./Contacts.module.css"

const Contacts = () => {
    return (
        <div className={s.contacts} id="contacts">
            <div className="secondTitle">
                <span>CONTACT</span>
                <h2>Get in Touch</h2>
            </div>
            <div className={s.contactsContent}>
                <form className={s.form}>
                    <p style={{fontSize: '20px'}}>
                        Look forward to joining your project
                    </p>
                    <div className={s.formField}>
                        <input id="name" type="text" placeholder="Name" autoComplete="off"/>
                    </div>
                    <div className={s.formField}>
                        <input id="email" type="text" placeholder="Email" autoComplete="off"/>
                    </div>
                    <div className={s.formField}>
                        <textarea id="message" placeholder="Message"/>
                    </div>
                    <div>
                        <button>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts;