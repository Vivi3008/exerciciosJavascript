function contar(){

var ini_input =document.querySelector('input#ini')
var fim_input = document.querySelector('input#fim')
var passo_input = document.querySelector('input#passo')
var res = document.querySelector('div#res')

    if (ini_input.value.length==0 || fim_input.value.length==0)
        alert('Impossível contar!')
    else 
      res.innerHTML='Contando: '
      var i =Number(ini_input.value)
      var f =Number(fim_input.value)
      var p =Number(passo_input.value)
     
      if (p==0){
          alert('Passo invalido, considerando passo 1')
          
       if (i<f){
        for (let c=i; c<=f; c++) {
            res.innerHTML+= `${c} \u{1F449}`
        }  res.innerHTML+=`\u{1F3C1}`
       }else if(i>f){
         for (let c=i; c>=f; c--) {
             res.innerHTML+= `${c} \u{1F449}`
         } res.innerHTML+=`\u{1F3C1}`
       }
      } else {
      if (i<f){
       for (let c=i; c<=f; c+=p) {
           res.innerHTML+= `${c} \u{1F449}`
       } res.innerHTML+=`\u{1F3C1}`
      }else if(i>f){
        for (let c=i; c>=f; c-=p) {
            res.innerHTML+= `${c} \u{1F449}`
        } res.innerHTML+=`\u{1F3C1}`
      }
    }
 }

 