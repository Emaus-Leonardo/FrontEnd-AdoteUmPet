import { onChangeInput } from "../util";
import './InputsForm.css'

export function InputsForm({ infoInput, index, formValidate, setFormValidate, classNameLabel}) {


  function handleFormValidateChecked( inputFormInput, indexFormInput, name, value) {
    if(inputFormInput.name === "disponibilidade") {
      setFormValidateDisponibilidade(name, value)
    } 
    
    else{
      setFormValidate({ ...formValidate, [name]: value });
    }

    if (index === indexFormInput) inputFormInput.checked = !infoInput.checked;
  }

  function setFormValidateDisponibilidade(name, value){
    let aux = "";

    if(formValidate.disponibilidade.length > 0){
      aux = formValidate.disponibilidade.split("-")
    }

    else { 
      aux = formValidate.disponibilidade.split(""); 
    }


    aux.indexOf(value) === -1 ? aux.push(value) : aux.splice(aux.indexOf(value), 1);
    setFormValidate({ ...formValidate, [name]: aux.join("-") });
  }

  return (
      <div className="form-check">
        <input
          className={infoInput.class}
          type={infoInput.type}
          value={infoInput.value}
          id={infoInput.id}
          name={infoInput.name}
          checked={infoInput.checked}
          placeholder={infoInput.placeholder}
          onChange={(e) => infoInput.type === "radio" || infoInput.type === "checkbox" ? handleFormValidateChecked( infoInput, index, e.target.name, e.target.value) : onChangeInput(infoInput.name, e.target.value, setFormValidate, formValidate)}
          required={infoInput.required}
          minLength={infoInput.minlength}
          maxLength={infoInput.maxLength}
          onInput={infoInput.onInput}
          
        />
        <label className={`infoInput.labelClass ${classNameLabel}`} htmlFor={infoInput.labelFor}>
          {infoInput.label}
        </label>
      </div>
  );

}
