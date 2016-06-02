
myApp.controller('MeuController', function($scope){
		
		$scope.pessoa = {};//{id: 0,nome:"",telefone:"",email:""};

	$scope.dados = [{ 
			id: 1,
			nome: 'Caluan Baierle',
			telefone : '(46)9975-4486',
			email: 'caluan.baierle@gmail.com'
		},{
			id:2,
			nome: 'Joao zinho',
			telefone : '(46)1234-4123',
			email: 'Joao.zinho@gmail.com'
		} ,{
			id:3,
			nome: 'euclides zinho',
			telefone : '(46)1234-1233',
			email: 'euclides.zinho@gmail.com'
		} ]


		$scope.showErro = function(descricao){
			swal("Atenção ", "Informe o "+descricao+" ", "warning");
		}

		//console.log($scope.dados);

		$scope.cadastrar1 = function(pessoa){
			
			if((pessoa.nome.length <2)){
				swal("Atenção ", "O nome deve ser maior que duas letras", "warning");
			}else if(pessoa.email.length < 7){
				swal("Atenção ", "Email Muito curto ", "warning");
			}else if((pessoa.telefone.length < 4)){
				swal("Atenção ", "Telefone cadastrado incorretamente", "warning");
			}else{
				var dado = pessoa;
				dado.id = $scope.dados.length +1;
				$scope.dados.push(angular.copy(dado));
				console.log($scope.dados);
				swal(pessoa.nome+" ", "Cadastrado com sucesso!", "success");
				$scope.pessoa = {id: 0,nome:"",telefone:"",email:""};
			}

		}

		$scope.cadastrar = function(pessoa){
			$scope.msgAlert = false;
			if(!!pessoa.nome){
				var dado = pessoa;
				dado.id = $scope.dados.length +1;
				$scope.dados.push(angular.copy(dado));
				console.log($scope.dados);
			swal(pessoa.nome+" ", "Cadastrado com sucesso!", "sucess");
			$scope.pessoa = {id: 0,nome:"",telefone:"",email:""};
			}else{
				$scope.msgAlert = true;
			}


		}




})