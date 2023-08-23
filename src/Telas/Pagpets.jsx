import React from "react";
import "./Pagpets.css";
import { Cabecalho } from "../components/Cabecalho";
import { Footer } from "../components/Footer";

export default function Pagpets() {
  return (
    <>
      <Cabecalho />
      <div className="pagpetsRootRoot">
        <h2 className="title2">PETS ESPERANDO POR UM LAR</h2>
        <div className="group">
          <div>
            <input
              type="text"
              className="searchInput"
              label="Pesquisar um pet"
            />
          </div>
          <div className="botaoprimario">
            <button className="searchButton">Pesquisar</button>
          </div>
        </div>
        <div className="container-pet">
          <div className="filtersWrapper">
            <h3 className="filtersTitle">FILTROS</h3>
            <div className="checkbox-container">
              <label className="checkbox-label" htmlFor="dogCheckbox">
                <input type="checkbox" id="dogCheckbox" className="checkbox" />
                Cachorro
              </label>
              <label className="checkbox-label" htmlFor="catCheckbox">
                <input type="checkbox" id="catCheckbox" className="checkbox" />
                Gato
              </label>
              <label className="checkbox-label" htmlFor="puppyCheckbox">
                <input
                  type="checkbox"
                  id="puppyCheckbox"
                  className="checkbox"
                />
                Filhote
              </label>
              <label className="checkbox-label" htmlFor="adultCheckbox">
                <input
                  type="checkbox"
                  id="adultCheckbox"
                  className="checkbox"
                />
                Adulto
              </label>
              <label className="checkbox-label" htmlFor="smallSizeCheckbox">
                <input
                  type="checkbox"
                  id="smallSizeCheckbox"
                  className="checkbox"
                />
                Porte pequeno
              </label>
              <label className="checkbox-label" htmlFor="mediumSizeCheckbox">
                <input
                  type="checkbox"
                  id="mediumSizeCheckbox"
                  className="checkbox"
                />
                Porte médio
              </label>
              <label className="checkbox-label" htmlFor="largeSizeCheckbox">
                <input
                  type="checkbox"
                  id="largeSizeCheckbox"
                  className="checkbox"
                />
                Porte grande
              </label>
            </div>
            <div>
              <button className="botaoprimario7">Aplicar filtros</button>
            </div>
            <div className="botaosec">
              <button className="clearFiltersButton">Limpar filtros</button>
            </div>
          </div>
          <div className="group2">
            <div className="pet">
              <img
                className=""
                src="https://file.rendit.io/n/zVf5xPBnBN4XE50BWYfP.png"
              />
              <div className="rectangle2">
                <div className="group12">
                  <span className="petName">Billy</span>
                  <div className="linepet"></div>
                  <span className="petAge">1 ano</span>
                  <div className="linepet"></div>
                  <span className="petGender">Macho</span>
                </div>
                <div className="botaoprimario1">
                  <img
                    className="vectorpet"
                    src="https://file.rendit.io/n/ilD2joUeeLVTRBHLtWzP.svg"
                  />
                  <button className="applyFiltersButton">Quero adotar</button>
                </div>
              </div>
            </div>
            <div className="pet">
              <img
                className=""
                src="https://file.rendit.io/n/zVf5xPBnBN4XE50BWYfP.png"
              />
              <div className="rectangle2">
                <div className="group12">
                  <span className="petName">Billy</span>
                  <div className="linepet"></div>
                  <span className="petAge">1 ano</span>
                  <div className="linepet"></div>
                  <span className="petGender">Macho</span>
                </div>
                <div className="botaoprimario1">
                  <img
                    className="vectorpet"
                    src="https://file.rendit.io/n/ilD2joUeeLVTRBHLtWzP.svg"
                  />
                  <button className="applyFiltersButton">Quero adotar</button>
                </div>
              </div>
            </div>
            <div className="pet">
              <img
                className=""
                src="https://file.rendit.io/n/zVf5xPBnBN4XE50BWYfP.png"
              />
              <div className="rectangle2">
                <div className="group12">
                  <span className="petName">Billy</span>
                  <div className="linepet"></div>
                  <span className="petAge">1 ano</span>
                  <div className="linepet"></div>
                  <span className="petGender">Macho</span>
                </div>
                <div className="botaoprimario1">
                  <img
                    className="vectorpet"
                    src="https://file.rendit.io/n/ilD2joUeeLVTRBHLtWzP.svg"
                  />
                  <button className="applyFiltersButton">Quero adotar</button>
                </div>
              </div>
            </div>
            <div className="pet">
              <img
                className=""
                src="https://file.rendit.io/n/zVf5xPBnBN4XE50BWYfP.png"
              />
              <div className="rectangle2">
                <div className="group12">
                  <span className="petName">Billy</span>
                  <div className="linepet"></div>
                  <span className="petAge">1 ano</span>
                  <div className="linepet"></div>
                  <span className="petGender">Macho</span>
                </div>
                <div className="botaoprimario1">
                  <img
                    className="vectorpet"
                    src="https://file.rendit.io/n/ilD2joUeeLVTRBHLtWzP.svg"
                  />
                  <button className="applyFiltersButton">Quero adotar</button>
                </div>
              </div>
            </div>
            <div className="pet">
              <img
                className=""
                src="https://file.rendit.io/n/zVf5xPBnBN4XE50BWYfP.png"
              />
              <div className="rectangle2">
                <div className="group12">
                  <span className="petName">Billy</span>
                  <div className="linepet"></div>
                  <span className="petAge">1 ano</span>
                  <div className="linepet"></div>
                  <span className="petGender">Macho</span>
                </div>
                <div className="botaoprimario1">
                  <img
                    className="vectorpet"
                    src="https://file.rendit.io/n/ilD2joUeeLVTRBHLtWzP.svg"
                  />
                  <button className="applyFiltersButton">Quero adotar</button>
                </div>
              </div>
            </div>
            <div className="pet">
              <img
                className=""
                src="https://file.rendit.io/n/zVf5xPBnBN4XE50BWYfP.png"
              />
              <div className="rectangle2">
                <div className="group12">
                  <span className="petName">Billy</span>
                  <div className="linepet"></div>
                  <span className="petAge">1 ano</span>
                  <div className="linepet"></div>
                  <span className="petGender">Macho</span>
                </div>
                <div className="botaoprimario1">
                  <img
                    className="vectorpet"
                    src="https://file.rendit.io/n/ilD2joUeeLVTRBHLtWzP.svg"
                  />
                  <button className="applyFiltersButton">Quero adotar</button>
                </div>
              </div>
            </div>
            <div className="pet">
              <img
                className=""
                src="https://file.rendit.io/n/zVf5xPBnBN4XE50BWYfP.png"
              />
              <div className="rectangle2">
                <div className="group12">
                  <span className="petName">Billy</span>
                  <div className="linepet"></div>
                  <span className="petAge">1 ano</span>
                  <div className="linepet"></div>
                  <span className="petGender">Macho</span>
                </div>
                <div className="botaoprimario1">
                  <img
                    className="vectorpet"
                    src="https://file.rendit.io/n/ilD2joUeeLVTRBHLtWzP.svg"
                  />
                  <button className="applyFiltersButton">Quero adotar</button>
                </div>
              </div>
            </div>
            <div className="pet">
              <img
                className=""
                src="https://file.rendit.io/n/zVf5xPBnBN4XE50BWYfP.png"
              />
              <div className="rectangle2">
                <div className="group12">
                  <span className="petName">Billy</span>
                  <div className="linepet"></div>
                  <span className="petAge">1 ano</span>
                  <div className="linepet"></div>
                  <span className="petGender">Macho</span>
                </div>
                <div className="botaoprimario1">
                  <img
                    className="vectorpet"
                    src="https://file.rendit.io/n/ilD2joUeeLVTRBHLtWzP.svg"
                  />
                  <button className="applyFiltersButton">Quero adotar</button>
                </div>
              </div>
            </div>
            <div className="pet">
              <img
                className=""
                src="https://file.rendit.io/n/zVf5xPBnBN4XE50BWYfP.png"
              />
              <div className="rectangle2">
                <div className="group12">
                  <span className="petName">Billy</span>
                  <div className="linepet"></div>
                  <span className="petAge">1 ano</span>
                  <div className="linepet"></div>
                  <span className="petGender">Macho</span>
                </div>
                <div className="botaoprimario1">
                  <img
                    className="vectorpet"
                    src="https://file.rendit.io/n/ilD2joUeeLVTRBHLtWzP.svg"
                  />
                  <button className="applyFiltersButton">Quero adotar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
