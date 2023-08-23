import { Cabecalho } from '../components/Cabecalho'
import { Footer } from '../components/Footer'
import './SobreNos.css'

export function SobreNos() {
    return (
        <>
            <Cabecalho />
            <div className='conteudo_sobre'>
                <div className='title_sobre span1_sobre'>Sobre nós</div>
                <p></p>
                <p className='texto_sobre'>
                    A Associação Desfensores de Animais de Presidente Venceslau foi fundada
                    em 2015, através da insatisfação de algumas pessoas ao ver a situação dos animais
                    na cidade de Presidente Venceslau, sendo assim se unirão e fundarão a mesma. A
                    princípio as reuniões eram realizadas na casa dos seus associados, atualmente são
                    realizadas na sede da associação, que se encontra na Rua Paulo Cesar Rondó
                    Nogueira, nº 214 – Presidente Venceslau/SP. A mesma é uma organização não
                    governamental, de caráter filantrópico sem fins lucrativos que trabalha
                    incansavelmente em prol do bem-estar animal.</p><p className='texto_sobre'>
                    Todo gerenciamento e administração da associação e realizado por
                    voluntários, sendo a falta de recursos financeiros e de pessoal os principais problemas
                    da instituição.</p><p className='texto_sobre'>
                    A instituição tem como objetivo ajudar animais domésticos que estejam em
                    situação de abandono ou que sofram maus tratos, buscando encontrar lares
                    responsáveis e amorosos para que possam viver com dignidade.

                </p>
                <br />
                <div className='img_row_sobre'>
                    <img src='animal1.jpg' />
                    <img src='animal2.jpg' />
                    <img src='animal3.jpg' />
                </div>
            </div>
            <Footer />
        </>
    )
}