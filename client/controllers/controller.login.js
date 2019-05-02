app.controller('Login', function($scope, $http){

    $scope.login;
    $scope.usuarioLogado = false;

    $scope.logar = function (){
        $http({
            method : "POST",
            url : "localhost:8000/login",
            params: {usuario: login.usuario, senha: login.senha}
        }).then(function mySuccess(response) {
            $scope.usuarioLogado = true;
        }, function myError(response) {
            $scope.usuarioLogado = false;
        });
    }
})