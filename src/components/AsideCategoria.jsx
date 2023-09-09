import React, { useState, useEffect } from "react";
import { Pencil, Trash } from "@phosphor-icons/react";
import { deleteCategoriaP, getAllCategorias } from "../api";

export function AsideCategoria({ setFormCategoria, onInsert }) {
    const tableHead = ["ID", "Nome"];

    const [allRegisters, setAllRegisters] = useState([]);

    function editCategoria(categoriaP) {
        const { edit, ...rest } = categoriaP;
        const aux = {
            edit: 1,
            ...rest
        };
        setFormCategoria(aux);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const categorias = await getAllCategorias();
                setAllRegisters(categorias);
            } catch (error) {
                console.error("Erro ao buscar categorias:", error);
            }
        }
        fetchData();
    }, [onInsert]);

    async function deleteCategoria(codigo) {
        const confirmDelete = window.confirm("Tem certeza de que deseja excluir a categoria?");
        if (confirmDelete) {
          try {
            await deleteCategoriaP(codigo);
            const categorias = await getAllCategorias();
            setAllRegisters(categorias);
          } catch (error) {
            console.error("Erro ao excluir a categoria:", error);
          }
        }
      }  

    return (
        <>
            <div className="aside-categoriaP-header">
                <img
                    className="vector vectorEntrada"
                    src={"vector-3.svg"}
                    alt="Vector"
                />
                <h2>Registros de Categoria</h2>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        {tableHead.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                        <th scope="col">Editar</th>
                        <th scope="col">Deletar</th>
                    </tr>
                </thead>

                <tbody>
                    {allRegisters.map((categoria) => (
                        <tr key={categoria.id}>
                            <td>{categoria.id}</td>
                            <td>{categoria.nome}</td>
                            <td>
                                <Pencil
                                    size={32}
                                    onClick={() => editCategoria(categoria)}
                                />
                            </td>
                            <td>
                                <Trash
                                    size={32}
                                    onClick={() => deleteCategoria(categoria.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
