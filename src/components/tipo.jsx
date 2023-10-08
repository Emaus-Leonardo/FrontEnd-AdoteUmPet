import React, { useState, useEffect } from "react";
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
  const [selectedOptions, setSelectedOptions] = useState([]); // Inicialize com um array vazio

  useEffect(() => {
    // Certifique-se de que formValidate.tipo seja uma array
    const formTipo = Array.isArray(formValidate.tipo) ? formValidate.tipo : [];
    setSelectedOptions(formTipo);
  }, [formValidate]);

  const handleTipoChange = (tipoId) => {
    let updatedTipos = [];

    if (selectedOptions.includes(tipoId)) {
      updatedTipos = selectedOptions.filter((id) => id !== tipoId);
    } else {
      updatedTipos = [...selectedOptions, tipoId];
    }

    setSelectedOptions(updatedTipos);
    setFormValidate({ ...formValidate, tipo: updatedTipos });
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
            <div className="checkbox-item" key={tipo.id}>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  className="input-checkbox-item"
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
