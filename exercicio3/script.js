const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair'
const novafrase = frase.replace ( "verde", "rosa"). replace ("azul", "laranja")
console.log(novafrase)

let verde = novafrase.includes ("verde")
let laranja = novafrase.includes("laranja")
console.log(`Possui a cor verde?${verde} 
Possui a cor laranja?${laranja}`)
