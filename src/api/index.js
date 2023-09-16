const apiProdutos = "https://129.146.68.51/aluno12-pfsii/produto";
const apiCategoria = "https://129.146.68.51/aluno12-pfsii/categoria";
const apiTipo = "https://129.146.68.51/aluno12-pfsii/tipo";
const apiAdocao = "https://129.146.68.51/aluno12-pfsii/adocao";

//================== API-Produtos ==================//

export async function getProdutos() {
  let aux = [];
  await fetch(apiProdutos, {
    method: "GET",
  })
    .then((data) => data.json())
    .then((res) => (aux = res))
    .catch(e => console.log(e));

  return aux;
}

export async function handleSubmit(produto) {
  console.log(produto)
  await fetch(apiProdutos, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(produto)
  })
    .then(() => alert('Produto Cadastrado com sucesso!'))
}

export async function editarProdutos(produto) {
  console.log(produto)
  try {
    await fetch(`${apiProdutos}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    })
      .then(() => alert('Produto editado com sucesso!'))
  } catch (error) {
    console.log('Erro na requisição:', error);
  }
}

export async function excluirProduto(codigo) {
  try {
    await fetch(`${apiProdutos}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ codigo: codigo }),
    });

    alert("Produto deletado com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir o produto:", error);
    throw error;
  }
}

//----------------------------- API Categorias ---------------------------------//

export async function getAllCategorias() {
  let aux = [];
  await fetch(apiCategoria, {
    method: "GET",
  })
    .then((data) => data.json())
    .then((res) => (aux = res))
    .catch(e => console.log(e));

  return aux;
}

export async function createRegisterCategoria(categoria) {
  console.log(categoria)
  await fetch(apiCategoria, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(categoria)
  })
    .then(() => alert('Categoria Cadastrada com sucesso!'))
}

export async function editRegisterCategoria(categoria) {
  console.log(categoria)
  try {
    await fetch(`${apiCategoria}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoria),
    })
      .then(() => alert('Categoria editado com sucesso!'))
  } catch (error) {
    console.log('Erro na requisição:', error);
  }
}

export async function deleteCategoriaP(id) {
  try {
    await fetch(`${apiCategoria}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    alert("Categoria deletado com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir o categoria:", error);
    throw error;
  }
}

export async function consultarCategoriaPorId(id) {
  try {
    const response = await fetch(`${apiCategoria}/${id}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Erro ao consultar a categoria: ${response.statusText}`);
    }

    const categoria = await response.json();
    return categoria;
  } catch (error) {
    console.error('Erro ao consultar a categoria:', error);
    throw error;
  }
}


//----------------------------- API Tipo ---------------------------------//

export async function getAllTipo() {
  let aux = [];
  await fetch(apiTipo, {
    method: "GET",
  })
    .then((data) => data.json())
    .then((res) => (aux = res))
    .catch(e => console.log(e));

  return aux;
}

export async function createRegisterTipo(tipo) {
  console.log(tipo)
  await fetch(apiTipo, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tipo)
  })
    .then(() => alert('Tipo Cadastrada com sucesso!'))
}

export async function editRegisterTipo(tipo) {
  console.log(tipo)
  try {
    await fetch(`${apiTipo}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tipo),
    })
      .then(() => alert('Tipo editado com sucesso!'))
  } catch (error) {
    console.log('Erro na requisição:', error);
  }
}

export async function deleteTipo(id) {
  try {
    await fetch(`${apiTipo}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    alert("Categoria deletado com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir o tipo:", error);
    throw error;
  }
}

//================== API-Adoção ==================//

export async function getAdocao() {
  let aux = [];
  await fetch(apiAdocao, {
    method: "GET",
  })
    .then((data) => data.json())
    .then((res) => (aux = res))
    .catch(e => console.log(e));

  return aux;
}

export async function handleSubmitAdocao(adocao) {
  console.log(adocao)
  await fetch(apiAdocao, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(adocao)
  })
    .then(() => alert('Produto Cadastrado com sucesso!'))
}

export async function editarAdocao(adocao) {
  console.log(adocao)
  try {
    await fetch(`${apiAdocao}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adocao),
    })
      .then(() => alert('Produto editado com sucesso!'))
  } catch (error) {
    console.log('Erro na requisição:', error);
  }
}

export async function excluirAdocao(codigo) {
  try {
    await fetch(`${apiAdocao}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ codigo: codigo }),
    });

    alert("Produto deletado com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir o produto:", error);
    throw error;
  }
}
