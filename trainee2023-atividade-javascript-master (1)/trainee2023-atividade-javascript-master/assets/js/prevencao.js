function garantia(){
    let buttons = document.querySelectorAll('.btn')
    for(let item of buttons){
        item.addEventListener('click', prevencao);
    }
}


function prevencao(e){
    e.preventDefault()
};

window.onload = garantia()



//:------ Divisoria_1 ------:
const Register_button = document.getElementById('Register_button')
const Show_button = document.getElementById('Show_button')


const Table_form = document.getElementById('Table_form')


const Reg_nome = document.getElementById('Reg_nome');
const Reg_cpf = document.getElementById('Reg_cpf');
const Reg_email = document.getElementById('Reg_email');
const Reg_telefone = document.getElementById('Reg_telefone');

// Register_button.addEventListener('click', seMostrar)


//:------ Divisoria_2 ------:
Register_button.addEventListener('click', ()=>{

    const Line = addLinha()
    Table_form.appendChild(Line)
})


//:------ Divisoria_3 ------:
// function seMostrar(){

//     console.log(this)
// }

function addLinha(){
    
    const Line = document.createElement('tr')
    const THead = document.createElement('th')

        contagem++
        for(x=0; x<=4; x++){
            
            const Array = [contagem, Reg_nome.value,Reg_cpf.value,Reg_email.value,Reg_telefone.value,];
            let newLine = Array[x];
            
            Td_Line = document.createElement('td')
            Td_Line.innerHTML = newLine
            Line.appendChild(Td_Line)
        }
        
        Line.appendChild(THead)
        return Line
    }
    
    let contagem = 0
// aparece um bloco a mais na tabela pq?

Show_button.addEventListener('click', sumidao)

function sumidao(){

    const box = document.getElementById('box')
    box.classList.toggle('sumir')
}
// não to conseguindo fazer a tabela sumir 






/*
    Explicando esse script

    Como está com Bootstrap, ao clicar nos botões, a página recarrega, então para previnir que a página faça isso, coloquei para que todos os botões, ao serem clicados não reiniciem a página.

    Assim vocês podem fazer todas alterações sem perder dados os dados no console.

*/


