import React, { useState, useEffect } from "react";
import { getByIdRegisterTipo } from "../api/index";
import "./tipo.css";

export function CheckboxDropdownTipo({
  tipos,
  formValidate,
  setFormValidate,
  titleCheckbox,
  name,
  required,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    // Atualize os tipos selecionados quando o formulário mudar
    setSelectedOptions(formValidate.tipo || []); // Certifique-se de que formValidate.tipo seja uma array
  }, [formValidate]);

  const handleTipoChange = (tipoId) => {
    const updatedTipos = selectedOptions.includes(tipoId)
      ? selectedOptions.filter((id) => id !== tipoId)
      : [...selectedOptions, tipoId];
    setSelectedOptions(updatedTipos);
    setFormValidate({ ...formValidate, tipo: updatedTipos }); // Atualize também o formulário
  };

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="container-checkbox-dropdown">
      <div>
        <div onClick={toggleDropdown} className="select-div">
          {titleCheckbox}
        </div>
      </div>
      {isOpen && (
        <div
          className="menu-checkbox-dropdown"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {tipos.map((tipo) => (
            <div className="checkbox-item" >
            <label key={tipo.id} className="checkbox-label">
              <input
                type="checkbox"
                className="input-checkbox-item "
                value={tipo.id}
                checked={selectedOptions.includes(tipo.id)}
                onChange={() => handleTipoChange(tipo.id)}
              />
              {tipo.nome}
            </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}