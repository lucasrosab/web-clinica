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
            id: 0,
            nome: 'Lucas',
            cpf: '73103811100',
        },
        {
            id: 1,
            nome: 'Bruno',
            cpf: '73103811100',
        },
        {
            id: 2,
            nome: 'Gutemberg',
            cpf: '73103811100',
        }
    ];
    


    $scope.cadastrarPaciente = function(){      
        
        $scope.paciente.cpf = $('#cpf').cleanVal();
        console.log($scope.paciente);

        if($scope.paciente.codigo == null || $scope.paciente.codigo == "" ){
            M.toast({html: 'Insira o Código'})
        } else if($scope.paciente.nome == null || $scope.paciente.nome == ""){
            M.toast({html: 'Insira o Nome'})
        } else if($scope.paciente.cpf == null || $scope.paciente.cpf == ""){
            M.toast({html: 'Insira o CPF'})
        } else if($scope.paciente.plano == null || $scope.paciente.plano == ""){
            M.toast({html: 'Selecione o Plano de Saúde'})
        } else if($scope.paciente.endereco == null || $scope.paciente.endereco == ""){
            M.toast({html: 'Insira o Endereço'})
        } else if($scope.paciente.cidade == null || $scope.paciente.cidade == ""){
            M.toast({html: 'Insira a Cidade'})
        } else if($scope.paciente.uf == null || $scope.paciente.uf == ""){
            M.toast({html: 'Insira o UF'})
        }else if($scope.paciente.telefone == null || $scope.paciente.telefone == ""){
            M.toast({html: 'Insira o Telefone'})
        }else if($scope.paciente.email == null || $scope.paciente.email == ""){
            M.toast({html: 'Insira o UF'})
        }else{
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