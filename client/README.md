# Web Clinica
Cenário Atual

Em uma clínica psicológica, é atendido diversos pacientes com diversos sintomas de depressão e ansiedade. Atualmente, a clínica necessita de um sistema que facilite a consulta e atendimento ao paciente, agilizando o trabalho do psicólogo. A idéia inicial é acabar com o acúmulo de fichas de cadastro de pacientes, para que haja uma forma eficiente e segura de cadastrar os pacientes e os prontuários.

A clínica atualmente utiliza formulários impressos montados pela clínica, que são entregues aos pacientes para que sejam preenchidos. Após o preenchimento, são separados para que ao final do expediente, os dados sejam repassados para uma planilha que é compartilhada com os atendentes e o administrador da clínica e serem armazenada no driver da empresa. Caso haja alguma pane nos computadores, e os mesmos sejam formatados, é realizado o download da planilha mais recente armazenada no drive com os dados dos pacientes. 
Durante a consulta, o psicólogo preenche um modelo de prontuário, anotando os dados clínicos informados pelo paciente, além de anotar suas análises clínicas. Após a consulta, o psicólogo armazena em seu arquivo pessoal, os dados do paciente consultado, para que haja um estudo posteriormente.

Solução

Inicialmente, foram observados que os atendentes realizam o cadastro dos pacientes com um formulário impresso que solicita ao paciente seu nome, rg, cpf, data de nascimento, tipo sanguíneo, endereço, numero, cidade, uf, bairro, algum meio de contato, alguma observação relevante sobre o paciente, usuário e senha, pois, na empresa há outro sistema que aproveitará dos dados de usuário e senha do paciente. 

Foi proposto a criação de um prontuário virtual para o uso do psicólogo, sendo observado na rotina do psicólogo, que são registrados as observações do paciente, como traumas passados, data e hora da consulta, nome do paciente e considerações do psicólogo, para que ele possa prosseguir em consultas posteriores. o módulo de prontuário, poderá ser acessado apenas pelo psicólogo. Sendo que o psicólogo poderá pesquisar, criar e alterar qualquer prontuário. 

Construção da Aplicação

A aplicação foi desenvolvida pelos alunos Lucas Rosa Barbosa CPD: 33992 e Gutemberg Dantas de Alencar CPD: 34665. O aluno Lucas, realizou a construção da interface da aplicação através das linguagens HTML5, CSS3 e JavaScript. Foram utilizados os frameworks Materializer para o designer responsivo e animações JavaScript, JQuery e JQuery Mask para a validação dos formulários de cadastro e AngularJS para a realização da passagem dos dados através de um web servisse e o carregamento de dados dos formulários. O aluno Gutemberg , realizou através do Node.js, a inserção dos dados na base de dados, além de desenvolver as outras operações de consulta, alterar e excluir os dados, além de auxiliar na modelagem da base de dados e utilização do framework Gulp.js para otimizar a performance da aplicação. O aluno Lucas e Gutemberg, realizaram a modelagem do banco relacional PostgreSQL, versão 11 e criou todos os scripts de  inserção, alteração, consulta e exclusão de tabelas e da base de dados.
