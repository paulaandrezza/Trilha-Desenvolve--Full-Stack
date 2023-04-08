import User from "./User.js";

export default class Admin extends User {
  constructor(nome, sobrenome, email, nascimento, role = 'admin', ativo = true) {
    super(nome, sobrenome, email, nascimento, role, ativo)
  }

  exibirInfos() {
    return `${this.nome}, ${this.role}, ${this.ativo}`    // Polimorfismo, mesmo metódo, comportamento diferente
  }

  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
  }
}
