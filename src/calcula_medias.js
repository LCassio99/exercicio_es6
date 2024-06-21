class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const alunos = [
    new Aluno('Maria', 8),
    new Aluno('João', 5),
    new Aluno('Ana', 7),
    new Aluno('Pedro', 4),
    new Aluno('Carla', 6)
];

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);