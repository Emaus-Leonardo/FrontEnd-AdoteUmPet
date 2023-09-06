const apiProdutos = "https://129.146.68.51/aluno12-pfsii/produto";
const apiCategoria = "https://129.146.68.51/aluno12-pfsii/categoria";

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
