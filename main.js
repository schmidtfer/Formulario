const form = document.getElementById('forms')

form.addEventListener('submit', function (event){
    event.preventDefault()
})

function compararNumeros() {
let numeroA= document.querySelector('input#numeroA')
let numeroB= document.querySelector('input#numeroB')
let res=  document.querySelector('res') 
let nA= Number (numeroA.value)
let nB= Number (numeroB.value)
    if(nA > nB) {
        document.getElementById('res').innerHTML = 'Tente novamente!'
    } else if (nA < nB) {
        document.getElementById('res').innerHTML = 'Parabéns, você conseguiu!' 
    }
}
