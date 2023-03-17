import React, {useState} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import {PatternFormat} from "react-number-format";

export type FormikErrorsType = {
    name: string
    hone: string
}

export const FormCalc = () => {
    const phoneRegExp = /^[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}\s[0-9]{2}-[0-9]{2}$/

    const formik = useFormik({
        initialValues: {
            contactName: '',
            phone: '',
        },
        validationSchema: Yup.object<FormikErrorsType>().shape({
            contactName: Yup.string().trim().required('Пожалуйста, укажите имя').min(3, 'Слишком мало символов').max(40, 'Слишком много символов'),
            phone: Yup.string().trim().required('Пожалуйста, укажите номер').matches(phoneRegExp, 'Номер некорректный'),
        }),
        onSubmit: (values, {resetForm}) => {
            const {contactName, phone} = values
            {
                // @ts-ignore
                Email.send({
                    Host: "smtp.elasticemail.com",
                    Username: "sales@lider-stk.com",
                    Password: "EDB5A24ED6F812D1FB9B8FAF76E68BA37B14",
                    To: 'sales@lider-stk.com',
                    From: "sales@lider-stk.com",
                    Subject: "Новая заявка | Оборудование для резиновой крошки",
                    Body: `Имя: ${contactName}<br/>Телефон: ${phone}`
                });
            }

            resetForm({values: {contactName: '', phone: ''}})
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

            <button type={'submit'} >Получить коммерческое предложение</button>

            <div className={'agreement'}>
                <div style={{display: "flex"} }>
                    <input type={'checkbox'}/>
                    <p>Согласие на обработку персональных данных</p>
                </div>
                <p style={{fontSize: '16px'}}>В течение 15 минут с вами свяжется инженер для уточнения данных</p>
            </div>

        </form>
    )
}