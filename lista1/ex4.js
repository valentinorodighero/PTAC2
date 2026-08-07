 let produtos = [
    { id: 1, nome: 'Caneta', preco: 2.5 },
    { id: 2, nome: 'Caderno', preco: 25 },
    { id: 3, nome: 'Lápis', preco: 1.2 }
]

function buscarProduto(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const produto = produtos.find(p => p.id === id);
            resolve(produto);
        }, 300);
    });
}

async function exibirProduto(id) {
    const produto = await buscarProduto(id);
    console.log(produto);
}

exibirProduto(2);