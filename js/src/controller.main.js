app.controller('Main', function($scope, $http){

    $scope.agenda = [
        {
            id: 0,
            paciente: 'Lucas',
            inicio: '12:00',
            psicologo: 'Gutemberg'
        },
        {
            id: 1,
            paciente: 'Lucas',
            inicio: '12:00',
            psicologo: 'Gutemberg'
        },
        {
            id: 2,
            paciente: 'Lucas',
            inicio: '12:00',
            psicologo: 'Gutemberg'
        },
    ];


    
    function carregarAgenda(){
        $http({
            method : "GET",
            url : "welcome.htm"
          }).then(function mySuccess(response) {
            $scope.agenda = response.data;
          }, function myError(response) {
            $scope.agenda = response.statusText;
          });
    }

    



});