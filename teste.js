const alunos = [
  {
    nome: 'João',
    nota: 8
  },
  {
    nome: 'Pedro',
    nota: 9
  },
  {
    nome: 'Marcos',
    nota: 6
  }
];

function resultado() {
  let teste = alunos.filter(aluno => aluno.nota > 6);
  console.log(teste);
}

resultado();

