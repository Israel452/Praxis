const botaoRegistrar = document.getElementById('botaoRegistrar')
const botaoExcluir = document.getElementById('botaoExcluir')
const container = document.getElementById('container')

botaoRegistrar.addEventListener('click',seMostrar)
botaoRegistrar.addEventListener('click',adicionarParagrafo)
botaoExcluir.addEventListener('click',seMostrar)
botaoExcluir.addEventListener('click',excluirParagrafo)

function seMostrar(){

    console.log(this)
}

const paragrafo = document.createElement('p')
paragrafo.classList.add('paragrafo')
paragrafo.innerHTML = 'Bolinha de queijo'
container.appendChild(paragrafo)


const registrarNome = document.getElementById ('registrarNome')
registrarNome.addEventListener('click',seMostrar)

function adicionarParagrafo(){

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('paragrafo')
    paragrafo.textContent = registrarNome.value
    container.appendChild(paragrafo)
}

function excluirParagrafo(){

    console.log(this)
    this.parentNode.removeChild(this)
    
}
    






























// let calculador = {

//     soma: (a,b)=>{
//         return a+b;
//     },


//     subtração: (a,b)=>{
//         return a-b;
//     },

//     divisão: (a,b)=>{
//         return a/b;
//     },

//     multiplicação: (a,b)=>{
//         return a*b;
//     },

// }




