import React, { useState, useEffect } from "react";
import { getAllTipo, createRegisterTipo, editRegisterTipo } from "../api/index";
import { Cabecalho } from "../components/Cabecalho";
import { Footer } from "../components/Footer";
import { Inputs } from "../components/inputs";
import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { AsideTipo } from "../components/AsideTipo";
import vetor3 from "../imegens/vector-3.svg";
import "./CadastroDeProduto.css";

const menuProps = "CadastroAdocao" || "CadastroTipo";

export function CadastroTipo(props) {
  const [allRegisters, setAllRegisters] = useState([]);
  const [menu, setMenu] = useState(menuProps);
  const [tipo, setTipo] = useState({
    codigo: "",
    nome: "",
    edit: -1,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const tipos = await getAllTipo();
        setAllRegisters(tipos);
      } catch (error) {
        console.error("Erro ao buscar tipos de animal:", error);
      }
    }
    fetchData();
  }, []);

  async function handleChange(e) {
    const { id, value } = e.target;
    console.log("O elemento " + id + " tem um novo valor " + value);
    setTipo({ ...tipo, [id]: value });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (tipo.edit === -1) {
      await handleCadastro();
    } else {
      await handleAtualizacao();
    }
  }

  async function handleCadastro() {
    if (tipo.nome) {
      const tipoAtualizado = { ...tipo };

      await createRegisterTipo(tipoAtualizado);
      resetForm();
    } else {
      setValidated(true);
    }

    const tipos = await getAllTipo();
    setAllRegisters(tipos);
  }
  async function handleAtualizacao() {
    if (tipo.nome) {
      // Verifique se o campo "nome" não está vazio
      await editRegisterTipo(tipo, setTipo);

      const tipos = await getAllTipo();
      setAllRegisters(tipos);
      resetForm();
    } else {
      setValidated(true);
    }
  }

  function resetForm() {
    setTipo({
      codigo: "",
      nome: "",
      edit: -1,
    });
  }

  const [validated, setValidated] = useState(false);

  return (
    <>
      <Cabecalho />
      <main className="mainSection">
        <section className="FormProduto_container">
          <div className="form-produtos-titulo centro_logo">
            <div className="titulo">
              <img className="vector vectoranimais" src={vetor3} alt="Vector" />
              <>
                Cadastro de <span className="span1">Tipo</span>
              </>
            </div>

            <Link to={"/cadastro-adoção"}>
              <ArrowLeft
                className="arrow"
                size={32}
                onClick={() => setMenu("CadastroAdocao")}
              />
            </Link>
          </div>

          <form noValidate onSubmit={handleFormSubmit}>
            <Inputs
              type="number"
              text="Código do Tipo"
              placeholder="00000"
              value={tipo.codigo}
              id="codigo"
              name="codigo"
              onChange={handleChange}
              disabled
              style={{ display: "none" }}
              className={validated && !tipo.codigo ? "input-invalid" : ""}
            />

            <Inputs
              type="text"
              text="Nome do Tipo do pet"
              placeholder="Digite o Tipo do pet"
              value={tipo.nome}
              id="nome"
              name="nome"
              onChange={handleChange}
              required
              className={validated && !tipo.nome ? "input-invalid" : ""}
            />

            <div className="btnProduto mainSection">
              <button type="submit">
                {tipo.edit === -1 ? "Cadastrar" : "Atualizar"}
              </button>
            </div>
          </form>

          {validated && (
            <div className="alert">Por favor, preencha todos os campos!</div>
          )}
        </section>

        <div className="alinha">
          <section className="table-container container-main cadastros flex-col aside-cadastro-aceitafazer">
            <AsideTipo setFormTipo={setTipo} onInsert={resetForm} />
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}


