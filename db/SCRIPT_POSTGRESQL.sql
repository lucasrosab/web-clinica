-- SCHEMA: clinica

-- DROP SCHEMA clinica ;

-- CRIAR O SCHEMA CLINICA E EM SEGUIDA EXECUTAR OS SCRIPTS ABAIXO

-- SCHEMA: clinica
CREATE SCHEMA clinica

-- Table: clinica.pessoa

-- DROP TABLE clinica.pessoa;

CREATE TABLE clinica.pessoa
(
    idpessoa integer NOT NULL,
    nome character varying(100) NOT NULL,
    sobrenome character varying(50),
    dtnasc date NOT NULL,
    sexo character varying(10) NOT NULL,
    cpf character varying(15) NOT NULL,
    endereco character varying(100) NOT NULL,
    cidade character varying(100) NOT NULL,
    uf character varying(2) NOT NULL,
    CONSTRAINT pessoa_pk PRIMARY KEY (idpessoa)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

COMMENT ON TABLE clinica.pessoa
    IS 'Tabela utilizada para o cadastro de pessoas, que serão especializadas em: Paciente e Funcionarios';

-- Table: clinica.acesso

-- DROP TABLE clinica.acesso;

CREATE TABLE clinica.acesso
(
    idacesso serial NOT NULL,
    nome character varying(20) NOT NULL,
    CONSTRAINT acesso_pk PRIMARY KEY (idacesso)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

COMMENT ON TABLE clinica.acesso
    IS 'Tabela para o nível de acesso dos funcionários, que serão definidos na aplicação';
	
-- Table: clinica.paciente

-- DROP TABLE clinica.paciente;

CREATE TABLE clinica.paciente
(
    idpaciente integer NOT NULL,
    planosaude character varying(20) NOT NULL,
    CONSTRAINT paciente_pk PRIMARY KEY (idpaciente),
    CONSTRAINT paciente_fk FOREIGN KEY (idpaciente)
        REFERENCES clinica.pessoa (idpessoa) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

COMMENT ON TABLE clinica.paciente
    IS 'Tabela de especialização dos pacientes em relação a pessoas';

-- Table: clinica.funcionario

-- DROP TABLE clinica.funcionario;

CREATE TABLE clinica.funcionario
(
    idfuncionario integer NOT NULL,
    turno character varying(15) NOT NULL,
    usuario character varying(20) NOT NULL,
    senha character varying(20) NOT NULL,
    ensino character varying(50),
    acesso integer NOT NULL,
    CONSTRAINT funcionario_pk PRIMARY KEY (idfuncionario),
    CONSTRAINT acesso_fk FOREIGN KEY (acesso)
        REFERENCES clinica.acesso (idacesso) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT funcionario_fk FOREIGN KEY (idfuncionario)
        REFERENCES clinica.pessoa (idpessoa) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

COMMENT ON TABLE clinica.funcionario
    IS 'Tabela de especialização dos funcionários em relação a pessoas. Tabela utilizada para o cadastro de funcionários, que será especializada em: Psicologo';

-- Table: clinica.psicologo

-- DROP TABLE clinica.psicologo;

CREATE TABLE clinica.psicologo
(
    idpsicologo integer NOT NULL,
    crp character varying(20) NOT NULL,
    CONSTRAINT psicologo_pk PRIMARY KEY (idpsicologo),
    CONSTRAINT psicologo_fk FOREIGN KEY (idpsicologo)
        REFERENCES clinica.funcionario (idfuncionario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

COMMENT ON TABLE clinica.psicologo
    IS 'Tabela de especialização dos psicólogos em relação a funcionários';
	
-- Table: clinica.prontuario

-- DROP TABLE clinica.prontuario;

CREATE TABLE clinica.prontuario
(
    idprontuario serial NOT NULL,
    psicologo integer NOT NULL,
    pessoa integer NOT NULL,
    relato_pessoa text,
    relato_psicologo text,
    dtm timestamp without time zone NOT NULL,
    CONSTRAINT prontuario_pk PRIMARY KEY (idprontuario),
    CONSTRAINT pessoa_fk FOREIGN KEY (pessoa)
        REFERENCES clinica.pessoa (idpessoa) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT psicologo_fk FOREIGN KEY (psicologo)
        REFERENCES clinica.psicologo (idpsicologo) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

COMMENT ON TABLE clinica.prontuario
    IS 'Tabela com os prontuários a serem preenchidos pelos psicólogos';
	
-- Table: clinica.consulta

-- DROP TABLE clinica.consulta;

CREATE TABLE clinica.consulta
(
    paciente integer NOT NULL,
    psicologo integer NOT NULL,
    dtm time without time zone NOT NULL,
    CONSTRAINT consulta_pk PRIMARY KEY (paciente, psicologo, dtm),
    CONSTRAINT paciente_fk FOREIGN KEY (paciente)
        REFERENCES clinica.paciente (idpaciente) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT psicologo_fk FOREIGN KEY (psicologo)
        REFERENCES clinica.psicologo (idpsicologo) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

COMMENT ON TABLE clinica.consulta
    IS 'Tabela com as consultas realizadas';