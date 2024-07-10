var nome = ' allAn Arauj o'
function primeiroNome(nome){
    let a = nome.slice(1,2).toUpperCase()
    let b = nome.slice(2,6).toLowerCase()
    return a+b
}
function segundoNome(nome){
    let b = nome.slice(7).replaceAll(" ","")
    return b
}
console.log(primeiroNome(nome))
console.log(segundoNome(nome))