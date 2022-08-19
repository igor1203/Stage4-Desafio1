let numberOne = Number(prompt("Insira um número: "))
let numberTwo = Number(prompt("Insira outro número: "))


soma = numberOne + numberTwo
sub = numberOne - numberTwo
mult = numberOne * numberTwo
div = (numberOne / numberTwo).toFixed(2)
resto = numberOne % numberTwo

alert(`Numeros inseridos: ${numberOne}, ${numberTwo}.`)
alert(`O resultado da soma é: ${soma}.`)
alert(`O resultado da subtração é: ${sub}.`)
alert(`O resultado da multiplicação é: ${mult}.`)
alert(`O resultado da divisão é: ${div}.`)
alert(`O resultado do resto é: ${resto}.`) 


if(soma % 2 === 0) {
  alert(`A soma dos números é ${soma}. É um número par.`)
} else {
  alert(`A soma dos números é ${soma}. É um número ímpar. `)
}

if(numberOne === numberTwo) {
  alert("Os números inseridos são iguais")
}else {
  alert("Os números inseridos são diferentes")
}