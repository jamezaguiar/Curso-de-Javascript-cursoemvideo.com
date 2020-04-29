let num = window.document.getElementById('txtnum')
let tab = window.document.getElementById('seltab')

function calcTabuada() {
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = ''
        let numero = Number(num.value)
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            tab.appendChild(item)
        }
    }
}

function limpar() {
    tab.innerHTML = `<option>Digite um número acima</option>`
}