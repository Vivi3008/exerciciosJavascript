let input =  document.getElementById('input')
let btn = document.getElementById('btn')
let ul =  document.getElementById('ul')



var tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || []

function renderTodos()
{
    ul.innerHTML=""
    for (t of tarefas){
        let li = document.createElement('li')
        let texto = document.createTextNode(t)
        let a = document.createElement('a')
        let txt = document.createTextNode(' OK')
        
        a.setAttribute('href','#')
        let pos = tarefas.indexOf(t)
        a.setAttribute('onclick', 'deleteTodos('+pos+')')
              
        //cria o elemento da lista 
        ul.appendChild(li)
        li.appendChild(texto)
         //cria o link excluir
        li.appendChild(a)
        a.appendChild(txt)
    }
}

renderTodos()
console.log(tarefas)
function addTodos()
{
    let ipt = input.value
    tarefas.push(ipt)
    input.value=""
    renderTodos()
    saveToStorage()
}
function deleteTodos(pos)
{
    tarefas.splice(pos,1)
    renderTodos()
    saveToStorage()

}
function saveToStorage()
{
    localStorage.setItem('list_tarefas',JSON.stringify(tarefas))
}