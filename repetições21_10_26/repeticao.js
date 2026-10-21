
let opcao = document.getElementById("opcao");
let botao = document.getElementById("executar");
let resultado = document.getElementById("resultado");

let filmes = ["Stranger Things", "Wandinha", "Round 6"];

botao.addEventListener("click", function () {
    let escolha = Number(opcao.value);
    let texto = "";

    switch (escolha) {
        case 1:
            texto = "<h3>⭐ Meus favoritos</h3>";

            for (let i = 0; i < filmes.length; i++) {
                texto += "<p>" + (i + 1) + ". " + filmes[i] + "</p>";
            }
            break;

        case 2:
            texto = "<h3>📺 Contagem de episódios</h3>";

            let contador = 1;

            while (contador <= 5) {
                texto += "<p>Episódio " + contador + "</p>";
                contador++;
            }
            break;

        case 3:
            texto = "<h3>🍿 Minha maratona</h3>";

            let numero = 1;

            do {
                texto += "<p>Assistindo episódio " + numero + "</p>";
                numero++;
            } while (numero <= 5);
            break;

        default:
            texto = "<p>Opção inválida!</p>";
    }

    resultado.innerHTML = texto;
});
