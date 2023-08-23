const apiProdutos = "http://localhost:4001/produto";
export const urLBase = "http://localhost:4000";

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
      .then(()=> alert('Produto Cadastrado com sucesso!'))
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
      .then(()=> alert('Produto editado com sucesso!'))
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
