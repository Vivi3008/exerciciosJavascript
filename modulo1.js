//exercicio 1
var endereco = {
    rua: 'Rua São Paulo',
    numero: 1234,
    bairro: 'Jardim Petrópolis',
    cidade: 'Goiânia',
    uf:'GO'
}

console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro},
na rua "${endereco.rua}" com o n ${endereco.numero}.`)


//exercicio 2
function pares(x,y)
{
    pares=0
    for (let c=x;c<=y;c++)
    { 
        if (c%2==0)
         pares++ 
    }
    return pares
}

console.log(pares(1,5))

//exercicio 3
var habilidades = ["ReactJs", "React Native","Javascript","php"]

function temHabilidades(skills)
{
    let idx = skills.indexOf("Javascript")
    if (idx!=-1) return true
    else return false

}
console.log(temHabilidades(habilidades))

//exercicio 4
function experiencia(anos)
{
    if (anos<=1) return "Iniciante"
      else if(anos<=3) return "Intermediário"
        else if(anos<=6) return "Avançado"
          else return "Jedi Master"
}

console.log(experiencia(8))

//exercicio 5
var usuarios = [
    { nome: 'Viviane',
      habilidades:['Javascript','Html5','Css3']
    },
    {
      nome:'Giovanna',
      habilidades:['Scratch','Youtube','Desenhos']
    }
]   

  for (c of usuarios)
  {     
    console.log(`A ${c.nome} possui as habilidades: ${c.habilidades.join(',')}.` )
  }
 