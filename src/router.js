import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CadastroProduto } from './Telas/CadastroDeProduto'
import { CadastroCategoria } from './Telas/CadastroDeCategoria'
import { CadastroAdocao } from './Telas/CadastroDeAdocao'
import { CadastroTipo } from './Telas/CadastroDeTipo'
import { Home } from './Telas/Home'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<Home />} />
                <Route path="/cadastro-produto" element={<CadastroProduto />} />
                <Route path="cadastro-categoria" element={<CadastroCategoria />} />
                <Route path="cadastro-adoção" element={<CadastroAdocao />} />
                <Route path="cadastro-tipo" element={<CadastroTipo />} />
            </Routes>
        </BrowserRouter>
    )
}