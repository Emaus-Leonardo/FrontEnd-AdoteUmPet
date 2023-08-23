import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Telas/Home'
import { CadastroProduto } from './Telas/CadastroDeProduto'


export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<CadastroProduto />} />
            </Routes>
        </BrowserRouter>
    )
}