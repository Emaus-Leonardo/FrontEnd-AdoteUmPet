import { MagnifyingGlass, Pencil, Trash, X } from "@phosphor-icons/react";
import './Modal.css'
import { excluirAdocao, getAdocao,  } from "../api/index";
import { useState } from "react";

export function Modal(props) {
  const { title, tableHead, registerAll, setRegisterAll, setFormValidate, setModal } = props;
  const [search, setSearch] = useState("");

  function editRegister(register, index) {
    // Atualize o formulário com os dados do registro selecionado
    setFormValidate(register);
    setModal(false); // Feche o modal ao clicar em "Editar"
  }

  async function deletarAdocao(codigo) {
    const confirmDelete = window.confirm("Tem certeza de que deseja excluir o produto?");
    if (confirmDelete) {
      try {
        await excluirAdocao(codigo);
        const adocao = await getAdocao();
        setRegisterAll(adocao);
      } catch (error) {
        console.error("Erro ao excluir o produto:", error);
      }
    }
  }

  function onChangeSearchvalue(value) {
    setSearch(value);
  }

  return (
    <div className="modal">
      <div className="modal-container flex-col">
        <div className="modal-container-title">
          <h2>{title}</h2>

          <div className="search">
            <MagnifyingGlass size={26} />
            <input
              type="text"
              name="search"
              placeholder="Pesquise pelo nome do produto"
              onChange={(e) => onChangeSearchvalue(e.target.value)}
            />
          </div>

          <X size={32} onClick={() => setModal(false)} />
        </div>
        <table>
          <thead>
            <tr>
              {tableHead.map((head, index) => (
                <th scope="col" key={index}>
                  {head}
                </th>
              ))}
              <th scope="col">Editar</th>
              <th scope="col">Deletar</th>
            </tr>
          </thead>
          <tbody>
            {registerAll !== undefined && registerAll.length > 0 &&
              registerAll
                .filter((register) =>
                  Object.values(register.nome)
                    .join("")
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((registerInput, index) => {
                  const register = Object.values(registerInput);

                  return (
                    <tr key={index}>
                      {register.map((registerInput, index) => (
                        <td key={index}>{registerInput}</td>
                      ))}
                      <td>
                        <Pencil
                          size={32}
                          onClick={() => editRegister(registerInput, index)}
                        />
                      </td>
                      <td>
                        <Trash
                          size={32}
                          onClick={() => deletarAdocao(registerInput.codigo)}
                        />
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
}