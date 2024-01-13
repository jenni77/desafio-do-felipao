//entrada
const nomeHeroi = ("Nutella")
let nivelDoHeroi = 10001
let rankHeroi = ""
//...
if(nivelDoHeroi > 0 && nivelDoHeroi <= 1000)
{
    rankHeroi = ("Ferro.")
}
else if(nivelDoHeroi > 1000 && nivelDoHeroi<=2000)
{
    rankHeroi = ("Bronze.")
}
else if(nivelDoHeroi > 2000 && nivelDoHeroi<=5000)
{
    rankHeroi = ("Prata.")
}
else if(nivelDoHeroi > 5000 && nivelDoHeroi<=7000)
{
    rankHeroi = ("Ouro.")
}
else if(nivelDoHeroi > 7000 && nivelDoHeroi<=8000)
{
    rankHeroi = ("Platina.")
}
else if(nivelDoHeroi > 8000 && nivelDoHeroi<=9000)
{
    rankHeroi = ("Ascendente.")
}
else if(nivelDoHeroi > 9000 && nivelDoHeroi<=10000)
{
    rankHeroi = ("Imortal.")
}
else if(nivelDoHeroi> 10000)
{
    rankHeroi = ("Radiante")
}
//console
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankHeroi)
