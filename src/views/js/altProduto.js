var data

//BUSCAR PRODUTOS DO BANCOS DE DADOS
async function buscarProdutos(index) {
    let response = await fetch('http://localhost:999/produtos/listar')
    data = await response.json()
    if (index = 1) {
        data.produtos.forEach(produto => {
            insertOption(produto.ref)
        })
    } else {
        return data.produtos
    }
}

//INSERIR OPTIONS NO SELECT BOX
function insertOption(ref) {
    let y = document.getElementById('ref')
    let x = document.createElement('OPTION');
    x.setAttribute('id', ref);
    x.innerHTML = ref
    y.appendChild(x)
}

//PREENCHER DADOS QUANDO OPTION FOR SELECIONADA
async function preencherDados() {
    let ref = document.getElementById('ref').selectedIndex
    //retirar 1 do indice pois temos um option vazio
    ref--
    let produtos = data.produtos
    let desc = document.getElementById('desc').value = produtos[ref].desc
    let quant = document.getElementById('quant').value = produtos[ref].quant
    let custo = document.getElementById('custo').value = produtos[ref].custo
    let preco = document.getElementById('preco').value = produtos[ref].preco
}