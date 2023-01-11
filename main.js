// Variáveis

const screen1 =  document.querySelector(".screen1")
const screen2 =  document.querySelector(".screen2")

const btnOpenCookie = document.querySelector("#btnOpenCookie")
const btnDoAgain = document.querySelector("#btnDoAgain")


// Eventos

btnOpenCookie.addEventListener('click', handleCookieClick)
btnDoAgain.addEventListener('click', handleResetClick)


// Funções

function handleCookieClick(){

    let day = new Date()
    let weekDay = day.getDay()


    switch(weekDay) {
        case 0:
        toogleScreen()
        document.querySelector(".screen2").querySelector("p") // Uso da aplicação document da DOM e não da variável screen2 para fins didáticos.
        .innerText = 'Domingo é dia de renovar as energias. Que nessa semana você colha o melhor de seus frutos!'
        break

        case 1:
        toogleScreen()
        screen2.querySelector('p').innerText = 'Sorte de hoje: só há uma seguda-feira na semana!'
        break
        
        case 2:
        toogleScreen()
        screen2.querySelector('p').innerText = 'Nesta terça-feira, quando faltar sorte, faça sobrar atitude. O azar morre de medo de pessoas determinadas!'
        break

        case 3:
        toogleScreen()
        screen2.querySelector('p').innerText = 'Nesta quarta-feira, busque olhar para si e seguir seus sonhos. Eles conhecem o caminho!'
        break

        case 4:
        toogleScreen()
        screen2.querySelector('p').innerText = 'Hoje é quinta-feira, e a semana está quase acabando. Não importa que você vá devagar, desde que não pare.'
        break

        case 5:
        toogleScreen()
        screen2.querySelector('p').innerText = 'Faça o melhor que puder e seja o maior que puder ser. O resultado virá na mesma proporção de seu esforço. Uma ótima sexta-feira!'
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

function toogleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}