import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CadastroProduto } from './Telas/CadastroDeProduto'
import { CadastroCategoria } from './Telas/CadastroDeCategoria'

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<CadastroProduto />} />
                <Route path="cadastro-categoria" element={<CadastroCategoria />} />
            </Routes>
        </BrowserRouter>
    )
}