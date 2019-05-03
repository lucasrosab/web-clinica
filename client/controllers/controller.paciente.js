app.controller('PacienteCtrl', function($scope, $http){
    
    M.AutoInit();

    $('#codigo').mask('000000');
    $('#dtnasc').mask('00000000');
    $('#cpf').mask('000.000.000-00');
    $('#uf').mask('SS');
    $('#telefone').mask('(00) 00000-0000');

    $scope.paciente = {};
    $scope.pacientes = [];
    
    $scope.estado = function (){
        var botao = document.getElementById('botao')
        var conteudo = document.getElementById('pacientes').style.display

        if(conteudo == 'none'){
            $http({
                method : "GET",
                url : "http://localhost:8000/api/pacientes"
              }).then(function mySuccess(response) {

                    // VERIFICAR NO CONSOLE A RESPOSTA DO SERVER
                    console.warn(response.data.result);
                    $scope.pacientes = response.data.result;

              }, function myError(response) {
                    $scope.pacientes = [];
              });


            document.getElementById('pacientes').style.display = 'block'
            botao.innerHTML = "Ocultar"
        } else{
            document.getElementById('pacientes').style.display = 'none'
            botao.innerHTML = 'Consultar'
        }
    }


    $scope.cadastrarPaciente = function(){ 
        $scope.pacienteCadastrado = false;     

        // TROCAR O NOME DOS ATRIBUTOS LÁ NO NG-MODELS DOS INPUTS E AQUI
        if($scope.paciente.no_pessoa == null || $scope.paciente.no_pessoa == "") {
            M.toast({html: 'Insira o Nome', classes: 'rounded red'});

        } else if($scope.paciente.cpf_pessoa == null || $scope.paciente.cpf_pessoa == "") {
            M.toast({html: 'Insira o CPF', classes: 'rounded red'});

        } else if($scope.paciente.no_usuario == null || $scope.paciente.no_usuario == "") {
            M.toast({html: 'Insira um nome de usuário', classes: 'rounded red'});

        } else if ($scope.paciente.sh_usuario == null || $scope.paciente.sh_usuario == "") {
            M.toast({html: 'Insira uma senha', classes: 'rounded red'});
        
        } else {
            const n_paciente = $scope.paciente;
            console.log(n_paciente);

            $http.post("http://localhost:8000/api/pacientes", 
                { "paciente": n_paciente }, 
                { headers: {'Content-Type': 'application/json'}})
                .then(function mySuccess(response) {

                    console.warn(response.data.result);
                    $scope.pacientes.push(n_paciente);
                    $scope.paciente = {}
                    $scope.pacienteCadastrado = true;
                    M.toast({html: response.data.result, classes: 'rounded green'});
                }).erro;
        }

    }

    // Esta função vai retornar um json e alimentar o $scope.paciente, que será exibido em uma tabela atraves de um Ng-Repeat
    function exibirPaciente(){
        $http({
            method : "GET",
            url : "localhost:8000/paciente"
          }).then(function mySuccess(response) {
            $scope.paciente = response.data;
          }, function myError(response) {
            $scope.paciente = response.statusText;
          });
    }

    exibirPaciente();
    
})