let numeroSecreto;
let tentativas = 0;
let limite;

let melhorPontuacao =
    Number(localStorage.getItem("melhorPontuacao")) || 0;

document.getElementById("melhorPontuacao").textContent =
    melhorPontuacao;


function iniciarJogo(novoLimite) {

    limite = novoLimite;

    numeroSecreto =
        Math.floor(Math.random() * limite) + 1;

    tentativas = 0;

    document.getElementById("menu")
        .classList.add("hidden");

    document.getElementById("jogo")
        .classList.remove("hidden");

    document.getElementById("mensagem")
        .classList.remove("hidden");

    document.getElementById("resultado")
        .classList.add("hidden");

    document.getElementById("mensagem").innerHTML =
        '<p class="message-title">' +
        'Digite um número entre 1 e ' +
        limite +
        '.</p>';

    document.getElementById("tentativas")
        .textContent = "0";

    document.getElementById("palpite").value = "";

    document.getElementById("palpite").focus();
}


function verificarPalpite() {

    const campo =
        document.getElementById("palpite");

    const palpite =
        Number(campo.value);

    const mensagem =
        document.getElementById("mensagem");


    if (!palpite || palpite < 1 || palpite > limite) {

        mensagem.innerHTML =
            '<p class="message-title">' +
            'Digite um número válido.' +
            '</p>';

        return;
    }


    tentativas++;

    document.getElementById("tentativas")
        .textContent = tentativas;


    if (palpite === numeroSecreto) {

        let pontuacao =
            100 - (tentativas * 10);


        if (pontuacao < 0) {
            pontuacao = 0;
        }


        let novoRecorde = false;


        if (pontuacao > melhorPontuacao) {

            melhorPontuacao = pontuacao;

            localStorage.setItem(
                "melhorPontuacao",
                melhorPontuacao
            );

            novoRecorde = true;
        }


        document.getElementById("mensagem")
            .classList.add("hidden");

        document.getElementById("resultado")
            .classList.remove("hidden");

        document.getElementById("resultado")
            .classList.add("vitoria");


        document.getElementById("numeroFinal")
            .textContent = numeroSecreto;


        document.getElementById("tentativasFinal")
            .textContent = tentativas;


        document.getElementById("pontuacao")
            .textContent = pontuacao;


        document.getElementById("melhorPontuacao")
            .textContent = melhorPontuacao;


        const recorde =
            document.getElementById("novoRecorde");


        if (novoRecorde) {

            recorde.classList.remove("hidden");

        } else {

            recorde.classList.add("hidden");
        }


        campo.value = "";

    }


    else if (palpite < numeroSecreto) {

        mensagem.innerHTML =
            '<p class="message-title">' +
            'O número é maior.' +
            '</p>';

    }


    else {

        mensagem.innerHTML =
            '<p class="message-title">' +
            'O número é menor.' +
            '</p>';
    }


    campo.value = "";

    campo.focus();
}


function novoJogo() {

    iniciarJogo(limite);
}


function voltarMenu() {

    document.getElementById("jogo")
        .classList.add("hidden");

    document.getElementById("menu")
        .classList.remove("hidden");
}
