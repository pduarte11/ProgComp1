function calcular(){
    // declaração variável sem tipo
   let soma, mascote, leite, homenagem, kit, suplemento, equipe
   // recupera o valor da ação social digitado
   acaoSocial = document.getElementById("acaoSocial").value
   // recupera o valor da homenagem digitado
    homenagem = document.getElementById("homenagem").value
   // recupera a qtde de litros de leite
   leite = document.getElementById("leite").value
   // recupera a qtde de kits 
   kit = Number(document.getElementById("kit").value)
   // recupera a cor da equipe
   equipe = document.getElementById("equipe").value
    // recupera a qtde de latas de suplemento
   suplemento = document.getElementById("suplemento").value
   let pontosKitSupl = 0 // guarda pontuação de kit + supl
   if (equipe == "Laranja"){
       // equipe é laranja
       if (kit >= 97 && suplemento >= 49) {
           pontosKitSupl = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
       }
       else if (kit >= 78 && suplemento >= 39){
           pontosKitSupl = 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
       }
       else if (kit >= 49 && suplemento >= 25) {
           pontosKitSupl = 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15)
       }
       else if (kit >= 19 && suplemento >= 10){
           pontosKitSupl = 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15)
       }
       if(sangue >= 49){
            soma = soma + 2500 +((sangue - 49) * 20)
       }
       else{
        soma = soma + (sangue * 20)
       }
   }
    else if (equipe == "Preta"){
        if (kit >= 97 && suplemento >= 49) {
            pontosKitSupl = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78 && suplemento >= 39){
            pontosKitSupl = 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >= 25) {
            pontosKitSupl = 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 19 && suplemento >= 10){
            pontosKitSupl = 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15)
        }
        if(sangue >= 49){
            soma = soma + 2500 +((sangue - 49) * 20)
        }
        else{
        soma = soma + (sangue * 20)
        }
    }
  
   soma = soma + pontosKitSupl
  
   // devolve o resultado para o HTML
   document.getElementById("soma").innerHTML = `A soma é ${soma}`
}