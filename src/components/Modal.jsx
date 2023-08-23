import { MagnifyingGlass, Pencil, Trash, X } from "@phosphor-icons/react";
import './Modal.css'
import { deleteRegisterLogin, deleteRegisterVoluntario, getAllRegisterLogin, getAllRegisterVoluntario } from "../api";
import { useState } from "react";

export function Modal(props) {
  const { title, tableHead, registerAll, setRegisterAll, setFormValidate, ChangeValueObject, setModal } = props;
  const [search, setSearch] = useState("");

  function editRegister(register, index) {
    if (ChangeValueObject) {
      ChangeValueObject(register);
    }

    if(register.email !== undefined){
      const auxRegisters = {
        edit: index,
        email: register.email,
        enderecoRua: register.endereco.split(" - ")[0],
        enderecoNumero: register.endereco.split(" - ")[1],
        enderecoCep: register.endereco.split(" - ")[2],
        enderecoCidade: register.endereco.split(" - ")[3],
        id: register.id,
        nome: register.nome,
        senha: register.senha,
        senhaConfirmar: register.senha,
        telefone: register.telefone,
      };

      setFormValidate(auxRegisters);
    }
    else{
      setFormValidate(register);
    }

  }

  async function deleteRegisterById(register, id) {    
      if(register.email !== undefined){
        if(window.confirm("Tem certeza de que deseja excluir o registro do usuário?")){
        await deleteRegisterLogin(id);
        setRegisterAll(await getAllRegisterLogin());
      }}
      else{
        if(window.confirm("Tem certeza de que deseja excluir o voluntário?")){
        await deleteRegisterVoluntario(id);
        setRegisterAll(await getAllRegisterVoluntario());
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
              onChange={(e) => onChangeSearchvalue(e.target.value)}
              placeholder={"Pesquise pelo nome"}
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
                  const register = [];
                  Object.values(registerInput).forEach((values, index) => {
                    if(values !== registerInput.senha){
                      return register.push(values);
                    }
                  });

                  return (
                    <tr key={index}>
                      {register.map((registerInput, index) =>
                        typeof registerInput === "string"  ? (
                          <td key={index}>{registerInput}</td>
                        ) : null
                      )}
                      <td>
                        <Pencil
                          size={32}
                          onClick={() => editRegister(registerInput, index)}
                        />
                      </td>
                      <td>
                        <Trash
                          size={32}
                          onClick={() => deleteRegisterById(registerInput, registerInput.id)}
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
