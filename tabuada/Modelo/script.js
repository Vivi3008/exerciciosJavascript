let num = document.getElementById('num')
let select = document.getElementById('sel')

function tabuada(){
 
    select.innerHTML=""

    if (num.value.length=="") alert('Por favor digite um número!')
    else{
        let n = Number(num.value)
        let res = 0

     for (let i=1; i<=10; i++){
        res = i*n
        select.innerHTML+=`<option>${n} x ${i} = ${res}</option>` 
     }
    }
}
function limpar(){
    num.value=""
    select.innerHTML=""
    
}