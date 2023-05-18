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



//:------ Buttons ------:
const Register_button = document.getElementById('Register_button')
const Show_button = document.getElementById('Show_button')

// :------ Forms ------:
const Form_register = document.getElementById('Form_register')
const Form_revise = document.getElementById('Form_revise')

// :------ Table ------:
const Table_form = document.getElementById('Table_form')

// :------ Infos ------:
const Reg_nome = document.getElementById('Reg_nome');
const Reg_cpf = document.getElementById('Reg_cpf');
const Reg_email = document.getElementById('Reg_email');
const Reg_telefone = document.getElementById('Reg_telefone');

// Register_button.addEventListener('click', seMostrar)


//:------ Events ------:
Register_button.addEventListener('click', ()=>{

    const Line = addLinha()
    Table_form.appendChild(Line)
})

Show_button.addEventListener('click', Toggle_table)

Master_table.addEventListener('click', function(){

    console.log ('OK')
    console.log(this)
})

//:------ Functions ------:
function addLinha(){
    

    const Line = document.createElement('tr')
    const THead = document.createElement('th')
    THead.innerText = contagem
    contagem++
    Line.appendChild(THead)

        for(x=0; x<4; x++){
            
            const Array = [Reg_nome.value,Reg_cpf.value,Reg_email.value,Reg_telefone.value,];
            let newLine = Array[x];
            
            Td_Line = document.createElement('td')
            Td_Line.innerHTML = newLine
            Line.appendChild(Td_Line)
        }
        
        return Line
    }
    
    let contagem = 1

function Toggle_table(){

    var display = document.getElementById('Master_table').style.display;
        if(display == "none")
            document.getElementById('Master_table').style.display = 'block';
        else
            document.getElementById('Master_table').style.display = 'none';
}


function Line_selection(){

    if(Master_table = 'click')
    document.getElementById('Form_revise').classList.remove('esconder')
}

// if(condition , then [, else])




// const formulario__corrigir = document.querySelector('Form_revise')

// if (Master_table == 'funcional'){
// formulario__corrigir.classList.remove(esconder)}


/*
    Explicando esse script

    Como está com Bootstrap, ao clicar nos botões, a página recarrega, então para previnir que a página faça isso, coloquei para que todos os botões, ao serem clicados não reiniciem a página.

    Assim vocês podem fazer todas alterações sem perder dados os dados no console.

*/


