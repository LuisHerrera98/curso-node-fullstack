let heroes = [
    {
        nombre:"batman",
        edad:30,
        tipo:"usuario"
    },{
        nombre:"superman",
        edad:28,
        tipo:"administrador"
    },{
        nombre:"robin",
        tipo:"adminitrador"
    }
]
//CONDICIONAL IF
if(heroes[1].tipo == "administrador"){

   // console.log("eres administrador")
}else{
    //console.log("no eres administrador")
}
//CONDICIONAL ELSE IF

if(heroes[0].tipo == "administrador"){
    console.log("puedes pasar");
}else if(heroes[1].nombre == "robin"){
    console.log("hola robin")
}else if(heroes[0].nombre == "superman"){
    console.log("hola superman")
}else{
    console.log("no se quien sos");
}


//middelwares




