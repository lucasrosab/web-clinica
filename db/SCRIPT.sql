CREATE TABLE pessoa (
  codpessoa INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR NULL,
  sobrenome VARCHAR NULL,
  dtnasc DATE NULL,
  sexo VARCHAR NULL,
  cpf VARCHAR NULL,
  endereco VARCHAR NULL,
  cidade VARCHAR NULL,
  uf VARCHAR NULL,
  PRIMARY KEY(codpessoa)
);

CREATE TABLE acesso (
  idacesso INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR NULL,
  PRIMARY KEY(idacesso)
);

CREATE TABLE paciente (
  pessoa_codpessoa INTEGER UNSIGNED NOT NULL,
  planosaude VARCHAR NOT NULL AUTO_INCREMENT,
  PRIMARY KEY(pessoa_codpessoa),
  INDEX paciente_FKIndex1(pessoa_codpessoa),
  FOREIGN KEY(pessoa_codpessoa)
    REFERENCES pessoa(codpessoa)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE funcionario (
  pessoa_codpessoa INTEGER UNSIGNED NOT NULL,
  acesso_idacesso INTEGER UNSIGNED NOT NULL,
  turno VARCHAR NOT NULL AUTO_INCREMENT,
  carteira_trabalho VARCHAR NULL,
  usuario VARCHAR NOT NULL,
  senha VARCHAR NOT NULL,
  ensino VARCHAR NULL,
  PRIMARY KEY(pessoa_codpessoa),
  INDEX funcionario_FKIndex1(pessoa_codpessoa),
  INDEX funcionario_FKIndex2(acesso_idacesso),
  FOREIGN KEY(pessoa_codpessoa)
    REFERENCES pessoa(codpessoa)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(acesso_idacesso)
    REFERENCES acesso(idacesso)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE psicologo (
  funcionario_pessoa_codpessoa INTEGER UNSIGNED NOT NULL,
  CRP VARCHAR NOT NULL AUTO_INCREMENT,
  PRIMARY KEY(funcionario_pessoa_codpessoa),
  INDEX psicologo_FKIndex1(funcionario_pessoa_codpessoa),
  FOREIGN KEY(funcionario_pessoa_codpessoa)
    REFERENCES funcionario(pessoa_codpessoa)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE prontuario (
  idprontuario INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  psicologo_funcionario_pessoa_codpessoa INTEGER UNSIGNED NOT NULL,
  pessoa_codpessoa INTEGER UNSIGNED NOT NULL,
  relato_paciente TEXT NULL,
  relato_psicologo TEXT NULL,
  dt_prontuario DATE NULL,
  PRIMARY KEY(idprontuario),
  INDEX prontuario_FKIndex1(pessoa_codpessoa),
  INDEX prontuario_FKIndex2(psicologo_funcionario_pessoa_codpessoa),
  FOREIGN KEY(pessoa_codpessoa)
    REFERENCES pessoa(codpessoa)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(psicologo_funcionario_pessoa_codpessoa)
    REFERENCES psicologo(funcionario_pessoa_codpessoa)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE consulta (
  paciente_pessoa_codpessoa INTEGER UNSIGNED NOT NULL,
  psicologo_funcionario_pessoa_codpessoa INTEGER UNSIGNED NOT NULL,
  dtm DATETIME NOT NULL,
  PRIMARY KEY(paciente_pessoa_codpessoa, psicologo_funcionario_pessoa_codpessoa, dtm),
  INDEX paciente_has_psicologo_FKIndex1(paciente_pessoa_codpessoa),
  INDEX paciente_has_psicologo_FKIndex2(psicologo_funcionario_pessoa_codpessoa),
  FOREIGN KEY(paciente_pessoa_codpessoa)
    REFERENCES paciente(pessoa_codpessoa)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
  FOREIGN KEY(psicologo_funcionario_pessoa_codpessoa)
    REFERENCES psicologo(funcionario_pessoa_codpessoa)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);


