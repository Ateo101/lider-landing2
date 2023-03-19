import React, {useState} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import {PatternFormat} from "react-number-format";

export type FormikErrorsType = {
    name: string
    hone: string
}

export const Form = () => {
    const phoneRegExp = /^[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}\s[0-9]{2}-[0-9]{2}$/
    const [sent, setSent] = useState(false)

    const formik = useFormik({
        initialValues: {
            contactName: '',
            phone: '',
            email: '',
        },
        validationSchema: Yup.object<FormikErrorsType>().shape({
            contactName: Yup.string().trim().required('Пожалуйста, укажите имя').min(3, 'Слишком мало символов').max(40, 'Слишком много символов'),
            phone: Yup.string().trim().required('Пожалуйста, укажите номер').matches(phoneRegExp, 'Некорректный номер'),
            email: Yup.string().trim().required('Пожалуйста, укажите почту').email('Некорректная почта'),
        }),
        onSubmit: (values, {resetForm}) => {
            const {contactName, phone, email} = values
            // @ts-ignore
                Email.send({
                    Host: "smtp.elasticemail.com",
                    Username: "sales@lider-stk.com",
                    Password: "EDB5A24ED6F812D1FB9B8FAF76E68BA37B14",
                    To: 'sales@lider-stk.com',
                    From: "sales@lider-stk.com",
                    Subject: "Новая заявка | Оборудование для резиновой крошки",
                    Body: `Имя: ${contactName}<br/>Телефон: ${phone}<br/>Почта: ${email}`
                });
            resetForm({values: {contactName: '', phone: '', email: ''}})
            setSent(true)
        },
    })



    return (
        <form className='form' onSubmit={formik.handleSubmit}>

            <input className='formInput' placeholder={'Введите имя'}
                   type="text"
                   {...formik.getFieldProps('contactName')}
            />
            <PatternFormat className='formInput' placeholder={'Введите номер'}
                           format="# (###) ### ##-##"
                           patternChar="#"
                           mask="_"
                           {...formik.getFieldProps('phone')}
            />
            {formik.errors.contactName && formik.touched.contactName && (
                <div className='inputError'>{`${formik.errors.contactName}`}</div>
            )}
            {formik.errors.phone && formik.touched.phone && (
                <div className='inputError'>{`${formik.errors.phone}`}</div>
            )}
            <input className='formInput' placeholder={'Введите почту'}
                   type="email"
                   style={{width: '100%', marginBottom: 0}}
                   {...formik.getFieldProps('email')}
            />
            {formik.errors.email && formik.touched.email && (
                <div className='inputError'>{`${formik.errors.email}`}</div>
            )}

            <button type={'submit'} >Получить коммерческое предложение</button>

            {sent && <p className={'sent'}>✅ Мы получили вашу заявку! Пожалуйста, ожидайте ответа.</p>}

            <div className={'agreement'}>
                <div style={{display: "flex"} }>
                    <input type={'checkbox'} defaultChecked={true}/>
                    <p>Согласие на обработку персональных данных</p>
                </div>
                <p style={{fontSize: '16px'}}>В течение 15 минут с вами свяжется менеджер для уточнения данных</p>
            </div>

        </form>
    )
}