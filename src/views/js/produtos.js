//PEGAR CADASTROS NO BACKEND
async function listar() {
    let response = await fetch('http://localhost:999/produtos/listar')
    let data = await response.json()
    console.log(data)
    data.produtos.forEach(obj => {
        insertRow(obj.ref, obj.desc, obj.quant, obj.custo, obj.preco)
    });
}
//INSERIR LINHAS NA TABELA 
function insertRow(ref, desc, quant, custo, preco) {
    var table = document.getElementById('cadastros').insertRow(-1)
    var x = table.insertCell(0)
    var y = table.insertCell(1)
    var z = table.insertCell(2)
    var c = table.insertCell(3)
    var v = table.insertCell(4)
    x.innerHTML = ref
    y.innerHTML = desc
    z.innerHTML = quant      
    c.innerHTML = 'R$'+custo      
    v.innerHTML = 'R$'+preco      
}