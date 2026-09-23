function cadastrar() {

    let nomeMusica = document.getElementById("musica").value;
    let nomeArtista = document.getElementById("artista").value;
    let tipoGenero = document.getElementById("genero").value;

    console.log("----- NOVA MÚSICA -----");
    console.log("Nome da música:", nomeMusica);
    console.log("Artista:", nomeArtista);
    console.log("Gênero:", tipoGenero);

    if (nomeMusica == "" || nomeArtista == "" || tipoGenero == "") {

        console.log("Preencha todos os campos!");

        document.getElementById("resultado").innerHTML =
            "⚠️ Preencha todos os campos!";

        return;
    }

    document.getElementById("resultado").innerHTML =
        "✓ Música adicionada com sucesso!";

}