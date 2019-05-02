app.controller('ProntuarioCtrl', function($scope){

    M.AutoInit();

    $scope.prontuario = [{
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