import { Modal } from "../components/ModalProduto";
import { Cabecalho } from "../components/Cabecalho";
import { Footer } from "../components/Footer";
import { Inputs } from "../components/inputs";
import { Select } from "../components/Select";
import { Textarea } from "../components/textarea";
import "./CadastroDeProduto.css";

import { Cards } from "@phosphor-icons/react";

import { useState, useEffect } from "react";
import {
  getProdutos,
  handleSubmit,
  editarProdutos,
} from "../api/index";

export function CadastroProduto(props) {
  const [modal, setModal] = useState(false);
  const [allRegisters, setAllRegisters] = useState([]);

  const tableHead = ["Codigo", "Nome", "Preço", "Descrição", "Categoria"];

  const [validado, setValidated] = useState(false);
  const [produto, setProduto] = useState({
    codigo: "",
    nome: "",
    preco: "",
    descricao: "",
    categoria: "",
    edit: -1,
  });

  useEffect(() => {
    async function fetchData() {
      const produtos = await getProdutos();
      setAllRegisters(produtos);
    }
    fetchData();
  }, []);

  function maskPrice(event) {
    var price = event.target.value;
    price = price.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
    price = price.replace(/(\d)(\d{2})$/, "$1.$2"); // Insere o separador decimal
    price = price.replace(/(?=(\d{3})+(\D))\B/g, ""); // Remove o separador de milhar
    event.target.value = "R$" + price; // Adiciona o símbolo "R$"
  }

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
      produto.nome &&
      produto.preco &&
      produto.descricao &&
      produto.categoria
    ) {
      // Remove o símbolo "R$" e qualquer caractere não numérico do campo de preço
      const preco = produto.preco.replace(/[^\d.]/g, "");
      const produtoAtualizado = { ...produto, preco };
  
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
      preco: "",
      descricao: "",
      categoria: "",
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
                Cadastro de <span className="span1">Produtos</span>
              </>
            </div>
            <Cards
              className="svg-modal"
              size={32}
              onClick={() => setModal(true)}
            />
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
              text="Nome do Produto"
              placeholder="Digite o nome do Produto"
              value={produto.nome}
              id="nome"
              name="nome"
              onChange={handleChange}
              required
              className={validado && !produto.nome ? "input-invalid" : ""}
            />

            <Inputs
              type="text"
              text="Preço Desejado"
              placeholder="Valor (R$)"
              value={produto.preco}
              id="preco"
              name="preco"
              onChange={handleChange}
              required
              maskPrice={maskPrice}
              className={validado && !produto.preco ? "input-invalid" : ""}
            />

            <Textarea
              text="Descrição"
              placeholder="Descrição"
              value={produto.descricao}
              id="descricao"
              name="descricao"
              onChange={handleChange}
              required
              className={validado && !produto.descricao ? "input-invalid" : ""}
            />

            <Select
              text="Selecione a Categoria"
              name="categoria"
              id="categoria"
              value={produto.categoria}
              onChange={handleChange}
              options={["Comidas", "Brinquedos", "Remedios", "Outro"]}
              required
              className={validado && !produto.categoria ? "input-invalid" : ""}
            />

            <div className="btnProduto mainSection">
              <button type="submit">
                {produto.edit === -1 ? "Cadastrar Produto" : "Atualizar Produto"}
              </button>
            </div>
          </form>

          {validado && (
            <div className="alert">Por favor, preencha todos os campos!</div>
          )}

        </section>

        <div className="alinha">
          <img
            src="gatinhoo.png"
            alt="imagem-fundo-produtos"
            className="img_produto"
          />
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
