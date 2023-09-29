import React, { useState, useEffect } from "react";
import { Modal } from "../components/ModalAdocao";
import { Cabecalho } from "../components/Cabecalho";
import { Footer } from "../components/Footer";
import { Inputs } from "../components/inputs";
import { CheckboxDropdownTipo } from "../components/tipo";
import * as Popover from "@radix-ui/react-popover";
import vetor3 from "../imegens/vector-3.svg";
import cat from "../imegens/catt.jpg";

import { Cards, DotsThreeVertical, PlusCircle } from "@phosphor-icons/react";
import {
  getAdocao,
  handleSubmitAdocao,
  editarAdocao,
} from "../api/index";

import { useNavigate } from "react-router-dom";
import "./CadastroDeProduto.css";

export function CadastroAdocao() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [allRegisters, setAllRegisters] = useState([]);
  const [menu, setMenu] = useState("CadastroAdocao");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [validated, setValidated] = useState(false);
  const [adocao, setAdocao] = useState({
    codigo: "",
    nome: "",
    email: "",
    celular: "",
    tipos: [],
    edit: -1,
  });

  const apiTipo = "https://129.146.68.51/aluno12-pfsii/tipo";
  const tableHead = ["Código", "Nome", "Email", "Celular", "Tipo"];

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const adocoes = await getAdocao();
      setAllRegisters(adocoes);
      try {
        const response = await fetch(apiTipo);
        const data = await response.json();

        if (response.ok) {
          setCategories(data); // Defina as tipo recuperadas da API
        } else {
          console.error("Erro ao buscar tipo:", data);
        }
      } catch (error) {
        console.error("Erro ao buscar tipo:", error);
      } finally {
      }
    }
    fetchData();
  }, []);

  function handleChange(e) {
    const { id, value } = e.target;
    console.log("O elemento " + id + " tem um novo valor " + value);
    setAdocao({ ...adocao, [id]: value });
  }

  function handleMenuChange(selectedMenu) {
    setMenu(selectedMenu);

    if (selectedMenu === "CadastroAdocao") {
      navigate("/cadastro-adoçao");
    } else if (selectedMenu === "CadastroTipo") {
      navigate("/cadastro-tipo");
    }
  }


  async function handleFormSubmit(e) {
    e.preventDefault();

    console.log("Formulário submetido");

    if (adocao.edit === -1) {
      handleCadastro();
    } else {
      handleAtualizacao();
    }
  }

  async function handleCadastro() {
    console.log("Tentando cadastrar");

    if (
      adocao.nome &&
      adocao.email &&
      adocao.celular &&
      adocao.tipo
    ) {
      const adocaoAtualizada = { ...adocao };
      console.log("Cadastro válido: ", adocaoAtualizada);

      await handleSubmitAdocao(adocaoAtualizada);
      resetForm();
    } else {
      console.log("Cadastro inválido");
      setValidated(true);
    }

    const adocoes = await getAdocao();
    setAllRegisters(adocoes);
  }

  async function handleAtualizacao() {
    const adocaoAtualizada = { ...adocao };
    adocaoAtualizada.tipos = selectedOptions; // Atualize os tipos selecionados com os valores apropriados

    await editarAdocao(adocaoAtualizada, setAdocao);

    const adocoes = await getAdocao();
    setAllRegisters(adocoes);
    resetForm();
  }

  function resetForm() {
    setAdocao({
      codigo: "",
      nome: "",
      email: "",
      celular: "",
      tipo: "",
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
                Cadastro de <span className="span1">Adoção</span>
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

                  <button className="button-popover-trigger" onClick={() => handleMenuChange("CadastroTipo")}>
                    <PlusCircle size={32} />
                    <span>Cadastrar Tipo</span>
                  </button>
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>

          <form noValidate onSubmit={handleFormSubmit}>
            <Inputs
              type="number"
              text="Código da Adoção"
              placeholder="00000"
              value={adocao.codigo}
              id="codigo"
              name="codigo"
              onChange={handleChange}
              disabled
              style={{ display: "none" }}
              className={validated && !adocao.codigo ? "input-invalid" : ""}
            />

            <Inputs
              type="text"
              text="Nome"
              placeholder="Digite o nome do Adotante"
              value={adocao.nome}
              id="nome"
              name="nome"
              onChange={handleChange}
              required
              className={validated && !adocao.nome ? "input-invalid" : ""}
            />

            <Inputs
              type="text"
              text="Email"
              placeholder="Digite o email do Adotante"
              value={adocao.email}
              id="email"
              name="email"
              onChange={handleChange}
              required
              className={validated && !adocao.email ? "input-invalid" : ""}
            />

            <Inputs
              type="text"
              text="Celular"
              placeholder="Digite o celular do Adotante"
              value={adocao.celular}
              id="celular"
              name="celular"
              onChange={handleChange}
              required
              className={validated && !adocao.celular ? "input-invalid" : ""}
            />

            <div className={validated && !adocao.celular ? "input-invalid" : ""}>
              <CheckboxDropdownTipo
                type="checkbox"
                id="tipoNome"
                name="tipoNome"
                required
                value={categories.find((category) => category.id === adocao.categoria)?.nome || ""}
                tipos={categories}
                formValidate={adocao}
                setFormValidate={setAdocao}
                titleCheckbox="Selecione o Tipo"
                onChange={handleChange}
                selectedOptions={adocao.tipos}
                setSelectedOptions={setSelectedOptions}
              />
            </div>
            <div className="btnProduto mainSection">
              <button type="submit">
                {adocao.edit === -1 ? "Cadastrar Adoção" : "Atualizar Adoção"}
              </button>
            </div>
          </form>

          {validated && (
            <div className="alert">Por favor, preencha todos os campos!</div>
          )}
        </section>

        <div className="alinha">
          <img src={cat} alt="imagem-fundo-adoção" className="img_produto" />
        </div>
      </main>

      {modal ? (
        <Modal
          title={"Cadastro de Adoção"}
          setModal={setModal}
          tableHead={tableHead}
          registerAll={allRegisters}
          setRegisterAll={setAllRegisters}
          setFormValidate={setAdocao}
          categories={categories}
        />
      ) : null}

      <Footer />
    </>
  );
}
