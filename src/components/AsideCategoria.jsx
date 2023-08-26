import React from "react"; // Certifique-se de importar o React
import { Pencil, Trash } from "@phosphor-icons/react";
import { deleteCategoriaP, getAllCategorias } from "../api";

export function AsideCategoria({ categoriaAll, setFormCategria, setCategoriaAll }) {

    function editCategoria(categoriaP) {
        const { edit, ...rest } = categoriaP;
        const aux = {
            edit: 1,
            ...rest
        };
        setFormCategria(aux);
    }

    async function deleteCategoria(categoriaP) {
        if (window.confirm(`Quer mesmo deletar esta categoria? ${categoriaP.name}?`)) {
            const message = await deleteCategoriaP(categoriaP.id);
            if (message === "success") { // Assuming deleteCategoriaP returns "success" on successful deletion
                setCategoriaAll(await getAllCategorias());
            }
        }
    }

    return (
        <>
            <div className="aside-categoriaP-header">
                <img
                    className="vector vectorEntrada"
                    src={"vector-3.svg"} // Certifique-se de fornecer o caminho correto para a imagem
                    alt="Vector"
                />
                <h2>Registros de Categoria</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {categoriaAll !== undefined && categoriaAll.map((categoriaP, index) => (
                        <tr key={index}>
                            <td data-label="Id">{index + 1}</td>
                            <td data-label="Categoria-Name">{categoriaP.name}</td>
                            <td data-label="Action-Edit">
                                <Pencil size={32} onClick={() => editCategoria(categoriaP)} />
                            </td>
                            <td data-label="Action-Delete">
                                <Trash size={32} onClick={() => deleteCategoria(categoriaP)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
