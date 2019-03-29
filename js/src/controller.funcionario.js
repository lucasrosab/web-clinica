app.controller('FuncionarioCtrl', function($scope){

    M.AutoInit();
    
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#telefone').mask('(00) 0 0000-0000');

    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd',
        i18n:{
            months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
            weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            weekdaysAbbrev: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            today: 'Hoje',
            clear: 'Limpar',
            close: 'Pronto',
            cancel: 'Cancelar',
            labelMonthNext: 'Próximo mês',
            labelMonthPrev: 'Mês anterior',
            labelMonthSelect: 'Selecione um mês',
            labelYearSelect: 'Selecione um ano',
            selectMonths: true, 
            selectYears: 15
        }
    });

    $scope.funcionario = {};
    $scope.funcionarios = [
        {
            id: 0,
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

    $scope.cadastrarFuncionario = function () {
        $scope.funcionario.cpf = $('#cpf').cleanVal();
        console.log($scope.funcionario.cpf)
    }



});