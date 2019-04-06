app.controller('FuncionarioCtrl', function($scope){

    M.AutoInit();
    
    $('#codigo').mask('000000');
    $('#dtnasc').mask('00/00/0000');
    $('#cpf').mask('000.000.000-00');
    $('#uf').mask('SS');
    $('#telefone').mask('(00) 00000-0000'); 

    $scope.funcionario = {};
    $scope.funcionarios = [
        {
            codigo: 0,
            nome: 'Lucas'
        },
        {
            id: 1,
            nome: 'Lucas'
        },
        {
            id: 2,
            nome: 'Lucas'
        }
    ]

    $scope.estado = function (){
        var botao = document.getElementById('botao')
        var conteudo = document.getElementById('funcionarios').style.display

        if(conteudo == 'none'){
            document.getElementById('funcionarios').style.display = 'block'
            botao.innerHTML = "Ocultar"
        } else{
            document.getElementById('funcionarios').style.display = 'none'
            botao.innerHTML = 'Listar'
        }
    }

    $scope.cadastrarFuncionario = function () {
        if($scope.funcionario.codigo == null || $scope.funcionario.codigo == "" ){
            M.toast({html: 'Insira o Código', classes: 'rounded red'})
        } else if($scope.funcionario.nome == null || $scope.funcionario.nome == ""){
            M.toast({html: 'Insira o Nome', classes: 'rounded red'})
        } else if($scope.funcionario.sobrenome == null || $scope.funcionario.sobrenome == ""){
            M.toast({html: 'Insira o Sobrenome', classes: 'rounded red'})
        } else if($scope.funcionario.dtnasc == null || $scope.funcionario.dtnasc == ""){
            M.toast({html: 'Insira a Data de Nascimento', classes: 'rounded red'})
        } else if($scope.funcionario.cpf == null || $scope.funcionario.cpf == ""){
            M.toast({html: 'Insira o CPF', classes: 'rounded red'})
        } else if($scope.funcionario.plano == null || $scope.funcionario.plano == ""){
            M.toast({html: 'Selecione o Plano de Saúde', classes: 'rounded red'})
        } else if($scope.funcionario.endereco == null || $scope.funcionario.endereco == ""){
            M.toast({html: 'Insira o Endereço', classes: 'rounded red'})
        } else if($scope.funcionario.cidade == null || $scope.funcionario.cidade == ""){
            M.toast({html: 'Insira a Cidade', classes: 'rounded red'})
        } else if($scope.funcionario.uf == null || $scope.funcionario.uf == ""){
            M.toast({html: 'Insira o UF', classes: 'rounded red'})
        }else if($scope.funcionario.telefone == null || $scope.funcionario.telefone == ""){
            M.toast({html: 'Insira o Telefone', classes: 'rounded red'})
        }else if($scope.funcionario.email == null || $scope.funcionario.email == ""){
            M.toast({html: 'Insira o Email', classes: 'rounded red'})
        }else{
            M.toast({html: 'Cadastrado com Sucesso', classes: 'rounded green'})
            console.log($scope.funcionario)
            $scope.funcionarios.push($scope.funcionario)
            $scope.funcionario = {}

            /*$http({
                method : "GET",
                url : "welcome.htm"
            }).then(function mySuccess(response) {
            }, function myError(response) {
                $scope.myWelcome = response.statusText;
            });*/
        }   
    }



});