import React from 'react'
import './Aside.css'

export function Aside(){
    return(
        <div className='aside flex-col'>
            <div className="aside-header">
                <img src="logotipo.svg" alt="logotipo-org" />
                <h1>Pet<span>Adopte</span></h1>
            </div>

            <p>Ao adotar um animal de estimação, você estará salvando uma vida e dando a ele uma segunda chance para ter um lar amoroso.</p>
            <h2>Não perca tempo, adote um pet hoje mesmo!</h2>
        </div>
    )
}