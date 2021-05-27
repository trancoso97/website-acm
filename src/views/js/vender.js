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

function AddItem() {
    let ref = document.getElementById('ref').value
    let quant = document.getElementById('quant').value
    let preco = document.getElementById('preco').value    

    let section = document.getElementById('lista-itens')
    let p = document.createElement('P')
    p.className = 'item'
    p.innerHTML = `${ref}      |       ${quant}       |       R$${preco}`
    section.appendChild(p)
}


