import React from "react";

export const FormCalc = () => {
    return (
        <div className='form'>
            <input className='formInput' placeholder={'Введите имя'}/>
            <input className='formInput' placeholder={'Введите телефон'}/>
            <button>Получить коммерческое предложение</button>
            <div className={'agreement'}>
                <div style={{display: "flex"} }>
                    <input type={'checkbox'}/>
                    <p>Согласие на обработку персональных данных</p>
                </div>
                <p style={{fontSize: '16px'}}>В течение 15 минут с вами свяжется инженер для уточнения данных</p>
            </div>
        </div>
    )
}