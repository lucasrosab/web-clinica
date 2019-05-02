-- WEB CLINICA
-- CREATE DATABASE clinica;

DROP SCHEMA IF EXISTS webclinica CASCADE;
CREATE SCHEMA webclinica;

SET search_path TO webclinica,public;
SET SCHEMA 'webclinica';

-- PESSOA
DROP SEQUENCE IF EXISTS webclinica.webcsq001_pessoa CASCADE;
CREATE SEQUENCE webclinica.webcsq001_pessoa INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1  NO CYCLE;

CREATE TABLE IF NOT EXISTS webclinica.tb001_pessoa (
        cod_pessoa BIGINT DEFAULT nextval('webclinica.webcsq001_pessoa'::regclass) NOT NULL,
        no_pessoa CHARACTER VARYING(200) NOT NULL,
        rg_pessoa CHARACTER VARYING(50),
        cpf_pessoa CHARACTER VARYING(15) NOT NULL,
        dt_nasc_pessoa CHARACTER VARYING(8) NOT NULL,
        tp_sangui_pessoa CHARACTER(3),
		dt_cadastro TIMESTAMP NOT NULL,
		no_usuario CHARACTER VARYING(128) NOT NULL,
		sh_usuario CHARACTER VARYING(128) NOT NULL,
        CONSTRAINT pk_tb001_pessoa PRIMARY KEY(cod_pessoa));
        
-- ENDEREÇO
DROP SEQUENCE IF EXISTS webclinica.webcsq002_tipo_endereco CASCADE;
CREATE SEQUENCE webclinica.webcsq002_tipo_endereco INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1  NO CYCLE;

CREATE TABLE IF NOT EXISTS webclinica.tb002_tipo_endereco (
	cod_tipo_endereco INT DEFAULT nextval('webclinica.webcsq002_tipo_endereco'::regclass) NOT NULL,
	no_tipo_endereco CHARACTER VARYING(20) NOT NULL,
	CONSTRAINT pk_tb002_tipo_endereco PRIMARY KEY (cod_tipo_endereco)
);

INSERT INTO webclinica.tb002_tipo_endereco (no_tipo_endereco) VALUES ('Casa'), ('Trabalho'), ('Faculdade'), ('Outro');

CREATE TABLE IF NOT EXISTS webclinica.tb003_endereco (
        cod_pessoa BIGINT NOT NULL,
		cod_tipo_endereco INT NULL,
        uf CHARACTER(2) NOT NULL,
        cidade CHARACTER(50) NOT NULL,
        bairro CHARACTER VARYING(80),
        endereco CHARACTER VARYING(120),
        numero CHARACTER(5),
        -- CONSTRAINT pk_tb003_endereco PRIMARY KEY(cod_pessoa, cod_tipo_endereco),
        CONSTRAINT fk_tb003_endereco_reference_tb001_pessoa FOREIGN KEY (cod_pessoa) REFERENCES "tb001_pessoa" ("cod_pessoa") ON DELETE CASCADE ON UPDATE CASCADE,
		CONSTRAINT fk_tb003_endereco_reference_tb002_tipo_endereco FOREIGN KEY (cod_tipo_endereco) REFERENCES "tb002_tipo_endereco" ("cod_tipo_endereco") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CONTATO
DROP SEQUENCE IF EXISTS webclinica.webcsq004_tipo_contato CASCADE;
CREATE SEQUENCE webclinica.webcsq004_tipo_contato INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1  NO CYCLE;

CREATE TABLE IF NOT EXISTS webclinica.tb004_tipo_contato (
	cod_tipo_contato INT DEFAULT nextval('webclinica.webcsq004_tipo_contato'::regclass) NOT NULL,
	no_tipo_contato CHARACTER VARYING(20) NOT NULL,
	CONSTRAINT pk_tb004_tipo_contato PRIMARY KEY (cod_tipo_contato)
);

INSERT INTO webclinica.tb004_tipo_contato (no_tipo_contato) VALUES ('E-mail'), ('Telefone'), ('Endereço'), ('Bairro'), ('Rua'), ('Outro');

CREATE TABLE IF NOT EXISTS webclinica.tb005_contato (
	cod_pessoa BIGINT NOT NULL,
	cod_tipo_contato INT,
	de_contato CHARACTER VARYING(80),
	-- CONSTRAINT pk_tb005_contato PRIMARY KEY(cod_pessoa, cod_tipo_contato),
    CONSTRAINT fk_tb005_contato_reference_tb001_pessoa FOREIGN KEY (cod_pessoa) REFERENCES "tb001_pessoa" ("cod_pessoa") ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_tb005_contato_reference_tb004_tipo_contato FOREIGN KEY (cod_tipo_contato) REFERENCES "tb004_tipo_contato" ("cod_tipo_contato") ON DELETE CASCADE ON UPDATE CASCADE
);

-- PACIENTE
DROP SEQUENCE IF EXISTS webclinica.webcsq006_plano_saude CASCADE;
CREATE SEQUENCE webclinica.webcsq006_plano_saude INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1  NO CYCLE;

CREATE TABLE IF NOT EXISTS webclinica.tb006_plano_saude (
	cod_plano_saude INT DEFAULT nextval('webclinica.webcsq006_plano_saude'::regclass) NOT NULL,
	cod_ans CHARACTER VARYING(100),
	no_plano CHARACTER VARYING(255) NOT NULL,
	de_plano CHARACTER VARYING(255) NOT NULL,
	CONSTRAINT pk_tb006_plano_saude PRIMARY KEY (cod_plano_saude)
);

DROP SEQUENCE IF EXISTS webclinica.webcsq007_paciente CASCADE;
CREATE SEQUENCE webclinica.webcsq007_paciente INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1  NO CYCLE;

CREATE TABLE IF NOT EXISTS webclinica.tb007_paciente (
	cod_paciente BIGINT DEFAULT nextval('webclinica.webcsq007_paciente'::regclass) NOT NULL,
	cod_pessoa BIGINT NOT NULL,
	cod_plano_saude INT DEFAULT NULL,
	de_paciente CHARACTER VARYING(255),
	CONSTRAINT pk_tb007_paciente PRIMARY KEY (cod_paciente),
	CONSTRAINT fk_tb007_paciente_reference_tb001_pessoa FOREIGN KEY (cod_pessoa) REFERENCES "tb001_pessoa" ("cod_pessoa") ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_tb007_paciente_reference_tb006_plano_saude FOREIGN KEY (cod_plano_saude) REFERENCES "tb006_plano_saude" ("cod_plano_saude") ON DELETE SET NULL ON UPDATE CASCADE
);

-- MÉDICO
DROP SEQUENCE IF EXISTS webclinica.webcsq008_medico CASCADE;
CREATE SEQUENCE webclinica.webcsq008_medico INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1  NO CYCLE;

CREATE TABLE IF NOT EXISTS webclinica.tb008_medico (
	cod_medico INT DEFAULT nextval('webclinica.webcsq008_medico'::regclass) NOT NULL,
	cod_pessoa BIGINT NOT NULL,
	crm CHARACTER VARYING(10) NOT NULL,
	especialidades CHARACTER VARYING(100) NOT NULL,
	atende_plano CHAR(1) NOT NULL,
	de_medico CHARACTER VARYING(255),
	CONSTRAINT pk_tb008_medico PRIMARY KEY (cod_medico),
	CONSTRAINT fk_tb008_medico_reference_tb001_pessoa FOREIGN KEY (cod_pessoa) REFERENCES "tb001_pessoa" ("cod_pessoa") ON DELETE CASCADE ON UPDATE CASCADE
);

-- PRONTUÁRIO
DROP SEQUENCE IF EXISTS webclinica.webcsq009_prontuario CASCADE;
CREATE SEQUENCE webclinica.webcsq009_prontuario INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1  NO CYCLE;

CREATE TABLE IF NOT EXISTS webclinica.tb009_prontuario (
	cod_prontuario BIGINT DEFAULT nextval('webclinica.webcsq009_prontuario'::regclass) NOT NULL,
	cod_paciente BIGINT NOT NULL,
	cod_medico INT DEFAULT NULL,
	dt_atendimento DATE NOT NULL,
	hr_atendimento TIME NOT NULL,
	de_paciente TEXT NOT NULL,
	anl_clinica TEXT NOT NULL,
	dt_alteracao TIMESTAMP,
	CONSTRAINT pk_tb009_prontuario PRIMARY KEY (cod_prontuario),
	CONSTRAINT fk_tb009_prontuario_reference_tb007_paciente FOREIGN KEY (cod_paciente) REFERENCES "tb007_paciente" ("cod_paciente") ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT fk_tb009_prontuario_reference_tb008_medico FOREIGN KEY (cod_medico) REFERENCES "tb008_medico" ("cod_medico") ON DELETE SET NULL ON UPDATE CASCADE
);

-- ATENDIMENTOS
-- STATUS ATENDIMENTO
-- FINANCEIRO
-- FUNCIONÁRIOS
-- AGENDAMENTOS
-- HORÁRIOS DISPONIBILIDADE MÉDICO (AGENDA DO MÉDICO)