import { Modal } from "../components/ModalProduto";
import { Cabecalho } from "../components/Cabecalho";
import { Footer } from "../components/Footer";
import { Inputs } from "../components/inputs";
import { ArrowLeft, } from "@phosphor-icons/react";
import { AsideCategoria } from "../components/AsideCategoria";
import "./CadastroDeProduto.css";

import { useState, useEffect } from "react";
import {getProdutos, handleSubmit,editarProdutos,} from "../api/index";
import { Link } from "react-router-dom";
//import { Card } from "react-bootstrap";

const menuProps = "CadatroProduto" || "CadatroCategoria"

export function CadastroCategoria(props) {
  const [modal, setModal] = useState(false);
  const [allRegisters, setAllRegisters] = useState([]);
  const [menu, setMenu] = useState(menuProps);

  const tableHead = ["Codigo", "Nome"];

  const [validado, setValidated] = useState(false);
  const [produto, setProduto] = useState({
    codigo: "",
    nome: "",
    edit: -1,
  });

  useEffect(() => {
    async function fetchData() {
      const produtos = await getProdutos();
      setAllRegisters(produtos);
    }
    fetchData();
  }, []);

  function handleChange(e) {
    const { id, value } = e.target;
    console.log("O elemento " + id + " tem um novo valor " + value);
    setProduto({ ...produto, [id]: value });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (produto.edit === -1) {
      handleCadastro();
    } else {
      handleAtualizacao();
    }
  }

  async function handleCadastro() {
    // Verifique se todos os campos estão preenchidos
    if (
      produto.nome 
    ) {
      const produtoAtualizado = { ...produto,};
  
      await handleSubmit(produtoAtualizado);
      // Limpe os campos do formulário
      resetForm();
    } else {
      // Exiba o alerta
      setValidated(true);
    }
  
    const produtos = await getProdutos();
    setAllRegisters(produtos);
  }
  

  async function handleAtualizacao() {
    await editarProdutos(produto, setProduto);

    const produtos = await getProdutos();
    setAllRegisters(produtos);
    resetForm();
  }

  function resetForm() {
    setProduto({
      codigo: "",
      nome: "",
      edit: -1,
    });
  }

  return (
    <>
      <Cabecalho />
      <main className="mainSection">
        <section className="FormProduto_container">
          <div className="form-produtos-titulo centro_logo">
          <div className="titulo">
              <img
                className="vector vectoranimais"
                src={"vector-3.svg"}
                alt="Vector"
              />
              <>
                Cadastro de <span className="span1">Categorias</span>
              </>
            </div>

            <Link to={"/cadastro-produto"}> 
            <ArrowLeft className="arrow" size={32} onClick={() => setMenu("CadastroProduto")} />
            </Link>
        </div>

          <form noValidate onSubmit={handleFormSubmit}>
            <Inputs
              type="number"
              text="Código do Produto"
              placeholder="00000"
              value={produto.codigo}
              id="codigo"
              name="codigo"
              onChange={handleChange}
              disabled
              style={{ display: "none" }}
              className={validado && !produto.codigo ? "input-invalid" : ""}
            />

            <Inputs
              type="text"
              text="Nome da Categoria"
              placeholder="Digite o nome da Categoria"
              value={produto.nome}
              id="nome"
              name="nome"
              onChange={handleChange}
              required
              className={validado && !produto.nome ? "input-invalid" : ""}
            />

            <div className="btnProduto mainSection">
              <button type="submit">
                {produto.edit === -1 ? "Cadastrar Categoria" : "Atualizar Categoria"}
              </button>
            </div>
          </form>

          {validado && (
            <div className="alert">Por favor, preencha todos os campos!</div>
          )}

        </section>

        <div className="alinha">
            <section className="container-main cadastros flex-col aside-cadastro-aceitafazer">
              <AsideCategoria/>
            </section>
        </div>
      </main>

      {modal ? (
        <Modal
          title={"Cadastro de Produtos"}
          setModal={setModal}
          tableHead={tableHead}
          registerAll={allRegisters}
          setRegisterAll={setAllRegisters}
          setFormValidate={setProduto}
        />
      ) : null}

      <Footer />
    </>
  );
}
