// Variáveis

const screen1 =  document.querySelector(".screen1")
const screen2 =  document.querySelector(".screen2")

const btnOpenCookie = document.querySelector("#btnOpenCookie")
const btnDoAgain = document.querySelector("#btnDoAgain")

const domingo = [
    'Se estiver difícil, é um sinal de que está no caminho certo!',
    'Domingo é dia de renovar as energias. Que nessa semana você colha o melhor de seus frutos!',
    'Comece onde você está. Use o que você tem. Faça o que você pode!'
]

const segunda = [
    'Nossos fracassos podem ser mais frutíferos que nossos êxitos!',
    'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
    'Sorte de hoje: só há uma seguda-feira na semana!'
]

const terça = [
    'Não coloque limite em seus sonhos; coloque fé!',
    'Não importa o que você decidir. Importa se te faz feliz!',
    'Nesta terça-feira, quando faltar sorte, faça sobrar atitude. O azar morre de medo de pessoas determinadas!'
]

const quarta = [
    'Foque na solução, e não no problema!',
    'Se não puder fazer tudo, faça tudo o que puder.',
    'Nesta quarta-feira, busque olhar para si e seguir seus sonhos. Eles conhecem o caminho!'
]

const quinta = [
    'O segredo não é ter tudo o que você quer, mas amar tudo o que você tem!',
    'As coisas não se tornam mais fáceis. Você é que se torna mais experiente!',
    'Hoje é quinta-feira, e a semana está quase acabando. Não importa que você vá devagar, desde que não pare.'
]

const sexta = [
    'Um dia tudo parecerá pequeno, pois tuas conquistas te farão enorme!',
    'Não haverá borboletas se a vida não passar por longas e silenciosas metamorfoses.',
    'Faça o melhor que puder e seja o maior que puder ser. O resultado virá na mesma proporção de seu esforço. Uma ótima sexta-feira!'
]

// Eventos

btnOpenCookie.addEventListener('click', handleCookieClick)
btnDoAgain.addEventListener('click', handleResetClick)

document.addEventListener('keydown', 
    
    function(event) {
    if(event.key == 'Enter' && screen2.classList.contains('hide')){
        handleCookieClick()
    } else if(event.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }

} )

// Funções

function handleCookieClick(){

    let day = new Date()
    let weekDay = day.getDay()
    let day_name


    switch(weekDay) {
        case 0:
            day_name = domingo
            dayMessage(day_name)
            toogleScreen()
        break

        case 1:
            day_name = segunda
            toogleScreen()
            dayMessage(day_name)
        break
        
        case 2:
            day_name = terça
            toogleScreen()
            dayMessage(day_name)
        break

        case 3:
            day_name = quarta
            toogleScreen()
            dayMessage(day_name)
        break

        case 4:
            day_name = quinta
            toogleScreen()
            dayMessage(day_name)
        break

        case 5:
            day_name = sexta
            toogleScreen()
            dayMessage(day_name)
        break

        case 6:
        toogleScreen()
        screen2.querySelector('p').innerText = 'Aja como se tudo que você faz fizesse diferença. Porque faz! Aproveite seu sábado para descansar!'
        break
       
    }
     
}


function handleResetClick (){
    toogleScreen()
    alert('Você abriu o seu biscoito da sorte de hoje. Aguarde até amanhã para receber outra mensagem!')
}

function dayMessage(day){
    let randomNumber = Math.floor(Math.random() * 3)
    screen2.querySelector('p').innerText = day[randomNumber]
}

function toogleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}