app.controller('PacienteCtrl', function($scope, $http){
    
    M.AutoInit();

    $('#codigo').mask('000000');
    $('#dtnasc').mask('00/00/0000');
    $('#cpf').mask('000.000.000-00');
    $('#uf').mask('SS');
    $('#telefone').mask('(00) 00000-0000');

    $scope.paciente = {};

    $scope.pacientes = [
        {
            codigo: 0,
            nome: 'Lucas',
            cpf: '73103811100',
        },
        {
            codigo: 1,
            nome: 'Bruno',
            cpf: '73103811100',
        },
        {
            codigo: 2,
            nome: 'Gutemberg',
            cpf: '73103811100',
        }
    ];
    
    $scope.estado = function (){
        var botao = document.getElementById('botao')
        var conteudo = document.getElementById('pacientes').style.display

        if(conteudo == 'none'){
            document.getElementById('pacientes').style.display = 'block'
            botao.innerHTML = "Ocultar"
        } else{
            document.getElementById('pacientes').style.display = 'none'
            botao.innerHTML = 'Listar'
        }
    }


    $scope.cadastrarPaciente = function(){      
        if($scope.paciente.codigo == null || $scope.paciente.codigo == "" ){
            M.toast({html: 'Insira o Código', classes: 'rounded red'})
        } else if($scope.paciente.nome == null || $scope.paciente.nome == ""){
            M.toast({html: 'Insira o Nome', classes: 'rounded red'})
        } else if($scope.paciente.sobrenome == null || $scope.paciente.sobrenome == ""){
            M.toast({html: 'Insira o Sobrenome', classes: 'rounded red'})
        } else if($scope.paciente.dtnasc == null || $scope.paciente.dtnasc == ""){
            M.toast({html: 'Insira a Data de Nascimento', classes: 'rounded red'})
        } else if($scope.paciente.cpf == null || $scope.paciente.cpf == ""){
            M.toast({html: 'Insira o CPF', classes: 'rounded red'})
        } else if($scope.paciente.plano == null || $scope.paciente.plano == ""){
            M.toast({html: 'Selecione o Plano de Saúde', classes: 'rounded red'})
        } else if($scope.paciente.endereco == null || $scope.paciente.endereco == ""){
            M.toast({html: 'Insira o Endereço', classes: 'rounded red'})
        } else if($scope.paciente.cidade == null || $scope.paciente.cidade == ""){
            M.toast({html: 'Insira a Cidade', classes: 'rounded red'})
        } else if($scope.paciente.uf == null || $scope.paciente.uf == ""){
            M.toast({html: 'Insira o UF', classes: 'rounded red'})
        }else if($scope.paciente.telefone == null || $scope.paciente.telefone == ""){
            M.toast({html: 'Insira o Telefone', classes: 'rounded red'})
        }else if($scope.paciente.email == null || $scope.paciente.email == ""){
            M.toast({html: 'Insira o Email', classes: 'rounded red'})
        }else{
            M.toast({html: 'Cadastrado com Sucesso', classes: 'rounded green'})
            console.log($scope.paciente)
            $scope.pacientes.push($scope.paciente)
            $scope.paciente = {}

            /*$http({
                method : "GET",
                url : "welcome.htm"
            }).then(function mySuccess(response) {
            }, function myError(response) {
                $scope.myWelcome = response.statusText;
            });*/
        }   

    }

    function exibirPaciente(){
        $http({
            method : "GET",
            url : "welcome.htm"
          }).then(function mySuccess(response) {
            $scope.paciente = response.data;
          }, function myError(response) {
            $scope.agenda = response.statusText;
          });
    }

    
})