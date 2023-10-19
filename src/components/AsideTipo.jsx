import React, { useState, useEffect } from "react";
import { Pencil, Trash } from "@phosphor-icons/react";
import { deleteTipo, getAllTipo } from "../api";
import vetor3 from "../imegens/vector-3.svg"

export function AsideTipo({ setFormTipo, onInsert }) {
    const tableHead = ["ID", "Nome"];

    const [allRegisters, setAllRegisters] = useState([]);

    function editCategoria(tipo) {
        const { edit, ...rest } = tipo;
        const aux = {
            edit: 1,
            ...rest
        };
        setFormTipo(aux);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const categorias = await getAllTipo();
                setAllRegisters(categorias);
            } catch (error) {
                console.error("Erro ao buscar Tipo:", error);
            }
        }
        fetchData();
    }, [onInsert]);

    async function deleteCategoria(codigo) {
        const confirmDelete = window.confirm("Tem certeza de que deseja excluir a Tipo?");
        if (confirmDelete) {
          try {
            await deleteTipo(codigo);
            const categorias = await getAllTipo();
            setAllRegisters(categorias);
          } catch (error) {
            console.error("Erro ao excluir a Tipo:", error);
          }
        }
      }  

    return (
        <>
            <div className="aside-categoriaP-header">
                <img
                    className="vector vectorEntrada"
                    src={vetor3}
                    alt="Vector"
                />
                <h2>Registros de Tipo</h2>
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
