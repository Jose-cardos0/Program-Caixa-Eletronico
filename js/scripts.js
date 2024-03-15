//SELEÇÃO DE ELEMENTOS NO HTML
const frm = document.querySelector(".form");
const saque = document.querySelector("#saque")
const resp1 = document.querySelector(".resp1");
const resp2 = document.querySelector(".resp2");
const resp3 = document.querySelector(".resp3");


//EVENTO DE SUBMIT NO FORMULARIO PEGANDO O VALOR
frm.addEventListener("submit", (e) => {

    e.preventDefault();  //EVITAR RECARREGAR O FORMULARIO AO ENVIAR 

    const saque = Number(frm.fixed.value)   //PEGAR O VALOR ESCRITO PELO USUÁRIO NO SUBMIT
    if(saque % 10 != 0 ) {
        alert("Valor inválido para notas disponíveis (R$10, 50, 100)");
        frm.fixed.focus();  //CASO O VALOR NÃO SEJA COMPATÍVEL COM O CALCULO DE RESTO, ELE FOCA NO INPUT E ALERTA
        return  //CASO O PASSO ACIMA SEJA TRUE, ELE RETORNA PARA O PONTO INICIAL QUE É O CONST SAQUE NUMBER
    }

    const notasCem = Math.floor(saque / 100);  //MATCH.FLOOR VAI PEGAR O VALO INTERIOR DA DIVISÃO DO VALOR ESCRITO PELO USUÁRIO POR 100.
    let resto = saque % 100; //CASO O VALOR TENHA RESTO POR EX: 1530, 1500/100 DÁ 15, SOBROU 30, AI ELE PASSA ADIANTE OS 30
    const notasCinquenta = Math.floor(resto / 50); //O MESMO PASSO ACIMA
    resto = resto % 50; //AQUI ELE VÊ SE O RESTO DO PRIMEIRO PASSO "NOTASCEM" O RESTO PODE SER DIVIDIDO POR 50, CASO NÃO POSSA ELE DIVIDE ABAIXO POR 10.
    const notasDez = Math.floor(resto / 10);
    if (notasCem > 0) {
        resp1.innerText = `Notas de R$ 100: ${notasCem}` //TROCA O VALOR DA STRING PELO VALOR ACUSADO PELA FORMULA ACIMA
    }
    if (notasCinquenta > 0) {
        resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
    }
    if (notasDez > 0) {
        resp3.innerText = `Notas de R$ 10: ${notasDez}`
    }

    sacar()

});


saque.addEventListener("click", () => {  //LIMPA TODOS OS ELEMENTOS 
    alert("O saque esta sendo processado...")
    alert("Sucesso!")
    removehid();
    frm.fixed.value="";
    resp1.innerText="";
    resp2.innerText="";
    resp3.innerText="";

})


function sacar () {
    saque.classList.remove("hidden")  //REMOVE A CLASS HIDDEN DO BTN DE SAQUE

}

function removehid () {
    saque.classList.add("hidden") //ADICCIONA A CLASS HIDDEN AO BTN DE SAQUE  //OBS: TRABALHA JUNTO COM CSS
}

