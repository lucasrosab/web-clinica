app.controller('PacienteCtrl', function($scope, $http){
    
    $('select').formSelect();
    
    $scope.paciente = {};

    $scope.pacientes = [
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

    $scope.paciente = {}
    

    $scope.cadastrarPaciente = function(paciente){
        console.log($scope.paciente);
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