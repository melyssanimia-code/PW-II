const botao = document.getElementById("calcular");

botao.addEventListener("click", function () {

    // STRING
    const destino = document.getElementById("destino").value;

    // NUMBER
    const dias = Number(document.getElementById("dias").value);
    const gastoDiario = Number(document.getElementById("gasto").value);

    // Fazendo algo com os dados
    const gastoTotal = dias * gastoDiario;

    // Mostrando os resultados no console
    console.log("===== PLANEJAMENTO DA VIAGEM =====");
    console.log("Destino:", destino);
    console.log("Quantidade de dias:", dias);
    console.log("Gasto diário: R$", gastoDiario);
    console.log("Gasto total: R$", gastoTotal);
});