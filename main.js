const texto = document.querySelector("input")
const textArea = document.querySelector("textarea")
let arrayEncriptador =[['a','@'],['e','2'],['i','&'],['o','||'],['u','y'],
['b','6'],['d','9'],['g','#'],['i','1'],
['k','/'],['ñ','%'],['p','$'],['q','?']
,['r','x'],['v','<'],['z','>']

]

function copiar(){
    const copiarTexto = textArea
    copiarTexto.select()
    copiarTexto.setSelectionRange(0,999)
    navigator.clipboard.writeText(copiarTexto.value)
    alert("El texto ha sido copiado" + copiarTexto.value)
}

function coDificar(){
    const textoEncriptado = encriptar(texto.value)
    textArea.value = textoEncriptado
   // console.log(textoEncriptado)
}
function deCodificar(){
    const textoEncriptado = desEncriptar(textArea.value)
    textArea.value = textoEncriptado
 
}
function encriptar(textoEncriptar){
    
    textoEncriptar = textoEncriptar.toLowerCase()
    for(let i=0; i <arrayEncriptador.length; i++){
        if(textoEncriptar.includes(arrayEncriptador[i][0])){
            textoEncriptar = textoEncriptar.replaceAll(arrayEncriptador[i][0], arrayEncriptador[i][1])
        }
    }
    return textoEncriptar
}
function desEncriptar(textoEncriptar){
    
    textoEncriptar = textoEncriptar.toLowerCase()
    for(let i=0; i <arrayEncriptador.length; i++){
        if(textoEncriptar.includes(arrayEncriptador[i][1])){
            textoEncriptar = textoEncriptar.replaceAll(arrayEncriptador[i][1], arrayEncriptador[i][0])
        }
    }
    return textoEncriptar
}
