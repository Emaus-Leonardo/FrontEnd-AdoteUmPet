export const disponibilidadeArray = [
  {
    class: "form-check-input",
    type: "checkbox",
    value: "S",
    id: "segunda",
    label: "Segunda - S",
    labelClass: "form-check-label",
    labelFor: "segunda",
    checked: false,
    name: "disponibilidade",
  },

  {
    class: "form-check-input",
    type: "checkbox",
    value: "T",
    id: "terca",
    label: "Terça - T",
    labelClass: "form-check-label",
    labelFor: "terca",
    checked: false,
    name: "disponibilidade",
  },

  {
    class: "form-check-input",
    type: "checkbox",
    value: "Q",
    id: "quarta",
    label: "Quarta - Q",
    labelClass: "form-check-label",
    labelFor: "quarta",
    checked: false,
    name: "disponibilidade",
  },

  {
    class: "form-check-input",
    type: "checkbox",
    value: "QI",
    id: "quinta",
    label: "Quinta - QI",
    labelClass: "form-check-label",
    labelFor: "quinta",
    checked: false,
    name: "disponibilidade",
  },

  {
    class: "form-check-input",
    type: "checkbox",
    value: "SE",
    id: "sexta",
    label: "Sexta - SE",
    labelClass: "form-check-label",
    labelFor: "sexta",
    checked: false,
    name: "disponibilidade",
  },

  {
    class: "form-check-input",
    type: "checkbox",
    value: "SA",
    id: "sabado",
    label: "Sabádo - SB",
    labelClass: "form-check-label",
    labelFor: "sabado",
    checked: false,
    name: "disponibilidade",
  },
];

export const periodoArray = [
  {
    class: "form-check-input",
    type: "radio",
    value: "Manhã",
    name: "periodo",
    id: "manha",
    label: "Manhã",
    labelClass: "form-check-label",
    labelFor: "manha",
    checked: false,
  },
  {
    class: "form-check-input",
    type: "radio",
    value: "Tarde",
    name: "periodo",
    id: "tarde",
    label: "Tarde",
    labelClass: "form-check-label",
    labelFor: "tarde",
    checked: false,
  },
];

export const aceitarFazerArray = [
  {
    class: "form-check-input",
    type: "radio",
    value: "veterinario-parceiro",
    name: "oQueAceitariaFazer",
    id: "veterinario-parceiro",
    label: "Veterinario Parceiro",
    labelClass: "form-check-label",
    labelFor: "veterinario-parceiro",
    checked: false,
  },
  {
    class: "form-check-input",
    type: "radio",
    value: "limpeza",
    name: "oQueAceitariaFazer",
    id: "limpeza",
    label: "Limpeza",
    labelClass: "form-check-label",
    labelFor: "limpeza",
    checked: false,
  },
  {
    class: "form-check-input",
    type: "radio",
    value: "venda-bazares",
    name: "oQueAceitariaFazer",
    id: "venda-bazares",
    label: "Venda nos bazares",
    labelClass: "form-check-label",
    labelFor: "venda-bazares",
    checked: false,
  },
  {
    class: "form-check-input",
    type: "radio",
    value: "producao-bolos-doces",
    name: "oQueAceitariaFazer",
    id: "producao-bolos-doces",
    label: "Produção de bolos e doces p/ vender ",
    labelClass: "form-check-label",
    labelFor: "producao-bolos-doces",
    checked: false,
  },
  {
    class: "form-check-input",
    type: "radio",
    value: "ir-comercios-ajuda",
    name: "oQueAceitariaFazer",
    id: "ir-comercios-ajuda",
    label: "Ir nos comércios pedir ajuda",
    labelClass: "form-check-label",
    labelFor: "ir-comercios-ajuda",
    checked: false,
  },
];

export const listadedenuncias = [
  {
      id:"1",
      rua: "R. das Margaridas ",
      numero: "123",
      cep: "19060-260",
      cidade: "Presidente Prudente",
      observacoes: "Sem comida",
      tel: ""
  },
  {   
      id:"2",
      rua: "R. das Aboboras",
      numero: "321",
      cep: "19060-120",
      cidade: "Pres. Prudente",
      observacoes: "Não tem onde dormir",
      tel: "(18)99999-9999"
  },
];

export function ObjectEmptyValue(array) {
  for (let chave in array) {
    if (array.hasOwnProperty(chave) && array[chave] === "") {
      return false;
    }
  }
  return true;
}

export function onChangeInput(name, value, setFormInput, formInput) {
  setFormInput({ ...formInput, [name]: value });
}


///matheus
export const BASE_URL = "http://localhost:4000";

export const fetchData = async (url) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`Erro ao buscar dados: ${response.status}`);
  }
  const responseData = await response.json();
  return responseData;
};

export const postData = async (url, data) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Erro ao adicionar dados: ${response.status}`);
  }
  const responseData = await response.json();
  return responseData;
};

export async function putData (url, data) {
  try {
    await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(()=> alert('Entrada editada com sucesso!'))
  } catch (error) {
    console.log('Erro na requisição:', error);
  }
}

export const deleteData = async (url) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Erro ao excluir dados: ${response.status}`);
  }
};

export async function getEntradas() {
  let aux = [];
  await fetch(BASE_URL+'/entradas', {
      method: "GET",
  })
      .then((data) => data.json())
      .then((res) => (aux = res))
      .catch(e => console.log(e));

  return aux;
}