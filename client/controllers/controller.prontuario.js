app.controller('ProntuarioCtrl', function($scope){

    M.AutoInit();
    $scope.prontuario = {};
    $scope.prontuarios = [{
        codigo: 0,
        nome: 'Lucas',
        cpf: '123456789-11',
        data: '02-05-2019',
        hora: '00:00'
    },
    {
        codigo: 1,
        nome: 'Lucas',
        cpf: '123456789-11',
        data: '02-05-2019',
        hora: '00:00'
    }]

    $scope.cadastrarProntuario = function () {
        $scope.prontuarioCadastrado = false;
        if($scope.prontuario.nome == null || $scope.prontuario.nome == "" ){
            M.toast({html: 'Insira o Nome do Paciente', classes: 'rounded red'})
        } else if($scope.prontuario.codigo == null || $scope.prontuario.codigo == ""){
            M.toast({html: 'Insira o Codigo', classes: 'rounded red'})
        } else if($scope.prontuario.data == null || $scope.prontuario.data == ""){
            M.toast({html: 'Insira a Data da Consulta', classes: 'rounded red'})
        } else if($scope.prontuario.hora == null || $scope.prontuario.hora == ""){
            M.toast({html: 'Insira a Hora da Consulta', classes: 'rounded red'})
        } else if($scope.prontuario.relato == null || $scope.prontuario.relato == ""){
            M.toast({html: 'Insira o Relato do Paciente', classes: 'rounded red'})
        } else if($scope.prontuario.analise == null || $scope.prontuario.analise == ""){
            M.toast({html: 'Selecione a Análise', classes: 'rounded red'})
        } else{
            M.toast({html: 'Cadastrado com Sucesso', classes: 'rounded green'})
            console.log($scope.prontuario)
            $scope.prontuarios.push($scope.prontuario)
            $scope.prontuario = {}


        /*$http({
            method : "POST",
            url : "localhost:8000/prontuarios",
            params: 
          }).then(function mySuccess(response) {
            $scope.prontuarioCadastrado = true;
          }, function myError(response) {
            $scope.prontuarioCadastrado = false;
        });*/
    }

    // Esta função vai retornar um json e alimentar o $scope.prontuario, que será exibido em uma tabela atraves de um Ng-Repeat
    function listarProntuarios (){
        $http({
            method : "GET",
            url : "localhost:8000/prontuarios"
          }).then(function mySuccess(response) {
            $scope.prontuario = response.data;
          }, function myError(response) {
            $scope.prontuario = response.statusText;
        });
    }




})