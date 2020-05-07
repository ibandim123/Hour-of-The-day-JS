

function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')


//Declaração de hora de acordo com o relógio
var data = new Date()
var hora = data.getHours()


msg.innerHTML = 'Agora são '+[hora]+' horas.'

//Quando for dia
if (hora>=0 && hora <=12) {
    
    img.src ="dia.jpg"
    document.body.style.background ="#00FF00"

//Quando for de tarde    
}else if(hora>=12 && hora<=18){
    img.src = "tarde.jpg"
    document.body.style.background ="#20B2AA"

}else{
    img.src = "noite.jpg"
    document.body.style.background ="#696969"


}

}