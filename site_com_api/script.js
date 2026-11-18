
const formulario = document.getElementById('formBusca');
const campo = document.getElementById('materia');

const titulo = document.getElementById('tituloMateria');
const descricao = document.getElementById('descricao');
const icone = document.getElementById('iconeMateria');

const tempo = document.getElementById('tempo');
const nivel = document.getElementById('nivel');
const foco = document.getElementById('foco');
const mensagem = document.getElementById('mensagem');

const materias = {
    matematica: {
        nome: 'Matemática',
        descricao: 'Pratique cálculos e resolva exercícios.',
        icone: '➗',
        tempo: '30 min',
        nivel: 'Intermediário',
        foco: 'Praticar'
    },

    portugues: {
        nome: 'Português',
        descricao: 'Leia textos e revise a gramática.',
        icone: '📖',
        tempo: '25 min',
        nivel: 'Iniciante',
        foco: 'Interpretar'
    },

    programacao: {
        nome: 'Programação',
        descricao: 'Aprenda conceitos e pratique códigos.',
        icone: '💻',
        tempo: '40 min',
        nivel: 'Intermediário',
        foco: 'Criar'
    },

    historia: {
        nome: 'História',
        descricao: 'Revise acontecimentos históricos.',
        icone: '🏛️',
        tempo: '25 min',
        nivel: 'Iniciante',
        foco: 'Revisar'
    }
};

formulario.addEventListener('submit', function(evento) {

    evento.preventDefault();

    const pesquisa = campo.value.trim().toLowerCase();

    console.clear();

    console.log('===== STUDYFLOW =====');
    console.log('Matéria pesquisada:', pesquisa);

    if (pesquisa === '') {
        console.warn('Digite uma matéria!');
        titulo.textContent = 'Digite uma matéria';
        descricao.textContent = 'O campo está vazio.';
        return;
    }

    const chave = pesquisa.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    const dados = materias[chave];

    if (!dados) {
        console.warn('Matéria não encontrada!');

        titulo.textContent = 'Matéria não encontrada';
        descricao.textContent = 'Tente outra matéria.';
        icone.textContent = '🔎';

        return;
    }

    titulo.textContent = dados.nome;
    descricao.textContent = dados.descricao;
    icone.textContent = dados.icone;

    tempo.textContent = dados.tempo;
    nivel.textContent = dados.nivel;
    foco.textContent = dados.foco;

    mensagem.innerHTML =
        `<strong>Plano para ${dados.nome} pronto!</strong>
        <span>Comece seus estudos no seu ritmo.</span>`;

    console.log('Dados encontrados:', dados);
    console.table([dados]);
    console.log('Busca concluída com sucesso!');

});
