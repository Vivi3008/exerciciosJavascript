
function carregar(){
var msg = window.document.querySelector('div#msg')
var img = window.document.querySelector('img#imagem')
var d = window.document.querySelector('div#foto')
var data = new Date()
var hora= data.getHours()
var minuto=data.getMinutes()
msg.innerHTML=`Agora são ${hora} horas e ${minuto} minutos.`

if (hora<=12) {
    img.src='manha.png'
    d.innerHTML+='<p>Bom dia!</p>'
    document.body.style.background='#a8c1a8'
    
} else if(hora<=18) {
    img.src='tarde.png'
    d.innerHTML+='<p>Boa tarde!</p>'
    document.body.style.background='#a87562'
} else{
    img.src='noite.png'
    d.innerHTML+='<p>Boa noite!</p>'
    document.body.style.background='#165291'
}
  
}