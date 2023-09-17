import { Modal } from "../components/ModalProduto";
import { Cabecalho } from "../components/Cabecalho";
import { Footer } from "../components/Footer";
import { Inputs } from "../components/inputs";
import { Select } from "../components/Select";
import { Textarea } from "../components/textarea";
import * as Popover from '@radix-ui/react-popover';
import "./CadastroDeProduto.css";

import vetor3 from "../imegens/vector-3.svg"
import gatinhoo from "../imegens/gatinhoo.png"
import { Cards, DotsThreeVertical, PlusCircle } from "@phosphor-icons/react";

import { useState, useEffect } from "react";
import { getProdutos, handleSubmit, editarProdutos, } from "../api/index"; // Importar função getCategorias
import { useNavigate } from "react-router-dom";

export function CadastroProduto() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [allRegisters, setAllRegisters] = useState([]);
  const [menu, setMenu] = useState("CadastroProduto");

  const apiCategoria = "https://129.146.68.51/aluno12-pfsii/categoria";
  const tableHead = ["Codigo", "Nome", "Preço", "Descrição", "Categoria"];

  const [validado, setValidated] = useState(false);
  const [produto, setProduto] = useState({
    codigo: "",
    nome: "",
    preco: "",
    descricao: "",
    categoria: "", // Alterado para uma string vazia para categoria
    edit: -1,
  });

  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const produtos = await getProdutos();
      setAllRegisters(produtos);
      try {
        const response = await fetch(apiCategoria);
        const data = await response.json();

        if (response.ok) {
          setCategories(data); // Defina as categorias recuperadas da API
        } else {
          console.error("Erro ao buscar categorias:", data);
        }
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      } finally {
        setLoadingCategories(false);
      }
    }
    fetchData();
  }, []);

  function maskPrice(event) {
    var price = event.target.value;
    price = price.replace(/\D/g, "");
    price = price.replace(/(\d)(\d{2})$/, "$1.$2");
    price = price.replace(/(?=(\d{3})+(\D))\B/g, "");
    event.target.value = "R$" + price;
  }

  function handleChange(e) {
    const { id, value } = e.target;
    console.log("O elemento " + id + " tem um novo valor " + value);
    if (id === "categoriaNome") {
      // Extrai o ID da categoria selecionada
      const categoriaId = categories.find(category => category.nome === value)?.id;
      setProduto({ ...produto, categoria: categoriaId });
    } else {
      setProduto({ ...produto, [id]: value });
    }
  }

  function handleMenuChange(selectedMenu) {
    setMenu(selectedMenu);

    if (selectedMenu === "CadastroProduto") {
      navigate("/cadastro-produto");
    } else if (selectedMenu === "CadastroCategoria") {
      navigate("/cadastro-categoria");
    }
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (produto.edit === -1) {
      handleCadastro();
    } else {
      handleAtualizacao();
    }
    console.log("Formulário enviado");
  }

  async function handleCadastro() {
    if (
      produto.nome &&
      produto.preco &&
      produto.descricao &&
      produto.categoria
    ) {
      const preco = produto.preco.replace(/[^\d.]/g, "");
      const produtoAtualizado = { ...produto, preco };

      await handleSubmit(produtoAtualizado);
      resetForm();
    } else {
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
                src={vetor3}
                alt="Vector"
              />
              <>
                Cadastro de <span className="span1">Produtos</span>
              </>
            </div>
            <Popover.Root>
              <Popover.Trigger className="popover-trigger">
                <DotsThreeVertical size={32} />
              </Popover.Trigger>

              <Popover.Portal>
                <Popover.Content className="popover-content">
                  <button className="button-popover-trigger" onClick={() => setModal(true)}>
                    <Cards size={32} />
                    <span>Modal</span>
                  </button>

                  <button className="button-popover-trigger" onClick={() => handleMenuChange("CadastroCategoria")}>
                    <PlusCircle size={32} />
                    <span>Cadastrar Categoria</span>
                  </button>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
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

            {(
              <>
                <Select
                  text="Selecione a Categoria"
                  name="categoriaNome"
                  id="categoriaNome"
                  value={categories.find(category => category.id === produto.categoria)?.nome || ''}
                  onChange={handleChange}
                  options={categories.map(category => category.nome)}
                  required
                  className={validado && !produto.categoria ? "input-invalid" : ""}
                />

                {/* Campo oculto para armazenar o ID da categoria */}
                <input
                  type="hidden"
                  name="categoria"
                  id="categoria"
                  value={produto.categoria}
                  onChange={handleChange}
                />
              </>
            )}


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
          <img src={gatinhoo} alt="imagem-fundo-produtos" className="img_produto" />
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
          categories={categories} 
        />
      ) : null}


      <Footer />
    </>
  );
}
