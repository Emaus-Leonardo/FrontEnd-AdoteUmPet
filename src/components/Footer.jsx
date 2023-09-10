import React from 'react'
import './Footer.css'
import logo_ong from "../imegens/logo_ong.png"
import vetor1 from "../imegens/vector-1.svg"
import vetor2 from "../imegens/vector-2.svg"
import line4 from "../imegens/line-4.svg"

export function Footer(){
    return(
        <footer className="footer">
            <img className="img0" src={logo_ong} alt="ONG Logo" />
            <p className="pet_adote montserrat-medium-concrete-12px">
                <span className="montserrat-medium-concrete-12px">O Pet Adote é um sistema de apoio a </span>
                <span className="span1-2">Associação dos Defensores de Animais (ADAPV)</span>
                <span className="montserrat-medium-concrete-12px"> sem fins lucrativos, idealizado e criado pelos alunos do 3° termo do curso de Análise e Desenvolvimento de Sistemas da UNOESTE.</span>
            </p>
            <img className="line-4 line" src={line4} alt="Line 4" />
            <div className="infos">
                <div className="loc">
                <img className="vector-1" src={vetor1} alt="Vector" />
                <div className="pres-venceslau montserrat-medium-concrete-16px">Pres. Venceslau</div>
                </div>
                <div className="fone">
                <img className="vector-2" src={vetor2} alt="Vector" />
                <div className="phone montserrat-medium-concrete-16px">(18) 1234 5678</div>
                </div>
            </div>
        </footer>
    )
}