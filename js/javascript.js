let PratoSelecionado = null 
let BebidaSelecionado = null
let SobremesaSelecionado = null

function fechamento () {
let finalizado = (PratoSelecionado !== null && BebidaSelecionado !== null && SobremesaSelecionado !== null)
console.log(finalizado)

let botao = document.querySelector("button")
    if (finalizado === true){
       
        botao.classList.add("habilitado")
        botao.innerHTML = "Fechar pedido"
    }
    

}

function ClicouPrato (selecionado) {
    let procura = document.querySelector(".comida .aplicado")
    if (procura !== null) {
        procura.classList.remove("aplicado")
    }
    selecionado.classList.add("aplicado")  
           
    PratoSelecionado = selecionado  

    fechamento()
}   

function ClicouBebida (selecionado) {
     let procura = document.querySelector(".bebida .aplicado")
     if (procura !== null) {
         procura.classList.remove("aplicado")
     }
     selecionado.classList.add("aplicado")  
     
     BebidaSelecionado = selecionado  

     fechamento()
 } 

 function ClicouSobremesa (selecionado) {
     let procura = document.querySelector(".sobremesa .aplicado")
     if (procura !== null) {
         procura.classList.remove("aplicado")
     }
     selecionado.classList.add("aplicado")    
     
     SobremesaSelecionado = selecionado  

     fechamento()
    }  

function EnviarZap () {
    
    
    let comida= document.querySelector(".comida .aplicado .prato");
        let nome_comida = comida.innerText;

    let bebida = document.querySelector(".bebida .aplicado .prato");
        let nome_bebida = bebida.innerText;

    let sob = document.querySelector(".sobremesa .aplicado .prato");
        let nome_sob = sob.innerText;

    let valor_aplicado_1 = document.querySelector(".comida .aplicado .valor");
    let valor1 = parseFloat( valor_aplicado_1.innerText.replace("R$","").replace(",","."));
    let valor_aplicado_2 = document.querySelector(".bebida .aplicado .valor");
    let valor2 = parseFloat( valor_aplicado_2.innerText.replace("R$","").replace(",","."));
    let valor_aplicado_3 = document.querySelector(".sobremesa .aplicado .valor");
    let valor3 = parseFloat( valor_aplicado_3.innerText.replace("R$","").replace(",","."));



let valor_total = valor1 + valor2 + valor3;
    console.log(valor_total.toFixed(2))


   let texto_pedido = "Olá, gostaria de fazer o pedido:\n" + "- Prato: " + nome_comida  +"\n- Bebida:" + nome_bebida + "\n- Sobremesa:" + nome_sob  + "\n Total: R$" + valor_total.toFixed(2) ;
    
    
    let URL = "https://wa.me/?text=" + encodeURIComponent(texto_pedido)
    window.open(URL);



}
        