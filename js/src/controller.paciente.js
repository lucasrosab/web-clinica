app.controller('PacienteCtrl', function($rootScope, $http){
    $rootScope.paciente = [
        {
            id: 0,
            paciente: 'Lucas',
            cpf: '73103811100',
        },
        {
            id: 1,
            paciente: 'Bruno',
            cpf: '73103811100',
        },
        {
            id: 2,
            paciente: 'Gutemberg',
            cpf: '73103811100',
        }
    ];


    
    function exibirPaciente(){
        $http({
            method : "GET",
            url : "welcome.htm"
          }).then(function mySuccess(response) {
            $rootScope.paciente = response.data;
          }, function myError(response) {
            $scope.agenda = response.statusText;
          });
    }

})